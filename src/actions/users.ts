'use server'

import { createClient } from "@/utils/supabase/server";
import { UserRole, SubscriptionPlan } from "@/types/content";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getUsers(filters?: { search?: string; page?: number; limit?: number }) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        return {
            data: [
                {
                    id: 'u1',
                    email: 'admin@example.com',
                    profile: {
                        user_id: 'u1', // profile often has user_id as FK, but PK might be id
                        id: 'u1',
                        role: 'admin',
                        plan: 'pro',
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    }
                },
                {
                    id: 'u2',
                    email: 'member@example.com',
                    profile: {
                        user_id: 'u2',
                        id: 'u2',
                        role: 'member',
                        plan: 'access',
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    }
                }
            ] as any,
            count: 2,
            totalPages: 1
        };
    }

    try {
        const supabase = await createClient();
        const page = filters?.page || 1;
        const limit = filters?.limit || 20;
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        // Fetch profiles. Note: In this schema, profile 'id' is the user's UUID.
        let query = supabase
            .from('profiles')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(from, to);

        if (filters?.search) {
            query = query.ilike('name', `%${filters.search}%`);
        }

        const { data, count, error } = await query;

        if (error) throw error;

        // Transform to match the shape expected by UI if needed, but for now passing profiles as users
        // The UI expects { id, email, profile: { ... } } roughly?
        // Actually the UI code I saw mapped users.map(user => user.email)
        // Check UI again: users?.map((user) => <TableCell>{user.email}</TableCell> ... initialRole={user.profile?.role})
        // Real Supabase profiles table usually doesn't have email unless we sync it or join auth.users (hard)
        // For simplicity, we'll return the profile AS the user object, and email might be missing or we use a fallback.
        // OR we can rely on 'email' column if it exists in profiles (check schema.sql).
        // Checking schema.sql (memory): create table public.profiles ( id uuid references auth.users ... )
        // It does NOT have email.
        // HACK: For now, we'll return ID as email fallback or fetch email if possible?
        // Getting email from auth.users requires admin API.
        // Let's just return the profile and in UI display ID if email missing.

        const mappedData = data?.map(p => ({
            id: p.id,
            email: p.id, // Fallback since we can't easily get email without service role
            profile: p
        }));

        return {
            data: mappedData,
            count: count || 0,
            totalPages: count ? Math.ceil(count / limit) : 0
        };
    } catch (error: any) {
        console.error('Error fetching users, using mock data:', error);
        return {
            data: [],
            count: 0,
            totalPages: 0,
            error: error.message || 'Unknown error'
        };
    }
}

export async function updateUserRole(userId: string, role: UserRole) {
    const supabase = await createClient();

    // Use 'id' as it is the primary key and matches auth.uid() in profiles table
    const { error } = await supabase
        .from('profiles')
        .update({ role })
        .eq('id', userId);

    if (error) {
        console.error('Error updating user role:', error);
        return { error: error.message };
    }

    revalidatePath('/admin/users');
    return { success: true };
}

export async function updateUserPlan(userId: string, plan: SubscriptionPlan | null) {
    const supabase = await createClient();

    const { error } = await supabase
        .from('profiles')
        .update({ plan })
        .eq('id', userId);

    if (error) {
        console.error('Error updating user plan:', error);
        return { error: error.message };
    }

    revalidatePath('/admin/users');
    return { success: true };
}


'use server'

import { createClient } from "@/utils/supabase/server";
import { UserRole, SubscriptionPlan } from "@/types/content";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getUsers(filters?: { search?: string; page?: number; limit?: number }) {
    const isMock = process.env.NODE_ENV !== 'production' && (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        return {
            data: [
                {
                    id: 'u1',
                    email: 'admin@example.com',
                    profile: {
                        user_id: 'u1',
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
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return { data: [], count: 0, totalPages: 0, error: 'Acceso no autorizado' };
        }

        const page = filters?.page || 1;
        const limit = filters?.limit || 20;
        const from = (page - 1) * limit;
        const to = from + limit - 1;

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

        const mappedData = data?.map((p: any) => ({
            id: p.id,
            email: p.email || p.id,
            profile: p
        }));

        return {
            data: mappedData,
            count: count || 0,
            totalPages: count ? Math.ceil(count / limit) : 0
        };
    } catch (error: any) {
        console.error('Error fetching users:', error);
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

    // Check caller authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        return { error: 'No autorizado: Sesión requerida' };
    }

    // Check if caller is admin (allow in mock mode during dev)
    const isMock = process.env.NODE_ENV !== 'production' && (await cookies()).get('mock_session')?.value === 'true';
    if (!isMock) {
        const { data: callerProfile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (callerProfile?.role !== 'admin') {
            return { error: 'Prohibido: Se requieren privilegios de Administrador' };
        }
    }

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

    // Check caller authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        return { error: 'No autorizado: Sesión requerida' };
    }

    // Check if caller is admin (allow in mock mode during dev)
    const isMock = process.env.NODE_ENV !== 'production' && (await cookies()).get('mock_session')?.value === 'true';
    if (!isMock) {
        const { data: callerProfile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (callerProfile?.role !== 'admin') {
            return { error: 'Prohibido: Se requieren privilegios de Administrador' };
        }
    }

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


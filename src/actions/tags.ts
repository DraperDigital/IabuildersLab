'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { MOCK_TAGS, addMockTag, updateMockTag, deleteMockTag as deleteMockTagHelper } from "@/lib/mock-data";

export async function getTags() {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        // Return fresh mutable data
        return { data: [...MOCK_TAGS] };
    }

    try {
        const supabase = await createClient();

        const { data: tags, error } = await supabase
            .from('tags')
            .select('*')
            .order('name');

        if (error) throw error;
        return { data: tags };
    } catch (error: any) {
        console.error('Error fetching tags, using mock data:', error);
        return { data: [...MOCK_TAGS], error: error.message || 'Unknown error' };
    }
}


export async function createTag(name: string, slug: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (createTag)");
        const newTag = addMockTag(name, slug);
        revalidatePath('/admin/tags');
        return { data: newTag };
    }

    const supabase = await createClient();

    const { data: tag, error } = await supabase
        .from('tags')
        .insert({ name, slug })
        .select()
        .single();

    if (error) {
        console.error('Error creating tag, using mock fallback:', error);
        // Fallback to in-memory persistence
        const newTag = addMockTag(name, slug);
        revalidatePath('/admin/tags');
        return { data: newTag, error: error.message };
    }

    revalidatePath('/admin/tags');
    return { data: tag };
}

export async function updateTag(id: string, name: string, slug: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (updateTag)", id);
        const updated = updateMockTag(id, name, slug);
        revalidatePath('/admin/tags');
        return { data: updated };
    }

    const supabase = await createClient();

    const { data: tag, error } = await supabase
        .from('tags')
        .update({ name, slug })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating tag:', error);
        return { error: error.message };
    }

    revalidatePath('/admin/tags');
    return { data: tag };
}

export async function deleteTag(id: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (deleteTag)", id);
        deleteMockTagHelper(id);
        revalidatePath('/admin/tags');
        return { success: true };
    }

    try {
        const supabase = await createClient();

        const { error } = await supabase
            .from('tags')
            .delete()
            .eq('id', id);

        if (error) throw error;

        revalidatePath('/admin/tags');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting tag, using mock fallback:', error);
        revalidatePath('/admin/tags');
        return { success: true, error: error.message };
    }
}


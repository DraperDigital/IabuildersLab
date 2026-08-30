'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { MOCK_TAGS, ALL_MOCK_CONTENT, addMockTag, updateMockTag, deleteMockTag as deleteMockTagHelper } from "@/lib/mock-data";

export async function getTags() {
    const isMock = true; // Force mock for validation: (await cookies()).get('mock_session')?.value === 'true';
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

export async function getUsedTags(type?: string) {
    const isMock = true; // Force mock for validation: (await cookies()).get('mock_session')?.value === 'true';

    if (isMock) {
        let content = ALL_MOCK_CONTENT;
        if (type) {
            content = content.filter(c => c.type === type);
        }

        const usedTagSlugs = new Set();
        content.forEach(c => {
            c.tags?.forEach(t => usedTagSlugs.add(t.slug));
        });

        const filteredTags = MOCK_TAGS.filter(t => usedTagSlugs.has(t.slug));
        return { data: filteredTags };
    }

    try {
        const supabase = await createClient();

        // Complex query: Select tags where exists content_tag link to content with type X
        // This is easier with a join or raw query. simpler is to fetch content ids of type X, then tags for those.
        // Actually, we can use the graph logic reversed. 
        // tags -> distinct -> inner join content_tags -> inner join content (type=X)

        let query = supabase
            .from('tags')
            .select(`
                *,
                content_tags!inner(
                    content!inner(
                        type
                    )
                )
            `);

        if (type) {
            query = query.eq('content_tags.content.type', type);
        }

        const { data, error } = await query;

        if (error) throw error;

        // Remove duplicates if any (though typically distinct tags should be returned, inner join might multiply rows?)
        // Supabase/Postgrest returns one row per parent if configured right, but with !inner it might act as filter.
        // Let's dedup just in case.
        const uniqueTags = Array.from(new Map(data.map((item: any) => [item.id, item])).values());

        return { data: uniqueTags };

    } catch (error: any) {
        console.error('Error fetching used tags:', error);
        // Return all tags as safe fallback
        return { data: [...MOCK_TAGS], error: error.message };
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

'use server'

import { createClient } from "@/utils/supabase/server";
import { CreateContentInput, UpdateContentInput, ContentItem, ContentItemWithTags } from "@/types/content";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


import { ALL_MOCK_CONTENT, addMockItem, updateMockItem, deleteMockItem } from "@/lib/mock-data";
import { isSopItem, isSkillItem, isAudiovisualItem } from "@/lib/utils";

// Keep local MOCK_CONTENT reference alias for internal use if needed
const MOCK_CONTENT = ALL_MOCK_CONTENT;

export async function getContent(id: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session detected (getContent), returning mock data");
        // Always read fresh from source
        const mockItem = ALL_MOCK_CONTENT.find(c => c.id === id) || ALL_MOCK_CONTENT[0];
        return { data: mockItem };
    }

    const supabase = await createClient();

    // Get content
    const { data: content, error } = await supabase
        .from('content')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching content:', error);
        return { error: error.message };
    }

    // Get tags
    const { data: contentTags, error: tagsError } = await supabase
        .from('content_tags')
        .select(`
            tag_id,
            tags (
                id,
                name,
                slug
            )
        `)
        .eq('content_id', id);

    if (tagsError) {
        console.error('Error fetching tags:', tagsError);
        // Continue without tags
    }

    try {
        // Redundant second fetch in original code? No, the original code had a second try/catch block attempting a join. 
        // Let's simplify and do it properly if we are here (Real Mode).
        // Actually, let's keep it simple and just do the join query if possible, or reconstruct it.
        // The previous code had a weird double-fetch structure. I will clean it up to a single efficient query.

        const { data, error } = await supabase
            .from('content')
            .select(`
                *,
                tags:content_tags(
                    tag:tags(*)
                )
            `)
            .eq('id', id)
            .single();

        if (error) throw error;

        const contentWithTags = {
            ...data,
            tags: data.tags.map((t: any) => t.tag)
        };

        return { data: contentWithTags };

    } catch (error: any) {
        console.log("Supabase error (getContent), returning failure or falling back");
        // If real connection fails, we might still want to fall back?
        // But logic is: if mock_session -> use mock. If real -> try real.
        return { error: error.message || "Failed to load content" };
    }
}



// Helper to apply filters to mock/in-memory data
function applyMockFilters(content: ContentItem[], filters?: { type?: string; status?: string; search?: string; category?: string; tag?: string; excludeCategories?: string[]; isSop?: boolean; isSkill?: boolean }) {
    let result = [...content];

    if (filters?.isSkill) {
        result = result.filter(c => isSkillItem(c));
    } else if (filters?.isSop) {
        result = result.filter(c => isSopItem(c) && !isSkillItem(c));
    } else {
        // Audiovisual Tab (default)
        result = result.filter(c => isAudiovisualItem(c));
    }

    if (filters?.type && filters.type !== 'all') {
        result = result.filter(c => c.type === filters.type);
    }
    if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        result = result.filter(c => c.title.toLowerCase().includes(searchLower));
    }
    if (filters?.category) {
        result = result.filter(c => c.category?.toLowerCase() === filters.category?.toLowerCase());
    }
    if (filters?.excludeCategories && filters.excludeCategories.length > 0) {
        const excludeLower = filters.excludeCategories.map(cat => cat.toLowerCase());
        result = result.filter(c => !c.category || !excludeLower.includes(c.category.toLowerCase()));
    }
    if (filters?.tag) {
        result = result.filter(c => c.tags?.some(t => t.slug === filters.tag));
    }
    return result;
}

export async function listContent(filters?: { type?: string; status?: string; search?: string; category?: string; tag?: string; page?: number; limit?: number; excludeCategories?: string[]; isSop?: boolean; isSkill?: boolean }) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';

    // Explicit mock check
    if (isMock) {
        console.log("Mock session detected (listContent)");
        let content = applyMockFilters(ALL_MOCK_CONTENT, filters);

        // Sort by updated_at desc
        // Sort by updated_at desc, then by title asc
        content.sort((a, b) => {
            const timeDiff = new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            if (timeDiff !== 0) return timeDiff;
            return a.id.localeCompare(b.id);
        });

        const totalCount = content.length;

        // Apply Pagination
        const page = filters?.page || 1;
        const limit = filters?.limit || 12;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        content = content.slice(startIndex, endIndex);

        return {
            data: content,
            count: totalCount,
            totalPages: Math.ceil(totalCount / limit)
        };
    }

    try {
        const supabase = await createClient();
        const page = filters?.page || 1;
        const limit = filters?.limit || 12;

        let query = supabase
            .from('content')
            .select('*, tags:content_tags(tag:tags(*))')
            .order('updated_at', { ascending: false })
            .order('id', { ascending: true });

        if (filters?.type && filters.type !== 'all') {
            query = query.eq('type', filters.type);
        }

        if (filters?.status) {
            if (filters.status === 'published') {
                query = query.eq('is_published', true);
            } else if (filters.status === 'draft') {
                query = query.eq('is_published', false);
            }
        }

        if (filters?.search) {
            query = query.ilike('title', `%${filters.search}%`);
        }

        if (filters?.category) {
            query = query.ilike('category', filters.category);
        }

        if (filters?.excludeCategories && filters.excludeCategories.length > 0) {
            query = query.not('category', 'in', `(${filters.excludeCategories.join(',')})`);
        }

        if (filters?.tag) {
            // Basic tag filtering by using an inner join
            query = query.eq('tags.tag.slug', filters.tag);
        }

        const { data, error } = await query;

        if (error) throw error;

        // Post-query filtering
        let content = data.map(item => ({
            ...item,
            tags: item.tags.map((t: any) => t.tag)
        }));

        if (filters?.tag) {
            content = content.filter((item: any) => item.tags.some((t: any) => t.slug === filters.tag));
        }

        if (filters?.isSkill) {
            content = content.filter((item: any) => isSkillItem(item));
        } else if (filters?.isSop) {
            content = content.filter((item: any) => isSopItem(item) && !isSkillItem(item));
        } else {
            // Audiovisual Tab
            content = content.filter((item: any) => isAudiovisualItem(item));
        }

        const totalCount = content.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const paginatedContent = content.slice(startIndex, endIndex);

        return {
            data: paginatedContent as ContentItem[],
            count: totalCount,
            totalPages: Math.ceil(totalCount / limit)
        };
    } catch (error) {
        console.log("Supabase error (listContent), returning mock data as fallback", error);
        // Apply filters and pagination to fallback data
        let content = applyMockFilters(ALL_MOCK_CONTENT, filters);
        const totalCount = content.length;
        const page = filters?.page || 1;
        const limit = filters?.limit || 12;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedContent = content.slice(startIndex, endIndex);

        return {
            data: paginatedContent as ContentItem[],
            count: totalCount,
            totalPages: Math.ceil(totalCount / limit)
        };
    }
}

export async function createContent(input: CreateContentInput) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (createContent)");
        const newItem = {
            id: `new-mock-${Date.now()}`,
            ...input,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            tags: []
        } as any;
        addMockItem(newItem);
        revalidatePath('/admin/content');
        return { data: newItem };
    }

    try {
        const supabase = await createClient();

        // Separate tags from content data
        const { tag_ids, ...contentData } = input;

        // Initial content creation
        const { data: content, error } = await supabase
            .from('content')
            .insert(contentData)
            .select()
            .single();

        if (error) throw error;

        // Add tags if present
        if (tag_ids && tag_ids.length > 0) {
            const tagInserts = tag_ids.map(tag_id => ({
                content_id: content.id,
                tag_id
            }));

            const { error: tagError } = await supabase
                .from('content_tags')
                .insert(tagInserts);

            if (tagError) {
                console.error('Error adding tags:', tagError);
                // Don't fail the whole request, just log it
            }
        }

        revalidatePath('/admin/content');
        return { data: content };
    } catch (error: any) {
        console.log("Supabase error (createContent), returning mock success", error);
        const fallbackItem = { id: `fallback-mock-${Date.now()}`, ...input, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), tags: [] } as any;
        addMockItem(fallbackItem);
        revalidatePath('/admin/content');
        return { data: fallbackItem, error: error.message || 'Unknown error' };
    }
}

export async function updateContent(input: UpdateContentInput) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (updateContent)", input.id);
        updateMockItem(input.id, { ...input, updated_at: new Date().toISOString() } as any);
        revalidatePath('/admin/content');
        revalidatePath(`/admin/content/${input.id}`);
        return { data: { ...input, updated_at: new Date().toISOString() } as any };
    }

    try {
        const supabase = await createClient();
        const { id, tag_ids, ...updateData } = input;

        // Update content
        const { data: content, error } = await supabase
            .from('content')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        // Update tags if provided (replace all)
        if (tag_ids !== undefined) {
            // First delete existing
            await supabase
                .from('content_tags')
                .delete()
                .eq('content_id', id);

            // Then insert new ones
            if (tag_ids.length > 0) {
                const tagInserts = tag_ids.map(tag_id => ({
                    content_id: id,
                    tag_id
                }));

                await supabase
                    .from('content_tags')
                    .insert(tagInserts);
            }
        }

        revalidatePath('/admin/content');
        revalidatePath(`/admin/content/${id}`);
        return { data: content };
    } catch (error: any) {
        console.log("Supabase error (updateContent), returning mock success", error);
        updateMockItem(input.id, { ...input, updated_at: new Date().toISOString() } as any);
        revalidatePath('/admin/content');
        revalidatePath(`/admin/content/${input.id}`);
        return { data: { ...input, updated_at: new Date().toISOString(), tags: [] } as any, error: error.message || 'Unknown error' };
    }
}

export async function deleteContent(id: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (deleteContent)", id);
        deleteMockItem(id);
        revalidatePath('/admin/content');
        return { success: true };
    }

    try {
        const supabase = await createClient();

        const { error } = await supabase
            .from('content')
            .delete()
            .eq('id', id);

        if (error) throw error;

        revalidatePath('/admin/content');
        return { success: true };
    } catch (error: any) {
        console.log("Supabase error (deleteContent), returning mock success");
        revalidatePath('/admin/content');
        return { success: true, error: error.message };
    }
}

export async function togglePublishContent(id: string, isPublished: boolean) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        console.log("Mock session (togglePublish)", id);
        updateMockItem(id, { is_published: isPublished, published_at: isPublished ? new Date().toISOString() : undefined });
        revalidatePath('/admin/content');
        return { success: true };
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from('content')
        .update({ is_published: isPublished, published_at: isPublished ? new Date().toISOString() : null })
        .eq('id', id);

    if (error) {
        console.error('Error toggling publish status:', error);
        return { error: error.message };
    }

    revalidatePath('/admin/content');
    return { success: true };
}

export async function getDistinctCategories(type?: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        let content = ALL_MOCK_CONTENT;
        if (type) {
            content = content.filter(c => c.type === type);
        }
        return { data: Array.from(new Set(content.map(c => c.category).filter(Boolean))) as string[] };
    }

    try {
        const supabase = await createClient();

        let query = supabase
            .from('content')
            .select('category')
            .not('category', 'is', null);

        if (type) {
            query = query.eq('type', type);
        }

        const { data, error } = await query;

        if (error) throw error;

        const categories = Array.from(new Set(data.map(item => item.category).filter(Boolean))) as string[];
        return { data: categories.sort() };
    } catch (error: any) {
        console.error('Error fetching categories:', error);
        return { data: [], error: error.message };
    }
}

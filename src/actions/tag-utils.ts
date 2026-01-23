'use server'

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { addMockTag, MOCK_TAGS } from "@/lib/mock-data";

export async function createTag(name: string, slug: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';

    if (isMock) {
        return addMockTag(name, slug);
    }

    const supabase = await createClient();

    const { data: tag, error } = await supabase
        .from('tags')
        .insert({ name, slug })
        .select()
        .single();

    if (error) {
        console.error("Error creating tag in tag-utils, falling back to mock:", error);
        return addMockTag(name, slug);
    }

    return tag;
}

export async function searchTags(query: string) {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';

    if (isMock) {
        return MOCK_TAGS.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));
    }

    const supabase = await createClient();

    const { data: tags, error } = await supabase
        .from('tags')
        .select('*')
        .ilike('name', `%${query}%`)
        .limit(10);

    if (error || !tags) {
        console.error("Error searching tags in tag-utils, falling back to mock:", error);
        return MOCK_TAGS.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));
    }

    return tags;
}


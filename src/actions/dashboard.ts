'use server'

import { createClient } from "@/utils/supabase/server";
import { DashboardMetrics } from "@/types/content";
import { cookies } from "next/headers";

import { ALL_MOCK_CONTENT } from "@/lib/mock-data";

// Helper to calculate mock metrics dynamically
const getMockMetrics = () => {
    return {
        total_content: ALL_MOCK_CONTENT.length,
        published_content: ALL_MOCK_CONTENT.filter(c => c.is_published).length,
        total_users: 1543, // Keep static
        total_subscribers: 230, // Keep static
        content_by_type: {
            system: ALL_MOCK_CONTENT.filter(c => c.type === 'system').length,
            prompt: ALL_MOCK_CONTENT.filter(c => c.type === 'prompt').length,
            automation: ALL_MOCK_CONTENT.filter(c => c.type === 'automation').length
        }
    };
};

const getMockRecentContent = (limit: number) => {
    return ALL_MOCK_CONTENT
        .sort((a, b) => {
            const timeDiff = new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            if (timeDiff !== 0) return timeDiff;
            return a.id.localeCompare(b.id);
        })
        .slice(0, limit)
        .map(item => ({
            id: item.id,
            title: item.title,
            type: item.type,
            status: item.is_published ? 'published' : 'draft',
            updated_at: item.updated_at,
            level: item.level
        }));
};

export async function getDashboardMetrics(): Promise<{ data?: DashboardMetrics; error?: string }> {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        return { data: getMockMetrics() };
    }

    try {
        const supabase = await createClient();
        // Run queries in parallel for better performance
        const [
            { count: totalContent },
            { count: publishedContent },
            { count: totalUsers },
            { count: totalSubscribers },
            { count: systemCount },
            { count: promptCount },
            { count: automationCount }
        ] = await Promise.all([
            // Total content
            supabase.from('content').select('*', { count: 'exact', head: true }),

            // Published content
            supabase.from('content').select('*', { count: 'exact', head: true }).eq('is_published', true),

            // Total users (profiles)
            supabase.from('profiles').select('*', { count: 'exact', head: true }),

            // Paying subscribers (plan is not null)
            supabase.from('profiles').select('*', { count: 'exact', head: true }).not('plan', 'is', null),

            // Content by type
            supabase.from('content').select('*', { count: 'exact', head: true }).eq('type', 'system'),
            supabase.from('content').select('*', { count: 'exact', head: true }).eq('type', 'prompt'),
            supabase.from('content').select('*', { count: 'exact', head: true }).eq('type', 'automation'),
        ]);

        return {
            data: {
                total_content: totalContent || 0,
                published_content: publishedContent || 0,
                total_users: totalUsers || 0,
                total_subscribers: totalSubscribers || 0,
                content_by_type: {
                    system: systemCount || 0,
                    prompt: promptCount || 0,
                    automation: automationCount || 0
                }
            }
        };

    } catch (error: any) {
        console.error('Error fetching dashboard metrics, falling back to mock data:', error);
        return { data: getMockMetrics(), error: error.message || 'Unknown error' };
    }
}

export async function getRecentContent(limit = 5): Promise<{ data: any; error?: string }> {
    const isMock = (await cookies()).get('mock_session')?.value === 'true';
    if (isMock) {
        return { data: getMockRecentContent(limit) as any };
    }

    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('content')
            .select('id, title, type, status:is_published, updated_at, level')
            .order('updated_at', { ascending: false })
            .order('id', { ascending: true })
            .limit(limit);

        if (error) {
            console.error('Error fetching recent content, using mock data:', error);
            return { data: getMockRecentContent(limit) as any, error: error.message };
        }

        return {
            data: data.map(item => ({
                ...item,
                status: item.status ? 'published' : 'draft'
            }))
        };
    } catch (error: any) {
        console.error('Error fetching recent content, using mock data:', error);
        return { data: getMockRecentContent(limit) as any, error: error.message || 'Unknown error' };
    }
}

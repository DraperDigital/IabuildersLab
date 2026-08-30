import createMiddleware from 'next-intl/middleware';
import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

import { routing } from '@/i18n/routing';

const handleI18n = createMiddleware(routing);

export async function middleware(request: NextRequest) {
    // 1. Run i18n routing middleware first
    const response = handleI18n(request);

    // 2. Safely attempt Supabase session refresh without breaking request
    try {
        const supabaseResponse = await updateSession(request);
        if (supabaseResponse?.cookies) {
            supabaseResponse.cookies.getAll().forEach(cookie => {
                response.cookies.set(cookie.name, cookie.value);
            });
        }
    } catch (err) {
        console.error("Middleware Supabase updateSession error:", err);
    }

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en)/:path*']
};

import createMiddleware from 'next-intl/middleware';
import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

import { routing } from '@/i18n/routing';

const handleI18n = createMiddleware(routing);

export async function middleware(request: NextRequest) {
    // 1. Refresh Supabase session cookies
    const supabaseResponse = await updateSession(request);

    // 2. Run i18n routing middleware
    const response = handleI18n(request);

    // 3. Copy refreshed cookies from Supabase to final response
    supabaseResponse.cookies.getAll().forEach(cookie => {
        response.cookies.set(cookie.name, cookie.value);
    });

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en)/:path*']
};

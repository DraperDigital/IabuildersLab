import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()

    // Use real credentials if available, otherwise use placeholders to prevent crash during mock mode
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';

    const client = createServerClient(
        supabaseUrl,
        supabaseKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    )

    // Check for mock session (only allowed in non-production environments)
    const isMock = process.env.NODE_ENV !== 'production' && cookieStore.get('mock_session')?.value === 'true';

    if (isMock) {
        // Proxy the client to intercept auth calls
        return new Proxy(client, {
            get(target, prop, receiver) {
                if (prop === 'auth') {
                    return {
                        ...target.auth,
                        getUser: async () => {
                            return {
                                data: {
                                    user: {
                                        id: 'mock-user-id',
                                        email: 'admin@mock.com',
                                        role: 'authenticated',
                                        aud: 'authenticated',
                                        created_at: new Date().toISOString(),
                                    }
                                },
                                error: null
                            }
                        },
                        getSession: async () => {
                            return {
                                data: {
                                    session: {
                                        access_token: 'mock-token',
                                        refresh_token: 'mock-refresh-token',
                                        expires_in: 3600,
                                        token_type: 'bearer',
                                        user: {
                                            id: 'mock-user-id',
                                            email: 'admin@mock.com',
                                            role: 'authenticated',
                                            aud: 'authenticated',
                                            created_at: new Date().toISOString(),
                                        }
                                    }
                                },
                                error: null
                            }
                        }
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });
    }

    return client;
}

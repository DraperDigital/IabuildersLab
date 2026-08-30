import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return {
            auth: {
                getUser: async () => ({ data: { user: null }, error: null }),
                getSession: async () => ({ data: { session: null }, error: null }),
                signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: "Supabase no está configurado." } }),
                signInWithOtp: async () => ({ data: null, error: { message: "Supabase no está configurado." } }),
                signOut: async () => ({ error: null }),
                signUp: async () => ({ data: { user: null, session: null }, error: { message: "Supabase no está configurado." } }),
            },
            from: () => ({
                select: () => ({
                    order: () => ({
                        order: () => ({
                            eq: () => ({
                                single: async () => ({ data: null, error: null }),
                            }),
                            range: async () => ({ data: [], count: 0, error: null }),
                        }),
                        eq: () => ({
                            single: async () => ({ data: null, error: null }),
                        }),
                        single: async () => ({ data: null, error: null }),
                        range: async () => ({ data: [], count: 0, error: null }),
                    }),
                    eq: () => ({
                        single: async () => ({ data: null, error: null }),
                        order: () => ({ range: async () => ({ data: [], count: 0, error: null }) }),
                    }),
                    ilike: () => ({
                        range: async () => ({ data: [], count: 0, error: null }),
                    }),
                    not: () => ({}),
                    range: async () => ({ data: [], count: 0, error: null }),
                }),
                update: () => ({ eq: async () => ({ error: null }) }),
            }),
        } as any;
    }

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
                        // Ignore setAll in server components
                    }
                },
            },
        }
    )

    // Wrap auth.getUser to safely catch network errors when Supabase is unreachable
    const originalGetUser = client.auth.getUser.bind(client.auth);
    client.auth.getUser = async (...args: Parameters<typeof originalGetUser>) => {
        try {
            return await originalGetUser(...args);
        } catch (err) {
            console.error("Supabase getUser network error:", err);
            return { data: { user: null }, error: err as any };
        }
    };

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

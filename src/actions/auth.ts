'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Mock Login Bypass
    if (email === 'admin@mock.com' && password === 'mock') {
        const cookieStore = await cookies();
        cookieStore.set('mock_session', 'true', {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        return redirect('/en/admin');
    }

    try {
        const supabase = await createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return { error: error.message };
        }
    } catch (error) {
        // Return explicit error message for debugging
        return { error: 'Authentication failed. System configuration error or invalid credentials.' };
    }

    // Redirect must be outside try/catch or re-thrown if inside (but standard pattern is outside if possible)
    redirect('/en/admin'); // Redirect to admin dashboard
}

export async function sendOtp(formData: FormData) {
    const email = formData.get('email') as string;
    if (!email) return { error: 'E-mail requerido.' };

    try {
        const supabase = await createClient();
        const origin = (await headers()).get('origin');
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            return { error: error.message };
        }
        return { success: true, message: `Código/Enlace de acceso enviado a ${email}` };
    } catch (error) {
        return { error: 'Error al enviar código de acceso por correo.' };
    }
}


export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();

    // Also clear mock cookie just in case
    const cookieStore = await cookies();
    cookieStore.delete('mock_session');

    redirect('/login');
}

export async function signup(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        },
    });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}


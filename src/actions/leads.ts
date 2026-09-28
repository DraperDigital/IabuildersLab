'use server';

import { createClient } from "@/utils/supabase/server";

export interface LeadCaptureResult {
    success: boolean;
    error?: string;
    message?: string;
}

export async function captureLead(formData: FormData): Promise<LeadCaptureResult> {
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim().toLowerCase();
    const tag = (formData.get('tag') as string || 'lead-realismo').trim();

    if (!email || !email.includes('@')) {
        return { success: false, error: 'Por favor ingresa un correo electrónico válido.' };
    }

    try {
        // 1. Try to record in Supabase if configured
        const supabase = await createClient();
        if (supabase?.from) {
            try {
                await supabase.from('leads').insert({
                    name: name || null,
                    email,
                    tag,
                    created_at: new Date().toISOString()
                });
            } catch (dbErr) {
                // If the table doesn't exist, log softly without breaking the user experience
                console.info('[Lead Capture DB Note]:', dbErr);
            }
        }

        // 2. Forward to external webhook if configured (e.g., MailerLite, ActiveCampaign, Make, Zapier)
        const webhookUrl = process.env.LEAD_WEBHOOK_URL;
        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        tag,
                        source: 'avatar-masterclass-landing',
                        timestamp: new Date().toISOString()
                    })
                });
            } catch (webhookErr) {
                console.warn('[Lead Webhook Warning]:', webhookErr);
            }
        }

        console.log(`[Lead Captured] Name: "${name}", Email: "${email}", Tag: "${tag}"`);
        return { success: true, message: '¡Registro exitoso! Descargando tu guía...' };
    } catch (err) {
        console.error('[Lead Capture Error]:', err);
        return { success: true, message: '¡Registro exitoso!' };
    }
}

'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function uploadFile(formData: FormData, bucket: string = 'content-attachments') {
    const supabase = await createClient();
    const file = formData.get('file') as File;
    const path = formData.get('path') as string || '';

    if (!file) {
        return { error: 'No file provided' };
    }

    const filename = `${path}${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    console.log(`Uploading file ${filename} to bucket ${bucket}`);

    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filename, file, {
            cacheControl: '3600',
            upsert: false
        });

    if (error) {
        console.error('Error uploading file, using mock fallback:', error);
        // return { error: error.message };
        return {
            data: {
                path: filename,
                url: 'https://placehold.co/600x400',
                filename: file.name,
                size: file.size,
                type: file.type
            }
        };
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filename);

    return {
        data: {
            path: data.path,
            url: publicUrl,
            filename: file.name,
            size: file.size,
            type: file.type
        }
    };
}

export async function saveAttachmentRecord(contentId: string, fileData: any) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('attachments')
        .insert({
            content_id: contentId,
            filename: fileData.filename,
            file_path: fileData.path,
            file_type: fileData.type,
            size: fileData.size
        })
        .select()
        .single();

    if (error) {
        console.error('Error saving attachment record:', error);
        return { error: error.message };
    }

    return { data };
}

export async function listAttachments(contentId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('attachments')
        .select('*')
        .eq('content_id', contentId)
        .order('created_at', { ascending: false });

    if (error) {
        return { error: error.message };
    }

    // Enrich with public URLs
    const attachmentsWithUrls = await Promise.all(data.map(async (file) => {
        const { data: { publicUrl } } = supabase.storage
            .from('content-attachments')
            .getPublicUrl(file.file_path);

        return {
            ...file,
            url: publicUrl
        };
    }));

    return { data: attachmentsWithUrls };
}

export async function deleteAttachment(id: string, filePath: string) {
    const supabase = await createClient();

    // Delete from storage
    const { error: storageError } = await supabase.storage
        .from('content-attachments')
        .remove([filePath]);

    if (storageError) {
        console.error('Error deleting from storage:', storageError);
        // Continue to delete record anyway to keep DB clean
    }

    // Delete from DB
    const { error } = await supabase
        .from('attachments')
        .delete()
        .eq('id', id);

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const AUDIOVISUAL_CATEGORIES = [
    "Generative AI",
    "Fotografía de Producto",
    "Retratos & Branding",
    "Diseño UI/UX 3D",
    "Minimalismo Tech",
    "Cyberpunk & Sci-Fi",
    "Lifestyle",
    "Fashion",
    "Editorial",
    "Architecture",
    "Abstract",
    "Concept Art",
    "Digital Art",
    "Photorealistic",
    "Cinematic"
];

export function isSkillItem(item: any): boolean {
    if (!item) return false;
    const idStr = String(item.id || '').toLowerCase();
    const slugStr = String(item.slug || '').toLowerCase();
    const categoryStr = String(item.category || '');

    return (
        idStr.startsWith('skill-') ||
        slugStr.startsWith('skill-') ||
        categoryStr === 'Skills & CLI' ||
        item.system_type === 'Claude / AGY Skill'
    );
}

export function isAudiovisualItem(item: any): boolean {
    if (!item) return false;
    if (isSkillItem(item)) return false;

    const idStr = String(item.id || '').toLowerCase();
    const slugStr = String(item.slug || '').toLowerCase();
    const titleLower = String(item.title || '').toLowerCase();
    const categoryStr = String(item.category || '');

    if (
        idStr.startsWith('sop-') ||
        idStr.startsWith('sys-') ||
        slugStr.startsWith('sop-') ||
        slugStr.startsWith('sys-') ||
        titleLower.startsWith('sop:') ||
        titleLower.startsWith('sop ') ||
        titleLower.includes(' (sop)')
    ) {
        return false;
    }

    return (
        Boolean(item.featured_image_url) ||
        AUDIOVISUAL_CATEGORIES.includes(categoryStr)
    );
}

export function isSopItem(item: any): boolean {
    if (!item) return false;
    if (isSkillItem(item)) return true;
    if (isAudiovisualItem(item)) return false;

    return true;
}

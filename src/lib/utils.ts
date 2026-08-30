import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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

export function isSopItem(item: any): boolean {
    if (!item) return false;
    if (isSkillItem(item)) return true;

    const idStr = String(item.id || '').toLowerCase();
    const slugStr = String(item.slug || '').toLowerCase();
    const titleLower = String(item.title || '').toLowerCase();
    const categoryStr = String(item.category || '');

    // Exclude simple copy prompts (Facebook ads, IG captions, simple email prompts)
    if (
        idStr.startsWith('fb-') ||
        categoryStr === 'Marketing de Facebook' ||
        categoryStr === 'Marketing y Publicidad' ||
        titleLower.includes('pie de foto') ||
        titleLower.includes('titular conciso') ||
        titleLower.includes('breve texto publicitario') ||
        titleLower.includes('asuntos de correo') ||
        titleLower.includes('restaurante vegano')
    ) {
        return false;
    }

    const sopCategories = [
        "Market Research & Content",
        "CRM & Operations",
        "Paid Ads & Acquisition",
        "Content Creation",
        "Development Web / UI",
        "Research & Content Creation",
        "Ventas y Calificación",
        "Operaciones y Cierre",
        "Páginas de Ventas",
        "Marketing & Content",
        "Infrastructure & Local Environment",
        "Infrastructure & Growth Automation",
        "Infrastructure & Open Source",
        "Skills & CLI"
    ];

    return (
        idStr.startsWith('sop-') ||
        idStr.startsWith('sys-') ||
        slugStr.startsWith('sop-') ||
        slugStr.startsWith('sys-') ||
        titleLower.startsWith('sop:') ||
        titleLower.startsWith('sop ') ||
        titleLower.includes(' (sop)') ||
        titleLower.includes('blueprint') ||
        titleLower.includes('system') ||
        sopCategories.includes(categoryStr)
    );
}

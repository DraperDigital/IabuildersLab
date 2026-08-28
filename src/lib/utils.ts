import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isSopItem(item: any): boolean {
    if (!item) return false;
    const idStr = String(item.id || '').toLowerCase();
    const slugStr = String(item.slug || '').toLowerCase();
    const titleLower = String(item.title || '').toLowerCase();
    const categoryStr = String(item.category || '');

    const sopCategories = [
        "Marketing & Content",
        "Ventas y Calificación",
        "Operaciones y Cierre",
        "Páginas de Ventas",
        "Marketing de Facebook",
        "Research",
        "Content",
        "Sales",
        "Operations",
        "Marketing",
        "Market Research & Content",
        "CRM & Operations"
    ];

    return (
        idStr.startsWith('sop-') ||
        slugStr.startsWith('sop-') ||
        titleLower.startsWith('sop:') ||
        titleLower.startsWith('sop ') ||
        titleLower.includes(' (sop)') ||
        item.type === 'text_prompt' ||
        item.type === 'system' ||
        item.type === 'automation' ||
        sopCategories.includes(categoryStr)
    );
}

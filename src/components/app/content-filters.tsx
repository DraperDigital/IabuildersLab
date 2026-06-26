"use client"

import { useSearchParams } from "next/navigation";
import { useRouter, usePathname, Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { Tag } from "@/types/content";
import { useTranslations } from "next-intl";

interface ContentFiltersProps {
    tags: Tag[];
}

export function ContentFilters({ tags }: ContentFiltersProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const t = useTranslations('Prompts');

    const currentTag = searchParams.get('tag');
    const currentSearch = searchParams.get('search') || '';

    const createQueryString = (name: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === null) {
            params.delete(name);
        } else {
            params.set(name, value);
        }
        return params.toString();
    };

    const handleSearch = useDebouncedCallback((term: string) => {
        const queryString = createQueryString('search', term || null);
        router.push(`${pathname}?${queryString}`);
    }, 300);

    const getTagLink = (tagSlug: string | null) => {
        const newTag = currentTag === tagSlug ? null : tagSlug;
        const queryString = createQueryString('tag', newTag);

        // Defensive fix: Ensure pathname doesn't already contain the locale
        // next-intl's usePathname SHOULD strip it, but if it doesn't (or if using standard one),
        // we strip it manually to prevent /es/es/ duplication.
        let cleanPathname = pathname;
        if (cleanPathname.startsWith('/es/')) cleanPathname = cleanPathname.replace('/es/', '/');
        if (cleanPathname.startsWith('/en/')) cleanPathname = cleanPathname.replace('/en/', '/');
        if (cleanPathname === '/es' || cleanPathname === '/en') cleanPathname = '/';

        return `${cleanPathname}?${queryString}`;
    };

    return (
        <div className="space-y-4">
            <div className="relative max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    className="pl-8"
                    defaultValue={currentSearch}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap gap-2">
                <Link href={getTagLink(null)}>
                    <Badge
                        variant={currentTag === null ? "default" : "secondary"}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        {t('all')}
                    </Badge>
                </Link>
                {tags.map((tag) => (
                    <Link key={tag.id} href={getTagLink(tag.slug)}>
                        <Badge
                            variant={currentTag === tag.slug ? "default" : "secondary"}
                            className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1"
                        >
                            {tag.name}
                            {currentTag === tag.slug && <X className="h-3 w-3 ml-1" />}
                        </Badge>
                    </Link>
                ))}
            </div>
        </div>
    );
}

'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, Star } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Tag } from "@/types/content";

interface PromptSidebarProps {
    categories: string[];
    tags: Tag[];
}

export function PromptSidebar({ categories = [], tags = [] }: PromptSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category');
    const currentTag = searchParams.get('tag');
    const currentSearch = searchParams.get('search') || '';

    const [searchTerm, setSearchTerm] = useState(currentSearch);

    // Handle search input
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== currentSearch) {
                const params = new URLSearchParams(searchParams.toString());
                if (searchTerm) {
                    params.set('search', searchTerm);
                } else {
                    params.delete('search');
                }
                params.delete('page'); // Reset pagination on search
                router.push(`${pathname}?${params.toString()}`);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm, currentSearch, pathname, router, searchParams]);

    const handleClearFilters = () => {
        setSearchTerm('');
        router.push(pathname);
    };

    const hasFilters = currentCategory || currentTag || currentSearch;

    return (
        <div className="rounded-xl border border-purple-500/20 bg-slate-900/50 p-6 backdrop-blur-sm sticky top-24">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider">Search Prompts</h3>
                    {hasFilters && (
                        <Button variant="ghost" size="sm" onClick={handleClearFilters} className="h-6 px-2 text-xs text-slate-400 hover:text-white">
                            Clear <X className="ml-1 h-3 w-3" />
                        </Button>
                    )}
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Keywords, style, model..."
                        className="pl-9 bg-slate-950 border-purple-500/20 text-sm focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-slate-500"
                    />
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4">Categories</h3>
                <div className="space-y-2">
                    {categories.length === 0 && <p className="text-xs text-slate-500">No categories found</p>}
                    {categories.map((cat) => {
                        const isActive = currentCategory?.toLowerCase() === cat.toLowerCase();

                        // Build new params preserving others
                        const newParams = new URLSearchParams(searchParams.toString());
                        if (isActive) {
                            newParams.delete('category');
                        } else {
                            newParams.set('category', cat.toLowerCase());
                        }
                        newParams.delete('page'); // Reset pagination on category change

                        return (
                            <Link href={`${pathname}?${newParams.toString()}`} key={cat}>
                                <Button
                                    variant="ghost"
                                    className={`w-full justify-start h-9 mb-1 ${isActive ? 'bg-purple-600/20 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                                >
                                    <span className={`w-2 h-2 rounded-full mr-2 ${isActive ? 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]' : 'bg-purple-500 opacity-70'}`}></span>
                                    {cat}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.length === 0 && <p className="text-xs text-slate-500">No tags found</p>}
                    {tags.map((tag) => {
                        const isActive = currentTag === tag.slug;

                        // Build new params preserving others
                        const newParams = new URLSearchParams(searchParams.toString());
                        if (isActive) {
                            newParams.delete('tag');
                        } else {
                            newParams.set('tag', tag.slug);
                        }
                        newParams.delete('page'); // Reset pagination on tag change

                        return (
                            <Link
                                href={`${pathname}?${newParams.toString()}`}
                                key={tag.id}
                                className={`px-3 py-1 rounded-full border text-xs transition-all ${isActive
                                    ? 'bg-purple-600/30 border-purple-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-purple-300'
                                    }`}
                            >
                                #{tag.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-900/50 to-slate-900 border border-purple-500/30">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                    <Star className="h-4 w-4 fill-purple-300" />
                    <span className="font-bold text-sm">Become a Pro</span>
                </div>
                <p className="text-xs text-slate-300 mb-4">Get access to extensive commercial prompts and master guides.</p>
                <Link href="/pricing" className="block">
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-500">Upgrade</Button>
                </Link>
            </div>
        </div>
    );
}

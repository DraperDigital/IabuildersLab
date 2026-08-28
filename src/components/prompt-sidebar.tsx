"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X, Star, Filter, Briefcase, Video, Signal, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Tag } from "@/types/content";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface PromptSidebarProps {
    categories: string[];
    tags: Tag[];
}

export function PromptSidebar({ categories = [], tags = [] }: PromptSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Close sheet when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Mobile Trigger */}
            <div className="lg:hidden w-full mb-6">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="w-full justify-between border-purple-500/30 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-purple-900/20">
                            <span className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-purple-400" />
                                Filters & Search
                            </span>
                            <Search className="h-4 w-4 opacity-50" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] border-r-slate-800 bg-slate-950 p-6 overflow-y-auto">
                        <SheetHeader className="mb-6">
                            <SheetTitle className="text-white">Filtros de Catálogo</SheetTitle>
                            <SheetDescription className="text-slate-400">
                                Explora la arquitectura de información.
                            </SheetDescription>
                        </SheetHeader>
                        <SidebarContent
                            categories={categories}
                            tags={tags}
                            onNavigate={() => setIsOpen(false)}
                        />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:bg-slate-900/60 transition-colors duration-500 sticky top-24">
                <SidebarContent categories={categories} tags={tags} />
            </div>
        </>
    );
}

interface SidebarContentProps {
    categories: string[];
    tags: Tag[];
    onNavigate?: () => void;
}

const DOMAINS = [
    { id: 'audiovisual', label: 'Audiovisual / Creativo', icon: Video },
    { id: 'negocio', label: 'Negocio / Operación', icon: Briefcase }
];

const LEVELS = [
    { id: 'principiante', label: 'Principiante', icon: Signal },
    { id: 'intermedio', label: 'Intermedio', icon: Zap },
    { id: 'avanzado', label: 'Avanzado', icon: Star }
];

function SidebarContent({ categories, tags, onNavigate }: SidebarContentProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category');
    const currentTag = searchParams.get('tag');
    const currentSearch = searchParams.get('search') || '';
    const currentDomain = searchParams.get('domain');
    const currentLevel = searchParams.get('level');

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
        if (onNavigate) onNavigate();
    };

    const hasFilters = currentCategory || currentTag || currentSearch || currentDomain || currentLevel;

    const buildLink = (paramKey: string, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        if (searchParams.get(paramKey) === value) {
            newParams.delete(paramKey);
        } else {
            newParams.set(paramKey, value);
        }
        newParams.delete('page');
        return `${pathname}?${newParams.toString()}`;
    };

    return (
        <div className="space-y-8">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider">Buscar</h3>
                    {hasFilters && (
                        <Button variant="ghost" size="sm" onClick={handleClearFilters} className="h-6 px-2 text-xs text-slate-400 hover:text-white">
                            Limpiar <X className="ml-1 h-3 w-3" />
                        </Button>
                    )}
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Palabras clave..."
                        className="pl-9 bg-slate-950 border-purple-500/20 text-sm focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* DOMINIO - FACETA TRANSVERSAL */}
            <div>
                <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Dominio
                </h3>
                <div className="grid gap-2">
                    {DOMAINS.map((domain) => {
                        const isActive = currentDomain === domain.id;
                        const Icon = domain.icon;
                        return (
                            <Link href={buildLink('domain', domain.id)} key={domain.id} onClick={onNavigate}>
                                <Button
                                    variant="outline"
                                    className={`w-full justify-start h-10 border ${isActive ? 'bg-purple-600/20 border-purple-500 text-white shadow-[0_0_8px_rgba(168,85,247,0.3)]' : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700'}`}
                                >
                                    <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                                    {domain.label}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* NIVEL - FACETA TRANSVERSAL */}
            <div>
                <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Signal className="w-4 h-4" /> Nivel
                </h3>
                <div className="flex flex-wrap gap-2">
                    {LEVELS.map((lvl) => {
                        const isActive = currentLevel === lvl.id;
                        return (
                            <Link href={buildLink('level', lvl.id)} key={lvl.id} onClick={onNavigate} className="flex-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className={`w-full text-xs font-medium ${isActive ? 'bg-indigo-600/30 border-indigo-500 text-indigo-100 shadow-[0_0_8px_rgba(99,102,241,0.4)]' : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                                >
                                    {lvl.label}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <hr className="border-slate-800" />

            <div>
                <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4">Categorías Clásicas</h3>
                <div className="space-y-1">
                    {categories.length === 0 && <p className="text-xs text-slate-500">No categories found</p>}
                    {categories.map((cat) => {
                        const isActive = currentCategory?.toLowerCase() === cat.toLowerCase();
                        return (
                            <Link href={buildLink('category', cat.toLowerCase())} key={cat} onClick={onNavigate}>
                                <Button
                                    variant="ghost"
                                    className={`w-full justify-start h-8 mb-1 px-2 text-sm ${isActive ? 'bg-purple-900/40 text-white font-medium' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isActive ? 'bg-purple-400' : 'bg-slate-600'}`}></span>
                                    {cat}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {tags.length > 0 && (
                <div>
                    <h3 className="text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4">Etiquetas Populares</h3>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => {
                            const isActive = currentTag === tag.slug;
                            return (
                                <Link
                                    href={buildLink('tag', tag.slug)}
                                    key={tag.id}
                                    onClick={onNavigate}
                                    className={`px-3 py-1 rounded-full border text-xs transition-all ${isActive
                                        ? 'bg-purple-600/30 border-purple-500 text-white'
                                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                                        }`}
                                >
                                    #{tag.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

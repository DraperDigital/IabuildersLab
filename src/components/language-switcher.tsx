"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: "es" | "en") => {
        if (newLocale === locale) return;
        router.replace(pathname, { locale: newLocale });
    };

    const languages = [
        { code: "es", flag: "🇪🇸", label: "Español" },
        { code: "en", flag: "🇺🇸", label: "English" }
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 bg-slate-900/80 hover:bg-purple-500/20 text-purple-200 gap-1.5 font-mono text-xs cursor-pointer"
                >
                    <Globe className="h-3.5 w-3.5 text-purple-400" />
                    <span>{locale.toUpperCase()}</span>
                    <span className="text-xs">{locale === "es" ? "🇪🇸" : "🇺🇸"}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-900 border-purple-500/30 text-slate-200">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => switchLocale(lang.code as "es" | "en")}
                        className={`flex items-center gap-2 cursor-pointer font-mono text-xs ${locale === lang.code ? "text-purple-300 font-semibold bg-purple-500/20" : "hover:bg-purple-500/10"}`}
                    >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                        {locale === lang.code && <span className="ml-auto text-emerald-400 text-xs">✓</span>}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

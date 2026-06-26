"use client"

import { Link, usePathname } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import {
    LayoutDashboard,
    Layers,
    Terminal,
    Workflow,
    FileText,
    Star,
    Bell,
    User
} from "lucide-react"

const navItems = [
    { href: "/app", key: "dashboard", icon: LayoutDashboard },
    { href: "/app/systems", key: "systems", icon: Layers },
    { href: "/app/prompts", key: "prompts", icon: Terminal },
    { href: "/app/automations", key: "automations", icon: Workflow },
    { href: "/app/assets", key: "assets", icon: FileText },
    { href: "/app/favorites", key: "favorites", icon: Star },
    { href: "/app/updates", key: "updates", icon: Bell },
    { href: "/app/account", key: "account", icon: User },
]

export function AppNav({ className }: { className?: string }) {
    const pathname = usePathname()
    const t = useTranslations('AppNav')

    return (
        <nav className={cn("grid items-start gap-2 p-4 text-sm font-medium", className)}>
            {navItems.map((item) => {
                const Icon = item.icon
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                            pathname === item.href ? "bg-muted text-primary" : "text-muted-foreground"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        {t(item.key as any)}
                    </Link>
                )
            })}
        </nav>
    )
}

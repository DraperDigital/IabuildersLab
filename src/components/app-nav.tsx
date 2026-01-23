"use client"

import { Link, usePathname } from "@/i18n/routing"
import { cn } from "@/lib/utils"
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
    { href: "/app", label: "Dashboard", icon: LayoutDashboard },
    { href: "/app/systems", label: "Systems", icon: Layers },
    { href: "/app/prompts", label: "Prompts", icon: Terminal },
    { href: "/app/automations", label: "Automations", icon: Workflow },
    { href: "/app/assets", label: "Assets", icon: FileText },
    { href: "/app/favorites", label: "Favorites", icon: Star },
    { href: "/app/updates", label: "Updates", icon: Bell },
    { href: "/app/account", label: "Account", icon: User },
]

export function AppNav({ className }: { className?: string }) {
    const pathname = usePathname()

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
                        {item.label}
                    </Link>
                )
            })}
        </nav>
    )
}

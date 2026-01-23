"use client"

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { usePathname } from "@/i18n/routing";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    Tags,
    LogOut
} from "lucide-react";

const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/content", label: "Content", icon: FileText },
    { href: "/admin/tags", label: "Tags", icon: Tags },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSideNav({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <div className={cn("flex h-full flex-col border-r bg-muted/20", className)}>
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="font-bold text-lg">IA Builders CMS</Link>
            </div>
            <div className="flex-1 overflow-auto py-4">
                <nav className="grid items-start gap-1 px-4">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-muted",
                                    isActive ? "bg-muted text-primary" : "text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="border-t p-4">
                <Link href="/login" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-all">
                    <LogOut className="h-4 w-4" />
                    Logout
                </Link>
            </div>
        </div>
    );
}

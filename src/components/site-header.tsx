import { Input } from "@/components/ui/input"
import { AppNav } from "@/components/app-nav"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Menu, Shield } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function SiteHeader() {
    const t = useTranslations('Header');

    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col w-[250px] p-0">
                    <div className="p-6 border-b">
                        <img src="/logo-horizontal.png" alt="IA Builders Lab" className="h-8 object-contain" />
                    </div>
                    <AppNav />
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder={t('search') || 'Buscar...'}
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
            </div>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/admin" title={t('dashboard') || 'Dashboard'}>
                    <Shield className="h-5 w-5" />
                    <span className="sr-only">Admin</span>
                </Link>
            </Button>
            <Avatar>
                <AvatarImage src="" alt="User" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            {/* Dropdown for user menu can be added later */}
        </header>
    )
}

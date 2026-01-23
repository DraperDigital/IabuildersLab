import { AppNav } from "@/components/app-nav"
import { SiteHeader } from "@/components/site-header"

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <div className="flex flex-1 flex-col md:flex-row">
                <aside className="hidden w-[250px] flex-col border-r bg-muted/40 md:flex">
                    <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
                        <span className="font-bold">IA Builders Lab</span>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <AppNav />
                    </div>
                </aside>
                <main className="flex flex-1 flex-col">
                    <SiteHeader />
                    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

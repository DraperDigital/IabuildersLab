import { AppNav } from "@/components/app-nav";

export default function AppLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="hidden h-full w-64 md:flex flex-col border-r">
                <div className="flex h-16 items-center border-b px-6">
                    <span className="font-bold text-lg">IA Builders</span>
                </div>
                <AppNav className="flex-1" />
            </aside>
            <main className="flex-1 overflow-y-auto bg-background p-8">
                {children}
            </main>
        </div>
    );
}

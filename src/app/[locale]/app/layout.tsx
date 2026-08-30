import { AppNav } from "@/components/app-nav";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AppLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="hidden h-full w-64 md:flex flex-col border-r">
                <div className="flex h-16 items-center border-b px-6">
                    <img src="/logo-horizontal.png" alt="IA Builders" className="h-8 object-contain" />
                </div>
                <AppNav className="flex-1" />
            </aside>
            <main className="flex-1 overflow-y-auto bg-background p-8">
                {children}
            </main>
        </div>
    );
}

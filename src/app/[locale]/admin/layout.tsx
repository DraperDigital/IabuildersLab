import { AdminSideNav } from "@/components/admin-nav";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AdminLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const isMock = process.env.NODE_ENV !== 'production' && (await cookies()).get('mock_session')?.value === 'true';
    if (!isMock) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (profile?.role !== 'admin') {
            redirect('/app');
        }
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="hidden h-full w-64 md:flex flex-col">
                <AdminSideNav />
            </aside>
            <main className="flex-1 overflow-y-auto bg-background p-8">
                {children}
            </main>
        </div>
    );
}

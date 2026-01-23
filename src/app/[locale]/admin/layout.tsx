import { AdminSideNav } from "@/components/admin-nav";
import { Link } from "@/i18n/routing";

export default function AdminLayout({
    children
}: {
    children: React.ReactNode;
}) {
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

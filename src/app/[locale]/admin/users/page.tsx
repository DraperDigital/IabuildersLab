import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getUsers, updateUserRole, updateUserPlan } from "@/actions/users";
import { UserRoleSelector } from "@/components/user-role-selector";
import { UserPlanSelector } from "@/components/user-plan-selector";

export default async function AdminUsersPage() {
    const response = await getUsers();

    // Check if response has error property if strict typing used, 
    // but getUsers returns { data, count, totalPages } or { data: [], ... }
    // It does NOT return { error } based on my implementation (returns empty data on catch).

    const users = response.data;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <p className="text-muted-foreground">Manage users, roles, and subscriptions.</p>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Joined</TableHead>
                            {/* <TableHead className="text-right">Actions</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            users?.map((user: any) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.email}</TableCell>
                                    <TableCell>
                                        <UserRoleSelector userId={user.id} initialRole={user.profile?.role || 'member'} />
                                    </TableCell>
                                    <TableCell>
                                        <UserPlanSelector userId={user.id} initialPlan={user.profile?.plan || 'access'} />
                                    </TableCell>
                                    <TableCell>{new Date(user.profile?.created_at || new Date().toISOString()).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

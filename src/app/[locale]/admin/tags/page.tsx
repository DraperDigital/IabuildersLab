import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pencil, Plus } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { getTags } from "@/actions/tags";
import { DeleteTagButton } from "@/components/delete-tag-button";
import { TagForm } from "@/components/tag-form";

export default async function AdminTagsPage() {
    // Fetch data
    let tags = [];
    try {
        const result = await getTags();
        tags = result.data || [];
    } catch (err) {
        console.error("Failed to fetch tags:", err);
        return <div>Error loading tags.</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Tags Management</h1>
                    <p className="text-muted-foreground">Manage content tags and categories.</p>
                </div>
                <TagForm
                    trigger={
                        <Button className="gap-2 text-white">
                            <Plus className="h-4 w-4" /> Create Tag
                        </Button>
                    }
                />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tags?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                                    No tags found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            tags?.map((tag: any) => (
                                <TableRow key={tag.id}>
                                    <TableCell className="font-medium">{tag.name}</TableCell>
                                    <TableCell>{tag.slug}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <TagForm
                                                tag={tag}
                                                trigger={
                                                    <Button variant="ghost" size="icon">
                                                        <Pencil className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                }
                                            />
                                            <DeleteTagButton id={tag.id} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

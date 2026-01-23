'use client'

import { deleteContent } from "@/actions/content-actions";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteContentButton({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this content?")) return;

        const result = await deleteContent(id);
        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success("Content deleted");
            router.refresh();
        }
    };

    return (
        <DropdownMenuItem
            className="text-destructive cursor-pointer"
            onSelect={(e) => {
                e.preventDefault();
                handleDelete();
            }}
        >
            <Trash className="mr-2 h-4 w-4" /> Delete
        </DropdownMenuItem>
    );
}

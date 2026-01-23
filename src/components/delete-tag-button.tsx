'use client'

import { deleteTag } from "@/actions/tags";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteTagButton({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this tag?")) return;

        const result = await deleteTag(id);
        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success("Tag deleted");
            router.refresh();
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={handleDelete}
        >
            <Trash className="h-4 w-4" />
            <span className="sr-only">Delete</span>
        </Button>
    );
}

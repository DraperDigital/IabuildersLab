"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { createTag, updateTag } from "@/actions/tags"

const tagSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    slug: z.string().min(2, "Slug must be at least 2 characters").regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
})

interface TagFormProps {
    tag?: { id: string; name: string; slug: string }
    trigger?: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export function TagForm({ tag, trigger, open, onOpenChange }: TagFormProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // Controlled open state if provided, otherwise local state
    const show = open !== undefined ? open : isOpen
    const setShow = onOpenChange || setIsOpen

    const form = useForm<z.infer<typeof tagSchema>>({
        resolver: zodResolver(tagSchema),
        defaultValues: {
            name: tag?.name || "",
            slug: tag?.slug || "",
        },
    })

    // Auto-generate slug from name if creating new
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("name", e.target.value)
        if (!tag) {
            const slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
            form.setValue("slug", slug)
        }
    }

    async function onSubmit(values: z.infer<typeof tagSchema>) {
        setIsLoading(true)
        try {
            if (tag) {
                await updateTag(tag.id, values.name, values.slug)
            } else {
                await createTag(values.name, values.slug)
            }
            setShow(false)
            form.reset()
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={show} onOpenChange={setShow}>
            <DialogTrigger asChild>
                {trigger || <Button>Create Tag</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{tag ? "Edit Tag" : "Create New Tag"}</DialogTitle>
                    <DialogDescription>
                        {tag ? "Update tag details." : "Add a new tag to organize content."}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. Artificial Intelligence"
                                            {...field}
                                            onChange={(e) => {
                                                field.onChange(e);
                                                handleNameChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. artificial-intelligence" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end gap-2 text-white">
                            <Button type="button" variant="outline" onClick={() => setShow(false)} className="text-black">
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Saving..." : "Save"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

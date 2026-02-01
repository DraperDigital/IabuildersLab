"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { createContent, updateContent } from "@/actions/content-actions"
import { ContentItemWithTags, CreateContentInput } from "@/types/content"
import { useRouter } from "@/i18n/routing"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

// Rich Text Editor
import MDEditor from '@uiw/react-md-editor';

// Custom Components
import { TagSelector } from "@/components/tag-selector"
import { ImageUpload } from "@/components/image-upload"

const contentFormSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    slug: z.string().min(2, {
        message: "Slug is required.",
    }),
    type: z.enum(["system", "prompt", "automation", "asset", "text_prompt"]),
    summary: z.string().optional(),
    body_markdown: z.string().optional(),
    category: z.string().optional(),
    level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    is_published: z.boolean().default(false),
    paywall_level: z.enum(["free_preview", "access", "plus", "pro"]).optional(),
    featured_image_url: z.string().optional(),
    tags: z.array(z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string()
    })).default([])
})

type ContentFormValues = z.infer<typeof contentFormSchema>

interface ContentFormProps {
    initialData?: ContentItemWithTags | null;
}

export function ContentForm({ initialData }: ContentFormProps) {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);

    const defaultValues: Partial<ContentFormValues> = initialData ? {
        title: initialData.title,
        slug: initialData.slug,
        type: initialData.type,
        summary: initialData.summary || "",
        body_markdown: initialData.body_markdown || "",
        category: initialData.category || "",
        level: initialData.level || "beginner",
        is_published: initialData.is_published,
        paywall_level: initialData.paywall_level || "access",
        tags: initialData.tags || [],
        featured_image_url: (initialData as any).featured_image_url || "", // Temporary cast until type is updated
    } : {
        title: "",
        slug: "",
        type: "system",
        summary: "",
        body_markdown: "",
        category: "",
        level: "beginner",
        is_published: false,
        paywall_level: "access",
        tags: [],
        featured_image_url: "",
    };

    const form = useForm<ContentFormValues>({
        resolver: zodResolver(contentFormSchema) as any,
        defaultValues,
    })

    async function onSubmit(data: ContentFormValues) {
        setIsSaving(true);
        try {
            const tag_ids = data.tags.map(t => t.id);

            // Prepare input for server action
            const input: any = {
                type: data.type,
                title: data.title,
                slug: data.slug,
                summary: data.summary,
                body_markdown: data.body_markdown,
                category: data.category,
                level: data.level,
                is_published: data.is_published,
                paywall_level: data.paywall_level,
                tag_ids,
                // featured_image_url: data.featured_image_url // Add when supported in DB
            };

            let result;
            if (initialData?.id) {
                result = await updateContent({ ...input, id: initialData.id });
            } else {
                result = await createContent(input);
            }

            if (result.error) {
                toast.error(`Error: ${result.error}`);
                return;
            }

            toast.success(initialData ? "Content updated successfully" : "Content created successfully");
            router.push('/admin/content');
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsSaving(false);
        }
    }

    // Auto-generate slug from title
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        form.setValue("title", title);

        if (!initialData) { // Only auto-generate for new content
            const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
            form.setValue("slug", slug);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="AI Research System"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handleTitleChange(e);
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
                                    <Input placeholder="ai-research-system" {...field} />
                                </FormControl>
                                <FormDescription>
                                    URL friendly identifier.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select content type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="system">System</SelectItem>
                                        <SelectItem value="prompt">Prompt</SelectItem>
                                        <SelectItem value="automation">Automation</SelectItem>
                                        <SelectItem value="text_prompt">Text Prompt</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Level</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select difficulty" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="intermediate">Intermediate</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="paywall_level"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Paywall Level</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select access level" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="free_preview">Free Preview</SelectItem>
                                        <SelectItem value="access">Access</SelectItem>
                                        <SelectItem value="plus">Plus</SelectItem>
                                        <SelectItem value="pro">Pro</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Input placeholder="Marketing, Sales, etc." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <TagSelector
                                        selectedTags={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="featured_image_url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Featured Image</FormLabel>
                            <FormControl>
                                <ImageUpload
                                    value={field.value}
                                    onChange={field.onChange}
                                    folder="featured"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Summary</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Brief description of the content..."
                                    className="resize-none h-24"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="body_markdown"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Body (Markdown)</FormLabel>
                            <FormControl>
                                <div data-color-mode="dark">
                                    <MDEditor
                                        value={field.value}
                                        onChange={field.onChange}
                                        height={400}
                                        visibleDragbar={false}
                                        preview="edit"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="is_published"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <FormLabel className="text-base">Published</FormLabel>
                                <FormDescription>
                                    Make this content visible to users.
                                </FormDescription>
                            </div>
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                        disabled={isSaving}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSaving}>
                        {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {initialData ? "Update Content" : "Save Content"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

'use client'

import React, { useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { Tag } from '@/types/content';
import { createTag, searchTags } from '@/actions/tag-utils';
import { toast } from 'sonner';

interface TagSelectorProps {
    selectedTags: Tag[];
    onChange: (tags: Tag[]) => void;
}

export function TagSelector({ selectedTags, onChange }: TagSelectorProps) {
    const [isLoading, setIsLoading] = useState(false);

    const loadOptions = (inputValue: string) => {
        return searchTags(inputValue).then(tags =>
            tags.map(tag => ({ label: tag.name, value: tag.id, ...tag }))
        );
    };

    const handleCreate = async (inputValue: string) => {
        setIsLoading(true);
        try {
            const slug = inputValue.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const newTag = await createTag(inputValue, slug);

            const newOption = { label: newTag.name, value: newTag.id, ...newTag };
            onChange([...selectedTags, newTag]);
            toast.success(`Tag "${inputValue}" created`);
        } catch (error) {
            console.error(error);
            toast.error("Failed to create tag");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (newValue: any) => {
        onChange(newValue ? newValue.map((v: any) => ({ id: v.value, name: v.label, slug: v.slug })) : []);
    };

    // Format selected tags for react-select
    const value = selectedTags.map(tag => ({ label: tag.name, value: tag.id, ...tag }));

    return (
        <AsyncCreatableSelect
            cacheOptions
            defaultOptions
            loadOptions={loadOptions}
            onChange={handleChange}
            onCreateOption={handleCreate}
            value={value}
            isMulti
            isLoading={isLoading}
            className="text-sm"
            classNames={{
                control: () => "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                menu: () => "bg-popover text-popover-foreground border rounded-md shadow-md mt-1",
                option: ({ isFocused }) => isFocused ? "bg-accent text-accent-foreground px-2 py-1" : "px-2 py-1",
                multiValue: () => "bg-secondary text-secondary-foreground rounded-sm mr-1",
                multiValueLabel: () => "px-1",
                multiValueRemove: () => "hover:bg-destructive hover:text-destructive-foreground rounded-sm px-1 ml-1"
            }}
            unstyled
            placeholder="Select or create tags..."
        />
    );
}

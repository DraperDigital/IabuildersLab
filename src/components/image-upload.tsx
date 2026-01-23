'use client'

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";
import { uploadFile } from '@/actions/media';
import { toast } from "sonner";
import Image from 'next/image';

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    folder?: string;
}

export function ImageUpload({ value, onChange, folder = 'content' }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('path', `${folder}/`);

        try {
            const result = await uploadFile(formData);
            if (result.error) {
                toast.error(`Upload failed: ${result.error}`);
            } else if (result.data) {
                onChange(result.data.url);
                toast.success('Image uploaded successfully');
            }
        } catch (error) {
            console.error(error);
            toast.error('Upload failed');
        } finally {
            setIsUploading(false);
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const handleRemove = () => {
        onChange('');
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                {value ? (
                    <div className="relative aspect-video w-64 rounded-lg overflow-hidden border bg-muted">
                        <Image
                            src={value}
                            alt="Preview"
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={handleRemove}
                            className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                            type="button"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <div className="h-32 w-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/50">
                        <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                        <span className="text-sm">No image selected</span>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2">
                <Input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                    id="image-upload"
                    disabled={isUploading}
                />
                <Button
                    type="button"
                    variant="secondary"
                    disabled={isUploading}
                    onClick={() => inputRef.current?.click()}
                >
                    {isUploading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Uploading...
                        </>
                    ) : (
                        <>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Image
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}

export type ContentType = 'system' | 'prompt' | 'automation' | 'asset' | 'text_prompt';
export type ContentLevel = 'beginner' | 'intermediate' | 'advanced';
export type PaywallLevel = 'free_preview' | 'access' | 'plus' | 'pro';
export type UserRole = 'member' | 'admin';
export type SubscriptionPlan = 'access' | 'plus' | 'pro';
export type SystemType = 'sales' | 'content' | 'operations' | 'research' | 'product' | 'other' | (string & {});
export type ProcessState = 'build' | 'test' | 'document' | 'iterate' | (string & {});

export type Tag = {
    id: string;
    name: string;
    slug: string;
};

export type ContentItem = {
    id: string;
    type: ContentType;
    title: string;
    slug: string;
    summary?: string;
    body_markdown?: string;
    category?: string;
    system_type?: SystemType;
    process_state?: ProcessState;
    level?: ContentLevel;
    featured_image_url?: string;
    prompt_text?: string;
    is_published: boolean;
    is_featured: boolean;
    paywall_level: PaywallLevel;
    created_at: string;
    updated_at: string;
    published_at?: string;
    tags?: Tag[];
    customization_guide?: string;
    reference_image_guide?: string;
};

export type ContentItemWithTags = ContentItem & {
    tags: Tag[];
};

export type CreateContentInput = {
    type: ContentType;
    title: string;
    slug: string;
    summary?: string;
    body_markdown?: string;
    category?: string;
    level?: ContentLevel;
    is_published?: boolean;
    is_featured?: boolean;
    paywall_level?: PaywallLevel;
    tag_ids?: string[];
    featured_image_url?: string;
};

export type UpdateContentInput = Partial<CreateContentInput> & {
    id: string;
};

export type Profile = {
    user_id: string;
    name?: string;
    avatar_url?: string;
    role: UserRole;
    plan?: SubscriptionPlan;
    created_at: string;
    updated_at: string;
};

export type UserWithProfile = {
    id: string;
    email?: string;
    profile: Profile;
};

export type Attachment = {
    id: string;
    content_id?: string;
    filename: string;
    file_path: string;
    file_type?: string;
    size?: number;
    created_at: string;
};

export type DashboardMetrics = {
    total_content: number;
    published_content: number;
    total_users: number;
    total_subscribers: number;
    content_by_type: {
        system: number;
        prompt: number;
        automation: number;
    };
};

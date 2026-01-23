-- Create custom types
create type public.user_role as enum ('member', 'admin');
create type public.subscription_plan as enum ('access', 'plus', 'pro');
create type public.content_type as enum ('system', 'prompt', 'automation', 'asset');
create type public.content_level as enum ('beginner', 'intermediate', 'advanced');
create type public.paywall_level as enum ('free_preview', 'access', 'plus', 'pro');

-- Create profiles table
create table public.profiles (
  user_id uuid references auth.users not null primary key,
  name text,
  avatar_url text,
  role public.user_role default 'member'::public.user_role not null,
  plan public.subscription_plan, -- Nullable: no plan (free tier)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

-- Profiles RLS
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = user_id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = user_id);
create policy "Admins can view all profiles" on public.profiles for select using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);
create policy "Admins can update all profiles" on public.profiles for update using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

-- Content Items
create table public.content_items (
  id uuid default gen_random_uuid() primary key,
  type public.content_type not null,
  title text not null,
  slug text unique not null,
  summary text,
  body_markdown text,
  category text,
  level public.content_level,
  is_published boolean default false not null,
  is_featured boolean default false not null,
  paywall_level public.paywall_level default 'pro'::public.paywall_level not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  published_at timestamp with time zone
);

alter table public.content_items enable row level security;

-- Content Items RLS
create policy "Admins can do everything on content_items" on public.content_items for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

create policy "Public view published free previews" on public.content_items for select using (
  is_published = true and paywall_level = 'free_preview'
);

create policy "Members view based on plan" on public.content_items for select using (
  is_published = true and (
    paywall_level = 'free_preview' or
    (auth.role() = 'authenticated' and exists (
      select 1 from public.profiles
      where user_id = auth.uid() and (
        (plan = 'access' and paywall_level in ('access')) or
        (plan = 'plus' and paywall_level in ('access', 'plus')) or
        (plan = 'pro')
      )
    ))
  )
);

-- Updates/Changelog
create table public.updates (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  body_markdown text,
  paywall_level public.paywall_level default 'free_preview'::public.paywall_level not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.updates enable row level security;

create policy "Admins manage updates" on public.updates for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

create policy "View updates based on plan" on public.updates for select using (
  paywall_level = 'free_preview' or
  (auth.role() = 'authenticated' and exists (
      select 1 from public.profiles
      where user_id = auth.uid() and (
        (plan = 'access' and paywall_level in ('access')) or
        (plan = 'plus' and paywall_level in ('access', 'plus')) or
        (plan = 'pro')
      )
  ))
);

-- Tags
create table public.tags (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique not null
);
alter table public.tags enable row level security;

create policy "Everyone can read tags" on public.tags for select using (true);
create policy "Admins write tags" on public.tags for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

-- Content Tags
create table public.content_tags (
  content_id uuid references public.content_items(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key (content_id, tag_id)
);
alter table public.content_tags enable row level security;

create policy "Everyone read content tags" on public.content_tags for select using (true);
create policy "Admins write content tags" on public.content_tags for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

-- Attachments
create table public.attachments (
  id uuid default gen_random_uuid() primary key,
  content_id uuid references public.content_items(id) on delete cascade,
  filename text not null,
  file_path text not null,
  file_type text,
  size integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.attachments enable row level security;

create policy "Admins all attachments" on public.attachments for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);
create policy "Members read attachments if they can read content" on public.attachments for select using (
  exists (
    select 1 from public.content_items c
    where c.id = content_id
    and c.is_published = true
    and (
       c.paywall_level = 'free_preview' or
       (auth.role() = 'authenticated' and exists (
          select 1 from public.profiles p where p.user_id = auth.uid() and (
             (p.plan = 'access' and c.paywall_level = 'access') or
             (p.plan = 'plus' and c.paywall_level in ('access', 'plus')) or
             (p.plan = 'pro')
          )
       ))
    )
  )
);

-- Favorites
create table public.favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  content_id uuid references public.content_items(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, content_id)
);
alter table public.favorites enable row level security;

create policy "User manage own favorites" on public.favorites for all using (auth.uid() = user_id);
create policy "Admins read all favorites" on public.favorites for select using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

-- Stripe tables
create table public.stripe_customers (
  user_id uuid references auth.users primary key,
  stripe_customer_id text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.stripe_customers enable row level security;

create policy "Users read own stripe customer" on public.stripe_customers for select using (auth.uid() = user_id);
create policy "Admins all stripe customers" on public.stripe_customers for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

create table public.stripe_subscriptions (
  user_id uuid references auth.users primary key,
  status text not null,
  plan public.subscription_plan not null,
  current_period_end timestamp with time zone,
  cancel_at_period_end boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.stripe_subscriptions enable row level security;

create policy "Users read own subscription" on public.stripe_subscriptions for select using (auth.uid() = user_id);
create policy "Admins all subscriptions" on public.stripe_subscriptions for all using (
  exists (select 1 from public.profiles where user_id = auth.uid() and role = 'admin')
);

-- Triggers
create function public.handle_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_profiles_updated
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create function public.handle_new_user() returns trigger as $$
begin
  insert into public.profiles (user_id, name, role, plan)
  values (new.id, new.raw_user_meta_data->>'full_name', 'member', null);
  return new;
end;
$$ language plpgsql;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

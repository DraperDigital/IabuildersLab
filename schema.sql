-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (Extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  role text default 'user', -- 'admin', 'user'
  plan text default 'free_preview', -- 'free_preview', 'access', 'plus', 'pro'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Secure Profiles
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- 2. Content Table
create table public.content (
  id uuid default uuid_generate_v4() primary key,
  type text not null, -- 'system', 'prompt', 'automation'
  title text not null,
  slug text not null unique,
  summary text,
  body_markdown text,
  category text,
  level text, -- 'beginner', 'intermediate', 'advanced'
  is_published boolean default false,
  published_at timestamp with time zone,
  is_featured boolean default false,
  paywall_level text default 'free_preview',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Secure Content
alter table public.content enable row level security;
create policy "Content is viewable by everyone if published." on public.content for select using (is_published = true or auth.uid() in (select id from public.profiles where role = 'admin'));
create policy "Admins can insert content." on public.content for insert with check (auth.uid() in (select id from public.profiles where role = 'admin'));
create policy "Admins can update content." on public.content for update using (auth.uid() in (select id from public.profiles where role = 'admin'));
create policy "Admins can delete content." on public.content for delete using (auth.uid() in (select id from public.profiles where role = 'admin'));

-- 3. Tags Table
create table public.tags (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique
);

-- Secure Tags
alter table public.tags enable row level security;
create policy "Tags are viewable by everyone." on public.tags for select using (true);
create policy "Admins can insert tags." on public.tags for insert with check (auth.uid() in (select id from public.profiles where role = 'admin'));
create policy "Admins can update tags." on public.tags for update using (auth.uid() in (select id from public.profiles where role = 'admin'));
create policy "Admins can delete tags." on public.tags for delete using (auth.uid() in (select id from public.profiles where role = 'admin'));

-- 4. Content_Tags Junction Table
create table public.content_tags (
  content_id uuid references public.content(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key (content_id, tag_id)
);

-- Secure Content_Tags
alter table public.content_tags enable row level security;
create policy "Content_Tags viewable by everyone." on public.content_tags for select using (true);
create policy "Admins can insert content_tags." on public.content_tags for insert with check (auth.uid() in (select id from public.profiles where role = 'admin'));
create policy "Admins can delete content_tags." on public.content_tags for delete using (auth.uid() in (select id from public.profiles where role = 'admin'));


-- 5. Trigger to handle updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_content_updated
  before update on public.content
  for each row execute procedure public.handle_updated_at();

-- 6. Trigger to create Profile on Signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role, plan)
  values (new.id, new.email, 'user', 'free_preview');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- SEED DATA (Optional - to get started)
insert into public.tags (name, slug) values 
('Productivity', 'productivity'),
('Marketing', 'marketing'),
('Automation', 'automation'),
('Sales', 'sales');

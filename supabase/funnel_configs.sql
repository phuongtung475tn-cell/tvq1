create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'admin' check (role in ('admin', 'owner')),
  enabled boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
drop policy if exists "admins can read their own access" on public.admin_users;
create policy "admins can read their own access"
  on public.admin_users for select to authenticated
  using (user_id = auth.uid() and enabled = true);
insert into public.admin_users (user_id, email, role, enabled)
select id, email, 'owner', true from auth.users
where lower(email) = lower('phuongtung475.tn@gmail.com')
on conflict (user_id) do update set email = excluded.email, role = 'owner', enabled = true;

create table if not exists public.funnel_configs (
  id bigint primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.funnel_configs enable row level security;
drop policy if exists "funnel configs can be read" on public.funnel_configs;
create policy "funnel configs can be read" on public.funnel_configs for select using (true);
drop policy if exists "funnel configs can be written" on public.funnel_configs;
drop policy if exists "funnel configs can be updated" on public.funnel_configs;
create policy "funnel configs can be written" on public.funnel_configs for insert to authenticated
  with check (id = 1 and exists (select 1 from public.admin_users where user_id = auth.uid() and enabled = true and role in ('admin', 'owner')));
create policy "funnel configs can be updated" on public.funnel_configs for update to authenticated
  using (id = 1 and exists (select 1 from public.admin_users where user_id = auth.uid() and enabled = true and role in ('admin', 'owner')))
  with check (id = 1 and exists (select 1 from public.admin_users where user_id = auth.uid() and enabled = true and role in ('admin', 'owner')));

create table if not exists public.funnel_analytics (
  id bigint primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.funnel_analytics enable row level security;
drop policy if exists "funnel analytics can be read" on public.funnel_analytics;
create policy "funnel analytics can be read" on public.funnel_analytics for select to authenticated;
drop policy if exists "funnel analytics can be written" on public.funnel_analytics;
drop policy if exists "funnel analytics can be updated" on public.funnel_analytics;
create policy "funnel analytics can be written" on public.funnel_analytics for insert to authenticated
  with check (id = 1 and exists (select 1 from public.admin_users where user_id = auth.uid() and enabled = true and role in ('admin', 'owner')));
create policy "funnel analytics can be updated" on public.funnel_analytics for update to authenticated
  using (id = 1 and exists (select 1 from public.admin_users where user_id = auth.uid() and enabled = true and role in ('admin', 'owner')))
  with check (id = 1 and exists (select 1 from public.admin_users where user_id = auth.uid() and enabled = true and role in ('admin', 'owner')));

update public.funnel_configs set data = data #- '{admin,password}' where id = 1;

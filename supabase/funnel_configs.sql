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
  with check (id = 1 and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "funnel configs can be updated" on public.funnel_configs for update to authenticated
  using (id = 1 and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check (id = 1 and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

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
  with check (id = 1 and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "funnel analytics can be updated" on public.funnel_analytics for update to authenticated
  using (id = 1 and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check (id = 1 and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

update public.funnel_configs set data = data #- '{admin,password}' where id = 1;

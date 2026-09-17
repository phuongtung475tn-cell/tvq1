create table if not exists public.funnel_configs (
  id bigint primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.funnel_configs enable row level security;

drop policy if exists "funnel configs can be read" on public.funnel_configs;
create policy "funnel configs can be read"
  on public.funnel_configs for select
  using (true);

drop policy if exists "funnel configs can be written" on public.funnel_configs;
drop policy if exists "funnel configs can be updated" on public.funnel_configs;
create policy "funnel configs can be written"
  on public.funnel_configs for insert
  to authenticated
  with check (id = 1);

create policy "funnel configs can be updated"
  on public.funnel_configs for update
  to authenticated
  using (id = 1)
  with check (id = 1);

create unique index if not exists funnel_configs_id_idx on public.funnel_configs (id);

create table if not exists public.funnel_analytics (
  id bigint primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.funnel_analytics enable row level security;
drop policy if exists "funnel analytics can be read" on public.funnel_analytics;
create policy "funnel analytics can be read"
  on public.funnel_analytics for select
  to authenticated;
drop policy if exists "funnel analytics can be written" on public.funnel_analytics;
drop policy if exists "funnel analytics can be updated" on public.funnel_analytics;
create policy "funnel analytics can be written"
  on public.funnel_analytics for insert
  to authenticated
  with check (id = 1);
create policy "funnel analytics can be updated"
  on public.funnel_analytics for update
  to authenticated
  using (id = 1)
  with check (id = 1);

-- Remove the legacy client-side admin password from existing cloud config.
update public.funnel_configs
set data = data #- '{admin,password}'
where id = 1;


create table if not exists public.funnel_configs (
  id bigint primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.funnel_configs enable row level security;

-- The anon key is used by the current client-side storage adapter.
-- Restrict this policy further when Supabase Auth is enabled.
drop policy if exists "funnel configs can be read" on public.funnel_configs;
create policy "funnel configs can be read"
  on public.funnel_configs for select
  using (true);

drop policy if exists "funnel configs can be written" on public.funnel_configs;
create policy "funnel configs can be written"
  on public.funnel_configs for insert
  with check (id = 1);

drop policy if exists "funnel configs can be updated" on public.funnel_configs;
create policy "funnel configs can be updated"
  on public.funnel_configs for update
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
  using (true);
drop policy if exists "funnel analytics can be written" on public.funnel_analytics;
create policy "funnel analytics can be written"
  on public.funnel_analytics for insert
  with check (id = 1);
drop policy if exists "funnel analytics can be updated" on public.funnel_analytics;
create policy "funnel analytics can be updated"
  on public.funnel_analytics for update
  using (id = 1)
  with check (id = 1);

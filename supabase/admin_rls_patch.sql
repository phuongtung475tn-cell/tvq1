-- Run once in Supabase SQL Editor after admin_users exists.
-- Uses the application's admin_users allowlist instead of app_metadata.role.

drop policy if exists "funnel analytics can be written" on public.funnel_analytics;
drop policy if exists "funnel analytics can be updated" on public.funnel_analytics;
create policy "funnel analytics can be written"
  on public.funnel_analytics for insert
  to authenticated
  with check (
    id = 1
    and exists (
      select 1 from public.admin_users
      where user_id = auth.uid()
        and enabled = true
        and role in ('admin', 'owner')
    )
  );
create policy "funnel analytics can be updated"
  on public.funnel_analytics for update
  to authenticated
  using (
    id = 1
    and exists (
      select 1 from public.admin_users
      where user_id = auth.uid()
        and enabled = true
        and role in ('admin', 'owner')
    )
  )
  with check (
    id = 1
    and exists (
      select 1 from public.admin_users
      where user_id = auth.uid()
        and enabled = true
        and role in ('admin', 'owner')
    )
  );

-- Ensure the aggregate row exists for the Admin analytics screen.
insert into public.funnel_analytics (id, data, updated_at)
values (
  1,
  '{"visits":0,"leads":0,"bySource":{},"bySourceStats":{},"byVariant":{}}'::jsonb,
  now()
)
on conflict (id) do nothing;

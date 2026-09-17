-- Admin access allowlist. Create the user first in Supabase Auth.
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
  on public.admin_users for select
  to authenticated
  using (user_id = auth.uid() and enabled = true);

-- Grant the current owner account after it exists in Authentication > Users.
insert into public.admin_users (user_id, email, role, enabled)
select id, email, 'owner', true
from auth.users
where lower(email) = lower('phuongtung475.tn@gmail.com')
on conflict (user_id) do update set email = excluded.email, role = 'owner', enabled = true;

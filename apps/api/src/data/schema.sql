create table workspaces (
  id uuid primary key,
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table teams (
  id uuid primary key,
  workspace_id uuid not null references workspaces(id),
  name text not null,
  slug text not null,
  created_at timestamptz not null default now()
);

create table users (
  id uuid primary key,
  email text not null unique,
  display_name text not null,
  created_at timestamptz not null default now()
);

create table workspace_members (
  id uuid primary key,
  workspace_id uuid not null references workspaces(id),
  user_id uuid not null references users(id),
  team_id uuid references teams(id),
  roles jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table artifacts (
  id uuid primary key,
  workspace_id uuid not null references workspaces(id),
  owner_team_id uuid not null references teams(id),
  type text not null,
  slug text not null,
  name text not null,
  summary text not null,
  description text not null,
  visibility text not null,
  status text not null,
  current_version text,
  labels jsonb not null default '{}'::jsonb,
  tags jsonb not null default '[]'::jsonb,
  created_by uuid references users(id),
  updated_by uuid references users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, slug)
);

create table artifact_versions (
  id uuid primary key,
  artifact_id uuid not null references artifacts(id),
  version text not null,
  manifest jsonb not null,
  package_uri text,
  checksums jsonb not null default '{}'::jsonb,
  created_by uuid references users(id),
  created_at timestamptz not null default now(),
  unique (artifact_id, version)
);

create table artifact_dependencies (
  id uuid primary key,
  artifact_version_id uuid not null references artifact_versions(id),
  dependency_type text not null,
  target text not null,
  version_range text,
  optional boolean not null default false
);

create table artifact_files (
  id uuid primary key,
  artifact_version_id uuid not null references artifact_versions(id),
  file_path text not null,
  storage_uri text not null,
  checksum text,
  created_at timestamptz not null default now()
);

create table review_requests (
  id uuid primary key,
  artifact_version_id uuid not null references artifact_versions(id),
  submitted_by uuid references users(id),
  reviewer_id uuid references users(id),
  status text not null,
  notes text,
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

create table install_events (
  id uuid primary key,
  artifact_version_id uuid not null references artifact_versions(id),
  installed_by uuid references users(id),
  target_agent text not null,
  target_workspace text,
  created_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key,
  workspace_id uuid not null references workspaces(id),
  actor_id uuid references users(id),
  action text not null,
  resource_type text not null,
  resource_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- HireMate survey: table + security
-- Paste into Supabase -> SQL Editor -> New query -> Run

create table if not exists public.hiremate_survey_responses (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),

  -- screener
  eligible       boolean,                       -- Yes/No on the first question

  -- section 1: about you
  stage          text,                          -- Q1 current status
  roles          text[],                        -- Q2 target roles (multi)
  roles_other    text,                          -- Q2 "Other" text
  location       text,                          -- Q3 metro / tier-2 / town
  language       text,                          -- Q4 interview language
  language_other text,

  -- section 2: recent interviews
  interviews_6m  text,                          -- Q5
  offers         text,                          -- Q6
  prep           text[],                        -- Q7 how they prepared (multi)
  prep_other     text,                          -- Q7 "Other" text (app name)
  hardest        text,                          -- Q8 hardest part
  feedback       text,                          -- Q9 told why rejected

  -- section 3: spending and trust
  spend_12m      text,                          -- Q10
  paid_for_job   text,                          -- Q11
  confidence     smallint,                      -- Q12 scale 1-5
  price_choice   text,                          -- Q13
  story          text,                          -- Q14 open text

  -- section 4: optional follow-up
  contact        text,                          -- Q15 name + phone/email

  -- context (no personal data)
  source         text,                          -- ?src=linkedin / whatsapp / dm
  device         text                           -- mobile / desktop
);

-- Row Level Security: anyone can submit, nobody can read without your key
alter table public.hiremate_survey_responses enable row level security;

-- Table privileges for the public (anon) role. Needed on projects where the
-- default grants have been revoked; without this the insert fails with 42501.
grant usage on schema public to anon;
grant insert on table public.hiremate_survey_responses to anon;

drop policy if exists "anon can insert responses" on public.hiremate_survey_responses;
create policy "anon can insert responses"
  on public.hiremate_survey_responses
  for insert
  to anon
  with check (true);

-- No select/update/delete policy on purpose.
-- You read the data in the Supabase dashboard (service role), where you can also
-- click Export -> CSV. The public page can write but can never read anything back.

-- Handy view for your own quick checks in the SQL editor
create or replace view public.hiremate_survey_summary as
select
  count(*)                                              as total_started,
  count(*) filter (where eligible is true)              as eligible,
  count(*) filter (where eligible is false)             as screened_out,
  count(*) filter (where stage is not null)             as completed,
  count(*) filter (where contact is not null and contact <> '') as gave_contact,
  round(avg(confidence)::numeric, 2)                    as avg_confidence
from public.hiremate_survey_responses;

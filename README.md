# HireMate survey site

A self-hosted replacement for the Google Form. One HTML file, answers stored in Supabase.

## Files

| File | What it is |
|---|---|
| `supabase-setup.sql` | Table + security policy + summary view. Paste into Supabase → SQL Editor → Run. |
| `index.html` | The survey page: screening question + 15 questions, progress bar, mobile and desktop. |

## Setup, in order

**1. Supabase**
- Open your Supabase project → **SQL Editor** → **New query**
- Paste all of `supabase-setup.sql` → **Run**
- Go to **Project Settings → API** and copy the **Project URL** and the **anon public** key

**2. Put the keys in the page**
- Open `index.html`, find the block near the bottom that says `PASTE YOUR SUPABASE VALUES HERE`
- Replace `PASTE_YOUR_PROJECT_URL` and `PASTE_YOUR_ANON_KEY`
- The anon key is designed to be public. With the policy in this SQL, the page can only insert. It cannot read anything back.

**3. Publish**
- Private GitHub repo → connect it to **Cloudflare Pages** → deploy (no build step, just static files)
- Or drag the folder into Cloudflare Pages / Netlify for an instant URL

**4. Test before sharing**
- Open the live URL on your phone
- Answer **No** to the screening question: it should end with "Thanks for checking!"
- Then run through the whole thing answering **Yes**
- Check both rows appear in Supabase → **Table Editor** → `hiremate_survey_responses`

## Reading the responses

- **Supabase → Table Editor → `hiremate_survey_responses`** → the **Export** button gives you CSV
- Quick counts, in the SQL editor: `select * from hiremate_survey_summary;`
- Useful cross-tab:
  ```sql
  select hardest, count(*) from hiremate_survey_responses
  where eligible group by hardest order by 2 desc;
  ```

## Tracking where responses come from

Add `?src=` to the link when you share it, and the source is saved with each response:

| Where you share | Link |
|---|---|
| LinkedIn post | `https://your-url/?src=linkedin` |
| LinkedIn DMs | `https://your-url/?src=dm` |
| WhatsApp groups | `https://your-url/?src=whatsapp` |
| College groups | `https://your-url/?src=college` |

The page also records whether the person answered on mobile or desktop.

## Tested (21 Sep 2026)

- Mobile layout at 375×812 ✅
- Progress bar and step counter move with each section ✅
- Required-field check blocks "Next" and shows an error ✅
- Full run builds a row that matches the SQL columns exactly ✅
- "No" on the screening question ends the survey with its own message ✅
- With no Supabase keys filled in, the page still runs and logs a warning instead of crashing ✅

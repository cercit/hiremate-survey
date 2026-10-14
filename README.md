# HireMate

An AI mock-interview app for Indian freshers and early-career switchers going into bank and NBFC jobs (collections, field sales, credit and data analyst). It plays the real interview for the role, argues back like a branch manager, flags answers that break RBI or fair-selling rules, and shows a better answer.

Built as a mini project for the Product Management program by Masai × IIT Roorkee, by Sameer Shreenivas Mittimani (October 2026).

## Start here

| | Link |
|---|---|
| **Launch strategy (PDF, 6 pages)** | [HireMate-Launch-Strategy.pdf](HireMate-Launch-Strategy.pdf) |
| Home (strategy site) | https://cercit.github.io/hiremate-survey/ |
| Landing page | https://cercit.github.io/hiremate-survey/home/ |
| Clickable prototype | https://cercit.github.io/hiremate-survey/demo/ |
| Research survey (closed 30 Sep 2026) | https://cercit.github.io/hiremate-survey/survey/ |

## What's in this repo

| Path | What it is |
|---|---|
| `HireMate-Launch-Strategy.pdf` | The final submission |
| `index.html`, `home/`, `demo/`, `survey/` | The live site: strategy (home), landing page, prototype, survey. `strategy/` redirects to the home page |
| `project/HireMate-Market-Research.md` | Market research from 4 AI tools, cross-checked, with the 6 errors caught |
| `project/research/verified-fact-sheet.md` | Every number used, checked at the source |
| `project/research/verified-question-bank.md` | 48 BFSI interview scenarios, 12 per role, with red lines and fixes |
| `project/research/ai-role-grounding/` | Raw prompts and responses: how banks and NBFCs hire (ChatGPT, Gemini) |
| `project/research/role-grounding-*.md` | Those responses, checked against RBI, IIBF, ICICI and Mahindra Finance sources |
| `project/research/persona-interviews/` | 14 AI-simulated persona interviews (7 personas × ChatGPT and Gemini), scoring rules and the combined synthesis |
| `project/research/simulated-interviews-*.md` | An earlier round of simulated interviews |
| `project/user-research/` | Research plan, survey design, interview guides, persona prompts, the LinkedIn post |
| `project/process-log.md` | A running log of every prompt, decision and error caught |
| `project/final-source/` | The HTML the PDF is printed from, plus the render and screenshot scripts |

**About the persona interviews:** they are AI-simulated, not real users, and are labelled that way in every file. They were used to sharpen hypotheses, not as evidence.

---

## Running the survey yourself


### Files

| File | What it is |
|---|---|
| `supabase-setup.sql` | Table + security policy + summary view. Paste into Supabase → SQL Editor → Run. |
| `index.html` | The survey page: screening question + 15 questions, progress bar, mobile and desktop. |

### Setup, in order

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

### Reading the responses

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

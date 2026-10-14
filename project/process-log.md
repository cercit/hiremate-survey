# HireMate Mini Project: Process Log

Running record of every step, prompt, tool and decision for the HireMate launch strategy.

- **Assignment:** Practice Ungraded Mini-Project (Masai x IIT Roorkee PM program, batch IITR-PMAI-EN-IV-2607)
- **LMS link:** https://students.masaischool.com/assignments/83706
- **Released:** 17 Sep 2026 (re-sent 19 Sep 2026)
- **Deadline:** LMS says 30 Dec 2026, but **the real one is 30 Sep 2026** (the mentor's top-2 selection happens in the first week of Oct)
- **Graded?** No. It previews the capstone project at the end of the course.
- **Submission:** a single PDF

---

## 1. Tools and services used

| Step | Tool / service | What it did |
|---|---|---|
| Read the brief | `markitdown` (local) | Converted `Mini Project.pdf` → `brief.md` |
| Find the assignment | Gmail (Masai LMS emails) | Confirmed title, deadline, LMS link |
| Brainstorm + strategy review | Claude (Claude Code, Opus) | Segment, role and pricing review; wrote research prompt |
| Market research | Google Gemini **Deep Research** | Web research on Indian entry-level hiring, BFSI roles, competitors, pricing |
| Market research (2nd opinion) | ChatGPT **Deep Research** | Same prompt, `research/chatgpt-deep-research.md` |
| Market research (3rd opinion) | **Perplexity** | Same prompt, `research/perplexity.txt` |
| Market research (4th opinion) | **Grok** | Same prompt, `research/grok.txt` |
| Fact check | Claude + web search | Cross-checked all 4 reports; verified the key numbers at source → `research/verified-fact-sheet.md` (routing rule 5) |

---

## 2. Brief summary

HireMate is an AI mock-interview platform run by a bootstrapped startup. As its PM, write a **Launch Strategy Document** covering:

1. Executive summary (2–3 sentences)
2. Pricing strategy: segments and willingness to pay, pricing model, competitor benchmark, justification (3 tiers suggested)
3. Growth strategy, 0 → 10,000 users in 3 phases: channels, levers, metrics (CAC, conversion, retention)
4. MVP strategy: problem validation + minimum features and why each is needed
5. Success metrics: 6–8 metrics across L0 / L1 / L2
6. Bonus: landing page wireframe + 2–3 promo posts (LinkedIn, Instagram, Reddit)

Grading weights (for reference): pricing 25%, growth 25%, GTM 20%, metrics 20%, presentation 10%.

Full text: `brief.md`

---

## 3. Decisions so far

### 3.1 Market
**India.** Pricing in rupees, built around the Indian hiring cycle.

### 3.2 Target users (Sameer's choice)
1. **Fresh graduates** who have finished their studies and are starting work
2. **Early-career job switchers** with under 3 years' experience, changing their first job

**Reasoning:** hiring volume is highest at the entry level and one level above it, so there are more openings and a larger pool of users. A large pool makes monetisation sustainable and gives the platform a reputation. *To be backed by the Gemini research.*

### 3.3 Target roles (BFSI focus)
Sameer proposed: Data Analyst, Credit Analyst, Field Officers (BFSI sales/servicing at the customer end).

Claude's suggested refinement (agreed for research):
- Data Analyst
- Credit Analyst
- Field Sales / Relationship Executive (banks, NBFCs)
- Collections Officer (split out from "field officer" because it is a separate high-volume, high-attrition role)

Other ideas raised:
- **Hindi and regional-language mocks** for field roles. Many of these interviews are not in English, and no competitor covers this. This could be the main differentiator.
- **Brief deviation:** the brief names PM / Software Engineer / Analyst. The document must say that HireMate launches in BFSI first as a deliberate beachhead and adds tech roles in phase 2.

### 3.4 Pricing

**Sameer's original plan:**

| Item | Price |
|---|---|
| "About me" profile | Free |
| Resume + 1 mock interview | ₹10 |
| Single mock interview | ₹99 |
| Pack of 10 mocks | ₹499 |
| Job assistance (all services until hired) | ₹599 fee + 20% of first month's salary on accepting the offer |

**Claude's review:**

| Item | Verdict | Note |
|---|---|---|
| Free profile | Keep | — |
| ₹10 resume + mock | Adjust | A ₹10 UPI payment filters out people who aren't serious, but charging before the first use costs sign-ups. Suggest: first mock free with no payment, ₹10 for the resume review. |
| ₹99 / ₹499 for 10 | Keep | The pack works out to ₹50 per mock, so it anchors buyers to the pack. Optional middle tier: ₹249 for 3. |
| 20% of salary from the candidate | Rethink | (1) Trust: "pay when you get the job" looks like a common Indian job scam. (2) Once the candidate has the job, there is no way to make them pay. (3) It needs a recruiter team, which a bootstrapped startup can't afford in months 0–6. |

**Alternative proposed:** move the success fee to the **employer**. After 10,000 users, HireMate has a pool of candidates who have already been assessed and scored. NBFCs and banks hiring field staff in volume would pay per hire, or pay a subscription to view candidates.
- Months 0–6: candidates pay small amounts (₹10 / ₹99 / ₹499)
- Months 6+: employer-paid hiring pilot with 2–3 NBFCs

**Status: ✅ DECIDED (19 Sep 2026): Option A. The success fee moves to the employer side.** Candidates pay ₹10 / ₹99 / ₹499; after 6 months, NBFCs/banks pay a per-hire fee for the screened candidate pool. To be tested in the hiring-manager interview (H7).

### 3.5 Why this project matters (stakes)
The mentor said the **top 2 submissions** win a free **6-weekend live fintech build program** with a fintech company: live KYC API, auth, backend, end to end on their servers. The company will **recruit 6–7 people** from that batch. The ungraded project is effectively a competition, so the target is a top-2 submission.

---

## 4. Prompts used

### 4.1 Gemini research prompt (v1, written by Claude)
Saved as `gemini-research-prompt.txt`. It covers 9 areas: entry-level hiring share, pool size, BFSI hiring volume and attrition, salary bands, interview process, willingness to pay, competitor pricing, employer recruitment fees, and placement-fee rules and scams. It asks for one table per question with source + year, marks estimates as ESTIMATE, and ends with 5 insights.

### 4.2 Gemini Deep Research plan (generated by Gemini from 4.1)

1. Employment outlook reports: % and trend of 0–3 yr job openings 2023–2026, plus annual graduates (engineering, commerce, BBA, MBA)
2. BFSI hiring volume and attrition for field sales, collections and credit roles at banks and NBFCs
3. Monthly salary bands (INR), entry level and 1–3 yrs, for the 4 roles
4. Interview process per role: rounds, language, rejection reasons
5. Willingness to pay for interview prep, resume writing and job assistance
6. Competitors (InterviewBuddy, Pramp, Exponent, Final Round AI, Unstop, Apna, WorkIndia, Naukri paid): pricing, BFSI coverage, regional languages
7. Fees paid by NBFCs/banks to recruitment agencies for field roles (fixed vs % of CTC)
8. Rules, regulations and scams around placement fees charged to job seekers

**Gap found:** the plan dropped the count of early-career job switchers, which is half the target market.

**Edit applied to step 1:**
> (1) Find employment outlook reports in India to determine the percentage and trend of job openings for candidates with 0-3 years of experience from 2023 to 2026, the annual number of graduates in engineering, commerce, BBA, and MBA, **and the estimated number of employees with 0-3 years' experience who switch jobs each year (attrition/job-switch rates for early-career employees).**

### 4.3 Follow-up prompt to condense the report (to run after Deep Research finishes)
> Now condense the report into one table per research step (Metric | Value | Source | Year). Mark anything estimated as ESTIMATE and anything not found as "not found".

---

## 5. Files in this folder

| File | What it is |
|---|---|
| `Mini Project.pdf` | Original assignment brief |
| `brief.md` | Brief as markdown |
| `gemini-research-prompt.txt` | Research prompt v1 |
| `process-log.md` | This log |
| `research/gemini-deep-research.md` | Gemini Deep Research report (57 sources) |
| `research/chatgpt-deep-research.md` | ChatGPT Deep Research report |
| `research/perplexity.txt` | Perplexity report |
| `research/grok.txt` | Grok report |
| `HireMate-Market-Research.md` | **Consolidated market research report**: method, findings, competitors, errors caught, implications, sources |
| `research/verified-fact-sheet.md` | **Single source of truth for numbers**: cross-checked, verified, with errors flagged |

---

## 5a. Research cross-check (19 Sep 2026)

The same prompt went to 4 AI tools. Claude compared them and checked the key numbers against original sources.

**Verified at source:** foundit 45%/28% (engineering only), Naukri JobSpeak +15% fresher hiring (Aug 2026), Apna BFSI report (98.2% of postings ≤3 yrs; collections +34%), Apna Interview Readiness Index (32% ready, 21% of freshers), NBFC 77% attrition (TeamLease via Finezza), Exponent pricing, draft Private Placement Agency Bill 2025.

**Errors caught:**
- Gemini: "45% vs 28%" presented as nationwide. It is engineering only.
- Gemini: "no vernacular AI interview tool exists". Wrong: Apna runs Hindi AI mock interviews (7.6 lakh done).
- Gemini: Final Round AI "₹199/week". Real price is ~$25–149/month.
- Perplexity: agency fee "40–50% of salary" for frontline roles. Outlier; the norm is ~8.33%.
- ChatGPT: cites the Contract Labour Act 1970 as banning placement fees. Wrong law.
- 0–3 yr job-switcher counts range from 30 lakh to 2 crore, so no number will be quoted.

**Scorecard:** Gemini had the most depth but overstated claims. Grok was the most accurate and the only one to find the Apna BFSI data and the draft bill. Perplexity gave good tables with one outlier. ChatGPT was the thinnest and cited one wrong law.

**Biggest finding:** Apna is the closest competitor, not just a job board. HireMate must be deeper (BFSI role-plays, benchmark score, growth plan), not just vernacular.

---

## 6. Next steps

1. [x] Deep Research run in Gemini with the edited plan
2. [x] Research collected from Gemini, ChatGPT, Perplexity and Grok → `research/`
3. [x] Claude cross-checked and verified the numbers → `research/verified-fact-sheet.md`
3a. [x] Consolidated research report written → `HireMate-Market-Research.md`
3b. [x] User research plan written → `user-research/user-research-plan.md` (15-question Google Form + 5 interviews: 4 job seekers, 1 hiring manager; 7 hypotheses H1–H7; Mom Test guide from Session 4) + `user-research/create-google-form.gs` (Apps Script that builds the form)
3c. [ ] Run survey (target 30+ responses) and 5 interviews → bring back for synthesis
3d. [x] Survey live (19 Sep): https://forms.gle/XBf7VDJ5VEfcx2Et9, posted on LinkedIn + DMs
3e. [x] Launch Strategy draft v1 → `HireMate-Launch-Strategy-DRAFT.md` (sections 1–3, 5–7 done; MVP validation + bonus pending research)

**Timeline to 30 Sep:**
| Date | Task |
|---|---|
| 19–25 Sep | Survey collection + 5 interviews (Sameer) · landing page + prototype (Claude) |
| 25 Sep | Survey closes → export (remove Q15 contact column) |
| 26 Sep | Synthesis → MVP section, hypothesis scorecard, final numbers |
| 27–28 Sep | Design the PDF, add the bonus section |
| 29 Sep | Final review, submit (1 day buffer) |
4. [ ] Decide the success-fee question (candidate vs employer)
5. [ ] Draft the outline, section by section
6. [ ] Write the full document → export to PDF
7. [ ] Bonus: landing page wireframe + 2–3 promo posts (`/human` on for posts)
8. [ ] Submit on LMS

## 25 Sep 2026: mentor review
- Presented the live strategy site (strategy, landing, prototype) to Arun Sir. First in the batch to present. He was very happy.
- Feedback points: to capture.

## 27 Sep 2026: role grounding (Prompt 1, ChatGPT + Gemini)
- Prompt: `user-research/ai-prompts-role-grounding.md` (Prompt 1). Outputs: `research/role-grounding-gpt.md`, `research/role-grounding-gemini.md`, each with Claude's verification table.
- Verified at source: RBI recovery-agent rules (circular 11 Oct 2022; calls 8 a.m.–7 p.m., no harassment or third-party disclosure), IIBF DRA mandatory (50/100 h), ICICI SRM programme (freshers, aptitude test + 2 interviews, ₹3.14–3.85 L; engineers/MBAs not eligible), Mahindra Finance Prarambh (Business/Collection Executive, ₹3.5 LPA), RTGS 24×7 since 14 Dec 2020.
- Errors caught: ChatGPT cited Chola MS General Insurance as Cholamandalam Finance, used a mirror RBI domain and a weak LinkedIn-profile source. Gemini gave no URLs, claimed "weekend RTGS credit" is a forgery sign (wrong), and gave 4 model answers that would break fair-practice rules (fake urgency, bundled insurance, threat-like PTP escalation, social-media tracing).
- Decision: ChatGPT for facts, Gemini for scenarios; merge into one verified bank of about 12 per role.

## 27 Sep 2026: simulated interviews (Prompt 2, ChatGPT + Gemini)
- Saved as `research/simulated-interviews-gpt.md` and `research/simulated-interviews-gemini.md`, both labelled AI-SIMULATED. Not used as evidence.
- Gemini broke the "no invented statistics" rule 3 times (60% attrition, 80% fail VLOOKUP, 100 resumes/week). Flagged, not reused.
- Both models agree on these hypotheses: being challenged (not more questions) is the missing practice; no feedback after rejection; ChatGPT/YouTube give false confidence; freshers and switchers won't pay (supports free mock + employer-paid revenue); switchers need role fit and help translating experience; credit candidates need messy case files.
- 5 new questions added to `user-research/interview-questions-short.md` (Q7–Q11) to test these in the real interviews.

## 27 Sep 2026: verified question bank + prototype v2
- `research/verified-question-bank.md`: 48 scenarios (12 per role) merged from ChatGPT and Gemini, 7 AI answers fixed, primary sources listed.
- Prototype: each round is a scenario plus one push-back; red-line check (RBI recovery rules, mis-selling, kickbacks, overriding credit policy) caps the score at 45. Tested: all roles, EN + HI, planted breaches caught, no false flag on a correct answer.
- Strategy page: "Grounded in how banks and NBFCs hire" table, the 7 AI errors callout, push-back and red-line rows in MVP features, "ChatGPT tells you answers. HireMate argues back."

## 14 Oct 2026: synthetic persona interviews (7 personas × ChatGPT + Gemini)
- Prompts: `user-research/ai-persona-prompts.md` (cards), `user-research/persona-prompts-ready.md` (one-shot, all questions built in, markdown output). The first attempt failed (all cards pasted into one chat, no questions asked), so prompts were rebuilt as one-shot.
- 14 transcripts saved verbatim in `research/persona-interviews/`; Gemini's P4 self-critique saved and turned into `synthesis-rules.md` (6 scoring rules).
- Result: `research/persona-interviews/persona-synthesis.md`. H1, H2, H3 supported; H4 changed (local language for field roles, English polish for others); H5 split (monthly 0/5, one-time conditional 3/5, someone-else-pays 5/5); H6 supported for freshers; H7 split (NBFC: per hire after 30-day retention; bank: assessment pilot only).
- Gemini invented 4 numbers (not used); 5 AI label errors corrected. Open conflict: real survey favoured monthly unlimited; synthetic candidates rejected monthly.

## 14 Oct 2026: final build
- Strategy site: persona findings folded in (H-table, B2B2C, employer fee after 30 days, 3 tiers, new MVP rows, trust caveat). Landing: ₹499 pack replaced by college/institute seats; employer box "pay only if they stay". Prototype: interviewer style (gentle/realistic/tough) and "see a stronger answer". All pushed and checked live.
- Final PDF: `final/HireMate-Launch-Strategy-Sameer-Mittimani.pdf`, 7 pages, A4, no cover, follows the brief's 6 sections; page fill 89–99% (last page 66%). Built from `final/HireMate-Launch-Strategy.html` with `final/render.py`; screenshots via `final/shots.py`.
- Still open: real interviews; submit on LMS (deadline 30 Dec 2026).

## 14 Oct 2026: PDF remade in a human format
- Rewrote the PDF as a first-person PM memo (opens with the real collections question; prose for reasoning, tables only for tiers, benchmark, phases, metrics, risks; numbered footnote sources; new "What changed while I worked on this" section). GitHub link at the top, in the bonus and in the sources. 6 pages, fill 92-99%. Old table-heavy version kept as final/HireMate-Launch-Strategy-v1-table-heavy.pdf.

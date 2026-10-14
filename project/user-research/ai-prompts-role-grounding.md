# HireMate: AI prompts for role grounding (27 Sep 2026)

Two prompts. Run each in **both ChatGPT and Gemini** (Deep Research mode if available), save the outputs in `research/`, and send them to Claude for cross-checking.

- **Prompt 1: Role requirements + scenario question bank.** Real, sourced research. It can go in the document as evidence.
- **Prompt 2: Simulated interviews.** AI personas. Use them **only to sharpen hypotheses and practise your interview**. Label them "AI-simulated" in the document, never as user interviews.

---

## Prompt 1: What Indian banks and NBFCs actually test (use Deep Research)

```
You are a hiring and training expert for Indian banks and NBFCs (non-banking financial companies). I am building HireMate, an AI mock-interview app for Indian freshers and early-career job switchers (0–3 years' experience).

Research how Indian banks and NBFCs hire for these 4 entry-level roles:
1. Collections Officer / Collection Executive (field and tele-calling, two-wheeler, personal loan, microfinance, vehicle finance)
2. Field Sales Officer / Relationship Executive (loans, credit cards, CASA, insurance cross-sell)
3. Credit Analyst / Credit Officer / Credit Underwriter (retail, MSME, vehicle loans)
4. Data Analyst / MIS Analyst in BFSI

For EACH role, give me:

A. ROLE REQUIREMENTS (from real job postings, 2025–2026)
- Typical job titles used by banks vs NBFCs (e.g. HDFC Bank, ICICI Bank, Axis, Kotak, IDFC First, Bajaj Finance, Shriram Finance, Mahindra Finance, Cholamandalam, Muthoot, L&T Finance, AU Small Finance Bank, Ujjivan)
- Minimum qualification, experience, salary range (₹ per month), languages required
- Top 5 skills or behaviours the job posting asks for
- Any regulatory knowledge expected (e.g. RBI Fair Practices Code for recovery agents, IIBF Debt Recovery Agent certification, KYC/AML, CIBIL basics, DPD buckets, FOIR)

B. THE INTERVIEW PROCESS
- Rounds (HR, branch manager, cluster head, written test, role-play), in order
- What interviewers say they are really judging in each round
- Most common reasons candidates get rejected

C. SCENARIO-BASED QUESTION BANK: 12 questions per role
Mix of: role-plays (interviewer plays the customer), situational ("what would you do if…"), and knowledge questions. For each question give:
- The question, exactly as an interviewer would say it (English, plus a Hindi version for Collections and Field Sales)
- What a strong answer covers (3–4 points)
- A common weak answer and why it fails
- Difficulty: easy / medium / hard

Must include, at minimum:
- Collections: angry customer who missed 3 EMIs; customer who lost their job; customer who says "I'll complain to RBI"; what you must NOT do under RBI recovery guidelines (calling hours, no threats, no contacting third parties)
- Field Sales: customer says another bank offers a lower rate; customer says "I'll think about it"; pitch a product in 60 seconds; a missed monthly target
- Credit: a salaried applicant with a CIBIL score of 690 and one 30+ DPD; FOIR calculation; spotting a fake salary slip or bank statement; an MSME with cash income
- Data Analyst: a disbursement drop of 20% month-on-month, how you'd investigate; SQL for collection efficiency by bucket; explaining a dashboard to a non-technical branch head

D. GAP CHECK
- Which of these skills can a candidate realistically practise with an AI voice mock interview, and which need a human?

RULES
- Cite a source (URL + date) for every factual claim: job portals (Naukri, Apna, foundit, LinkedIn Jobs, Indeed), company career pages, RBI circulars, IIBF, news. Mark anything without a source as [UNVERIFIED].
- Do not invent statistics. If you can't find a number, say so.
- India only. Keep the language simple.
- Output as tables where possible.
```

---

## Prompt 2: Simulated interviews (practice and hypotheses only)

```
I am a product management student doing user research for HireMate, an AI mock-interview app for Indian freshers and early-career switchers going into bank and NBFC roles (Collections Officer, Field Sales/Relationship Executive, Credit Analyst, Data Analyst).

Role-play 5 realistic interview participants, one at a time. Base each one on how real people in India in these roles live and talk: pay, city type, language, family pressure, job portals and WhatsApp groups, the fear of job scams. Make them different from each other:
P1: 22, B.Com fresher from a Tier-3 town, applying for collections jobs, more comfortable in Hindi
P2: 24, 1.5 years as a field sales executive at an NBFC, wants to move to a bank
P3: 23, MBA Finance fresher from a Tier-2 college, applying for credit analyst roles
P4: 25, engineer switching to data analyst in BFSI, did an online course
P5: 26, 2 years in tele-collections, burnt out, looking for any better-paying BFSI job

Then role-play 2 hiring-side people:
HR1: Branch manager at a vehicle-finance NBFC who hires field and collections staff
HR2: HR business partner at a private bank who hires for credit and analyst roles

For each JOB SEEKER, answer these questions in first person, the way that person would actually speak (casual, with Hinglish where natural, with specific stories, not polished):
1. Tell me about yourself and the job you're looking for.
2. Walk me through the last interview you attended, from the call until the result.
3. What was the hardest moment in that interview, and what did you say?
4. After the result, what did you find out about why it went that way?
5. How did you prepare for it, and have you paid for anything in your job search?
6. If you could change one thing about how you prepare for interviews, what would it be?

For each HIRING person, answer:
1. What roles do you hire for, and how many freshers do you interview?
2. Walk me through the last time you hired for one of these roles. How did you decide?
3. Think of a candidate you rejected recently. What made them fall short?
4. What happens with new hires in their first 2–3 months? Tell me about someone who left early.
5. How do you find candidates today, and what does it cost you in time or money?
6. If you could know one thing about every candidate before the interview, what would it be?

Rules:
- Be realistic, not optimistic. Include people who would NOT use or pay for an app like this, and say why.
- Include at least one person who uses ChatGPT or YouTube to prepare and thinks that's enough.
- No made-up statistics. Stories only.
- At the end, list: (a) the 5 strongest pains, (b) the 3 biggest reasons someone would NOT use HireMate, (c) 3 questions I should ask real interviewees that I'm probably not asking.
- Label the whole output clearly as "AI-SIMULATED — NOT REAL USER DATA".
```

---

## How to use the outputs

1. Save them as `research/role-grounding-gpt.md`, `research/role-grounding-gemini.md` and `research/simulated-interviews-gpt.md` / `-gemini.md`.
2. Claude cross-checks Prompt 1 at source (as with the market research). Only ✅ items go into the document, and the verified scenario questions replace the prototype's question bank.
3. From Prompt 2, only the "questions I'm not asking" and the "reasons NOT to use" go into the real interviews. None of it counts as evidence.

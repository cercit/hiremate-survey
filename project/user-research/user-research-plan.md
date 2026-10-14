# HireMate: User Research Plan

**Two methods:**

| Method | Who | How many | Purpose |
|---|---|---|---|
| **Google Form survey** | Freshers + 0–3 yr job seekers | 15 questions; aim for **30+ responses** (minimum 15) | Measure how common each problem is |
| **1:1 interviews** (phone / in person) | 4 job seekers + 1 hiring manager | **5 interviews**, 20–30 min each | Understand *why*: hear real stories in the user's own words |

**Order:** send the survey first. Its last question asks for permission to call, and that's where 3–4 of the 5 interviewees come from.

Course principle applied (Session 4): the **Mom Test**. Ask about **past behaviour, not future intentions**. Talk about their life, not our product. Don't pitch HireMate during an interview.

---

## 1. What we want to learn (hypotheses)

These come from the market research. The user research **tests** them. It isn't there to prove them.

| # | Hypothesis | Survey Q | Interview section |
|---|---|---|---|
| H1 | Freshers and 0–3 yr candidates don't prepare in any structured way; they use YouTube, friends or nothing | Q7 | C |
| H2 | Rejected candidates rarely get told why, so they repeat the same mistakes | Q9 | C, D |
| H3 | What goes wrong depends on the role: technical/case for analysts, confidence/language/role-play for field roles | Q2 × Q8 | C |
| H4 | Field-role candidates want to practise in Hindi or a regional language | Q4 | B, C |
| H5 | Candidates already spend small amounts (₹0–2,000) on job search, so micro-pricing fits | Q10, Q13 | E |
| H6 | Candidates distrust anyone asking for money "to get a job" | Q11 | E |
| H7 | Employers (NBFCs) struggle to find candidates who are ready for the job and would value a pre-screened pool | — | Hiring-manager guide |

**What would prove us wrong:** most people already use a structured prep tool, OR most get clear feedback after rejections, OR field-role candidates prefer English. Note these down if they show up.

---

## 2. Google Form survey (15 questions)

**Title:** Job Interview Experience Survey (5 minutes)
**Description:**
> Hi! I'm researching how freshers and early-career professionals prepare for job interviews. This takes about 5 minutes. No right or wrong answers. Your responses are anonymous unless you choose to share your contact at the end. Thank you!

*Tip: don't mention "HireMate" or "AI tool" in the form. That makes people answer about the product instead of their real experience.*

### Screening question (its own first section)

**Are you a student, a fresher, or someone with less than 3 years of work experience who is looking for a job now or in the next 6 months?** *(multiple choice, required)*
- Yes → continue to next section
- No → **Submit form** (set with ⋮ → "Go to section based on answer")

### Section 1: About you

**Q1. What best describes you right now?** *(single choice, required)*
- Final-year student
- Graduated, looking for my first job
- Working, less than 1 year of experience
- Working, 1–3 years of experience

**Q2. Which roles are you applying for or planning to apply for?** *(checkboxes, required)*
- Data Analyst / MIS / Business Analyst
- Credit Analyst / Credit Officer
- Field Sales / Relationship Executive (bank, NBFC, insurance)
- Collections / Recovery Officer
- Other: ____

**Q3. Where do you live?** *(single choice, required)*
- Metro city (Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Pune, Kolkata)
- Tier-2 city
- Smaller town / rural area

**Q4. In which language are you most comfortable answering interview questions?** *(single choice, required)*
- English
- Hindi
- Mix of English and Hindi
- Another regional language: ____

### Section 2: Your recent interviews

**Q5. How many job interviews have you attended in the last 6 months?** *(single choice, required)*
- 0 → *(still continue)*
- 1–2
- 3–5
- 6 or more

**Q6. How many of those interviews turned into a job offer?** *(single choice)*
- None
- 1
- 2 or more
- Still waiting for results

**Q7. How did you prepare for your most recent interview?** *(checkboxes, required)*
- Didn't prepare much
- YouTube videos / online articles
- Practised with friends, seniors or family
- College placement cell / training
- ChatGPT or another AI chatbot
- An AI mock-interview app (please name it in "Other")
- Paid coaching or paid mock interview
- Other: ____

**Q8. In your most recent interview, what was the hardest part?** *(single choice, required)*
- Technical / subject questions (Excel, SQL, finance, credit)
- Explaining my background and experience
- Nervousness / confidence
- Speaking fluently in the interview language
- Sales pitch / role-play / handling a customer situation
- Salary discussion
- Not sure: I don't know where I went wrong

**Q9. When you didn't get selected, did anyone tell you why?** *(single choice, required)*
- Yes, I got clear feedback
- I got a vague answer ("we'll get back to you", "not a fit")
- No feedback at all
- I haven't been rejected yet

### Section 3: Spending and trust

**Q10. In the last 12 months, roughly how much have you spent on your job search?** (resume writing, Naukri/LinkedIn paid plans, courses, coaching, mock interviews) *(single choice, required)*
- ₹0
- Under ₹500
- ₹500 – ₹2,000
- ₹2,000 – ₹5,000
- More than ₹5,000

**Q11. Has anyone ever asked you to pay money in exchange for getting you a job?** *(single choice, required)*
- Yes, and I paid
- Yes, but I refused
- No

**Q12. Before an interview, how confident do you usually feel?** *(scale 1–5, required)*
1 = Very nervous · 5 = Fully confident

**Q13. If you could practise a real interview for your target role and get feedback, which option would you most likely choose?** *(single choice, required)*
- Only if it's free
- Pay per practice session (around ₹99)
- A pack of sessions at a lower price per session (around ₹499 for 10)
- A monthly plan with unlimited practice
- I wouldn't use it

*This is the only "future" question. Treat the answers as a rough signal and compare them with Q10 (what people actually spent).*

**Q14. Describe one interview question you struggled with recently, or one thing you wish you had done differently.** *(paragraph, optional)*

### Section 4: Optional follow-up

**Q15. Would you be open to a 20-minute phone chat about your interview experience? If yes, share your name and phone number or email.** *(short answer, optional)*
> Your details will only be used to schedule this one call and won't be shared.

---

### How to create the form (2 options)

**Option A: automatic (5 minutes).** Use `create-google-form.gs` in this folder:
1. Go to **script.google.com** → **New project**
2. Delete the sample code, paste in everything from `create-google-form.gs`
3. Click **Save** → **Run**
4. Allow the permissions when Google asks (it's your own account)
5. Open **Execution log**: it shows the form link to share and the edit link

**Option B: manual.** Go to forms.google.com → Blank form → copy the questions above one by one.

### Where to share it

| Group | Channel |
|---|---|
| Freshers | College WhatsApp groups, placement cell contacts, LinkedIn post |
| Field-role candidates | Branch contacts, colleagues' referrals, Telegram/WhatsApp job groups |
| 0–3 yr switchers | LinkedIn, office peers (non-confidential, personal capacity only) |
| Masai classmates | Can share further, but they're mostly *not* the target user, so filter by Q1/Q2 |

**Filtering:** the screening question ends the form for anyone outside the target group, so every completed response is a target user.

---

## 3. Interview plan (5 interviews)

### Who to interview

| # | Profile | Why | Where to find |
|---|---|---|---|
| 1 | Fresher, targeting **Data Analyst** | Analyst track, English, technical | Survey Q15 / college contacts |
| 2 | Fresher or <1 yr, targeting **Field Sales / Relationship Exec** | Field track, Hindi/regional, role-play | Survey Q15 / branch referrals |
| 3 | 1–3 yrs, **Collections or Field Sales**, has switched or is switching jobs | The switcher segment + attrition story | Personal network |
| 4 | 0–3 yrs, **Credit Analyst / Credit Officer** | Credit track, case-based interview | Personal network / LinkedIn |
| 5 | **Hiring manager**: branch / sales / credit manager who interviews freshers | Employer side, tests H7 | Personal network |

⚠️ For interview 5: ask only about the **hiring process and experience**. Don't collect or record any confidential company numbers (sensitive-data rule).

### Before each call
- Book 30 minutes; the call itself runs 20–25
- Ask permission to take notes (or record)
- Have the note template (Section 5) open
- **Don't** mention HireMate or AI until the very last minute, if at all

---

## 4. Interview guide: job seekers (interviews 1–4)

The structure follows the Session 4 order: intro → context → story → pain → current solutions → open close.

### A. Intro (2 min)
> "Thanks for your time. I'm studying how people prepare for job interviews. There are no right or wrong answers. I'm here to learn from your experience, not to sell anything. Is it OK if I take notes?"

### B. Context (3 min)
1. Tell me a bit about where you are right now: studying, working, looking?
2. What kind of roles are you going for?
3. When you speak in interviews, what language do you usually use? And in daily work or life?

### C. The last interview: get the story (8–10 min) ⭐ the most important part
4. **Tell me about the last interview you went for.** How did you find it? What happened, step by step?
5. How many rounds were there? What happened in each?
6. Which question or moment was the hardest? *What did you say?*
7. How did it end? Did you hear back?
8. *(If rejected)* Did anyone tell you what went wrong? What did you think went wrong?

**Follow-up lines (use the person's own words, and don't ask "why"):**
- "You said ___. Tell me more about that."
- "What happened after that?"
- "Can you give me an example?"
- "How did that make you feel?"

### D. Preparation: current solutions (5 min)
9. What did you do to prepare for that interview?
10. Where did you learn what questions they'd ask?
11. Have you ever practised with someone before an interview? Walk me through it.
12. Have you used any app or website for interview practice? What happened when you used it? Are you still using it?

### E. Spending and trust (3 min)
13. Have you paid for anything during your job search: resume, courses, Naukri, coaching? What did you get? Was it worth it?
14. Has anyone ever asked you for money to get you a job? What happened?

### F. Close (2 min)
15. **"If you had a magic wand, what would you change about how you prepare for interviews?"**
16. Is there anything I should have asked but didn't?
17. Do you know 1–2 others in a similar situation who might talk to me?

**Don't ask:** "Would you use an app that…?", "Would you pay ₹99 for…?", "Don't you think practice helps?". These are leading or future-intent questions and get polite, useless yeses.

---

## 5. Interview guide: hiring manager (interview 5)

### A. Intro (2 min)
Same as above. Add: *"I won't ask for any company numbers or confidential information, only your experience."*

### B. Their hiring (5 min)
1. What roles do you hire for? How often do you interview freshers or people with 1–3 years?
2. Walk me through how a typical interview for a field / credit role runs.

### C. The last hiring round: the story (8 min)
3. Tell me about the last time you hired for one of these roles. How many people did you see, and how did you decide?
4. What made the ones you rejected fall short? Can you give me an example of an answer that didn't work?
5. What does a candidate who is "ready" look like to you?

### D. After hiring (5 min)
6. Of the people you hired, how did it go in the first 2–3 months?
7. When someone leaves early, what usually happened?
8. What do you currently do to find better candidates? What has worked and what hasn't?

### E. Close (3 min)
9. If you could get one thing about each candidate before the interview, what would it be?
10. Anything I should have asked?

---

## 6. Note template (one per interview)

```
INTERVIEW #__   Date: ______   Duration: ___ min   Mode: Phone / In person
Profile: Fresher / <1 yr / 1–3 yrs / Hiring manager
Target role: ___________   City type: Metro / Tier-2 / Town   Language: ______

LAST INTERVIEW STORY (their words)
- 
- 

HARDEST MOMENT / WHAT WENT WRONG
- 

HOW THEY PREPARED (tools, people, time spent)
- 

MONEY SPENT / TRUST EXPERIENCES
- 

EXACT QUOTES WORTH USING
- "…"
- "…"

⚠️ SURPRISES / THINGS THAT CONTRADICTED MY HYPOTHESES   ← write these FIRST
- 

HYPOTHESES:  H1 ☐✔ ☐✘ ☐?   H2 ☐✔ ☐✘ ☐?   H3 ☐✔ ☐✘ ☐?   H4 ☐✔ ☐✘ ☐?
             H5 ☐✔ ☐✘ ☐?   H6 ☐✔ ☐✘ ☐?   H7 ☐✔ ☐✘ ☐?
```

---

## 7. After the research: synthesis

1. **Survey:** export the responses to Google Sheets. Count % per answer and cross-tab Q2 (role) with Q8 (hardest part) and Q4 (language).
2. **Interviews:** put every quote on a sticky note (or a row in a sheet). Group them into themes (affinity mapping).
3. **Hypothesis scorecard:** mark H1–H7 as Confirmed / Rejected / Unclear, with the evidence for each.
4. **Feed into the launch document:**
   - Problem validation (MVP section) ← H1, H2, H3
   - Personas / target users ← Q1–Q4 + interviews
   - MVP features ← hardest parts (Q8) and role differences
   - Pricing ← Q10, Q13 + interview spending stories
   - Positioning / trust ← Q11, H6
   - Employer-side model ← hiring-manager interview (H7)

Bring the survey export and interview notes back here and I'll run the synthesis with you. Survey answers are anonymous opinions about job search, so they're not sensitive business data. Phone numbers from Q15 stay with you; delete that column before sharing the export.

---

## 8. Timeline

| Day | Task |
|---|---|
| Day 1 | Create the form, share it in 4–5 groups |
| Days 2–5 | Collect responses; book interviews from Q15 + your network |
| Days 3–7 | Run the 5 interviews (one a day is fine) |
| Day 8 | Synthesis → hypothesis scorecard |

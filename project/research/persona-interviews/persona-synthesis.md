# HireMate: synthetic persona interviews, combined findings (14 Oct 2026)

> **AI-SIMULATED. Not real user data.** 7 personas (5 candidates, 2 hiring-side), each run separately in ChatGPT (GPT-6) and Gemini: **14 interviews**. Candidates answered 12 questions and HR answered 7. Scored by Claude **from the transcripts, not the AIs' own labels**, using `synthesis-rules.md`. These are hypotheses to test with real people, not validation.

## Who was interviewed
| ID | Persona | Role / situation |
|---|---|---|
| P1 | Basavaraj, 22, Hubballi | B.Com fresher → field collections; Kannada-first |
| P2 | Pooja, 24, Belagavi | 1.5 yrs NBFC vehicle-loan sales → private-bank RM |
| P3 | Rohan, 23, Dharwad | MBA Finance fresher → credit analyst |
| P4 | Sneha, 25, Bengaluru | Mechanical engineer → BFSI data/MIS analyst |
| P5 | Imran, 26, Pune | 2 yrs tele-collections, burnt out → back office/KYC |
| HR1 | Mr. Kulkarni, 41 | Branch manager, vehicle-finance NBFC (field hiring) |
| HR2 | Ms. Rao, 35 | HR business partner, private bank (credit/MIS) |

## Hypothesis scorecard
✔ supports · ✖ weakens · ◐ mixed / conditional · — no signal. Each cell = ChatGPT / Gemini.

| # | Hypothesis | P1 | P2 | P3 | P4 | P5 | HR1 | HR2 | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| H1 | No realistic interview practice with feedback *(rule 2b)* | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | —/— | **Supported.** Everyone has *material* (YouTube, ChatGPT, courses); nobody has practice that pushes back and marks them. |
| H2 | Rejected candidates aren't told why | ✔/✔ | ✔/✔ | ◐/✔ | ◐/✔ | ✔/✔ | ✔/✔ | ✔/— | **Supported.** At best a one-line reason ("needs practical exposure"); both HR personas admit they don't explain. |
| H3 | Failure points differ by role | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | ✔/✔ | **Strongly supported.** Each role failed on something different (see below). |
| H4 | Prefers practising in Hindi/Kannada | ✔/✔ | ✖/✖ | ✖/✖ | —/— | ◐/✖ | —/✔ | —/— | **Changed.** Local language matters for **field roles** (P1, HR1 wants to hear the Kannada role-play). Others practise in English and want help **sounding professional in English**. |
| H5a | Candidate pays: **monthly plan** | ✖/✖ | ✖/✖ | ✖/✖ | ✖/✖ | ✖/✖ | | | **Rejected by all 5.** No one would take a monthly subscription. |
| H5b | Candidate pays: **small one-time, after a free mock** | ✖/✖ | ◐/◐ | ◐/◐ | ◐/◐ | ✖/✖ | | | **Conditional, 3 of 5** (₹99–₹200 before a specific interview). Freshers with no income (P1) and the burnt-out switcher (P5): no. |
| H5c | **Someone else pays** (college, institute, employer) | ✔/✔ | ✔/— | ✔/✔ | ✔/✔ | ✔/✔ | | | **5 of 5 name another payer**: college placement cell, training institute, employer, or free with ads. |
| H6 | Distrusts paying "to get a job" | ✔/✔ | ✖/✖ | ◐/✔ | ◐/✔ | ✔/✔ | — | — *(Gemini mislabelled)* | **Supported for freshers and low-income users** (P1 lost ₹500 to a scam); weak for employed switchers who already pay for Naukri Premium. |
| H7 | Employers would pay for screened candidates | | | | | | ◐/◐ | ✖/✖ | **Split.** NBFC branch: *maybe, per hire, only after the person stays ~30 days*, needs regional approval. Private bank: *won't pay for candidate access*; might pilot an **assessment tool** via procurement, after data-privacy review. |

### H3 detail: what each role actually failed on
| Role | Failure moment | What they needed |
|---|---|---|
| Collections fresher (P1) | Froze when the manager shouted; one version answered "company will take vehicle" (a red line) | Practise pressure without threats |
| Sales switcher (P2) | Couldn't defend her own conversion rate and ticket size | Be grilled on **her own numbers** |
| Credit fresher (P3) | Couldn't work out a kirana owner's income from a messy statement | **Case files**, worked and then marked |
| Data switcher (P4) | Passed SQL; didn't know DPD or collection efficiency | **BFSI domain** questions from the JD |
| Collections → back office (P5) | Called the old job "toxic"; couldn't put his skills in office English | **Role fit** + rephrasing into professional English |

## What changes in the product (proposed)
| # | Change | Evidence (synthetic) |
|---|---|---|
| 1 | **Push-back intensity setting** (gentle / realistic / tough) | P1 ChatGPT ("why again?"), P5 both ("I don't have the mood to get grilled at 10 PM") |
| 2 | **Show the better answer**, not just the mistake (e.g. "Don't say toxic, say…") | P1 ChatGPT, P5 Gemini |
| 3 | **Text / quiet mode + 10-minute sessions** | P4 Gemini (whispers at 11 p.m., shared flat), P5 both (no energy after shifts) |
| 4 | **Mock built from a pasted job description** | P4 ChatGPT, P3 Gemini (pastes JD into ChatGPT today) |
| 5 | **Credit case mode** (statement + slips, timed, then marked) | P3 both, HR2 both ("how they arrived at the answer") |
| 6 | **Role-fit check** for switchers (free hook) | P5 both |
| 7 | **Employer view = 30-second audio clip + red-line result + reasoning**, not a bare score | HR1 both ("a score means very little… let me hear it"), HR2 both |
| 8 | **Consent-first data sharing** with employers | HR2 both (infosec + vendor approval) |
| 9 | **"Day-in-the-life" check** for field roles, which targets early exits | HR1 both (people quit after 2 weeks in the sun), HR2 (MIS hire expected dashboards) |

## What changes in the business model (proposed)
1. **Candidate pricing:** keep **free first mock + ₹99 single mock**. Drop the ₹499 pack (0 takers in the survey, 0 here). Keep the ₹599 90-day pass but **test it**: the real survey (n=14, mostly my own network) chose "monthly unlimited", while all 5 synthetic candidates rejected monthly plans. **This conflict is open** and only real target users can settle it.
2. **B2B2C becomes a main channel, not a later one:** colleges' placement cells and training institutes buy seats (every candidate persona named one of them).
3. **Employer side:**
   - **NBFCs first:** success fee **after 30 days of retention**, not on joining.
   - **Banks later:** sell an **assessment tool** through procurement, not candidate access.
   - Sell to **regional HR**, not branch managers, who can't approve spend.

## How far to trust this
- **Synthetic bias:** several personas describe almost exactly the product being tested ("a strict manager who grills me, unlike ChatGPT"). That's the prompt echoing back. Treat any line that praises the concept as worthless; the **objections** (no monthly plan, no more shouting, "a score means nothing", data privacy) are more useful because the AIs produced them against the grain.
- **Invented numbers, not used:** despite the rule, Gemini made up 4 figures: agency fee ₹5,000 per joined hire, ₹1,500 boosted post (HR1); "20–30 hours a week screening", "40–50 freshers a month" (HR2).
- **Label errors corrected:** ChatGPT marked H1 "Weakens" for P2, P4 (it counted courses as interview practice) and H2 "Weakens" for P3, P4 (a one-line reason isn't feedback). Gemini marked H6 "Supports" for HR2 (H6 is about candidates, not HR).
- **The two AIs agreed** on every verdict above except H4 for P5 and the H2/H6 nuances, which are shown as ◐.

## Next: what real interviews must check
1. Would a real target candidate pay ₹99 once, or a 90-day pass? This settles the survey-vs-synthetic conflict.
2. Do field candidates want a tougher interviewer, or a gentler one?
3. Would one real NBFC branch manager or regional HR accept "pay only after 30 days"?

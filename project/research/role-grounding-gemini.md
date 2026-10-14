# Role grounding: Gemini output (Prompt 1), 27 Sep 2026

Source: Gemini, run by Sameer on 27 Sep 2026 with Prompt 1 (https://gemini.google.com/app/75f8984828335df2). Condensed record plus Claude's verification.

**Headline difference from ChatGPT:** Gemini's scenarios are richer and more realistic, but it **ignored the citation rule**. It cited only 2 unnamed blog posts, gave no URLs, and presented salary bands and interview rounds as "[Certain]" / "[Likely]" without sources.

## Gemini's best product insight
AI voice may misread a loud, firm collections voice as aggression, and may miss a rule breach said politely in Hindi. Tone evaluation is the highest-risk part of HireMate's scoring, so it needs human review of flagged cases.

## Role requirements (Gemini, all unsourced → treat as [UNVERIFIED])
| Role | Titles | Qualification | Salary/month | Languages | Key knowledge |
|---|---|---|---|---|---|
| Collections | Collection Executive, Tele-caller, Recovery Officer, Field DRA | 10th pass, 18+, 0–1 yr | ₹15–28k | Local language (must), basic Hindi/English | RBI calling window 8–7, no harassment, IIBF DRA, DPD buckets |
| Field Sales | Field Sales Officer, Relationship Exec, Personal Banker (outbound) | Any graduate, 0–2 yrs | ₹15–35k | Local language, basic English | KYC/AML, TRAI Do-Not-Call |
| Credit | Credit Analyst, Area Credit Manager (Nano), Field Credit Officer | B.Com/BBA/CA-Inter, 0–1 yr | ₹16–35k | English (written), local (field PD) | CIBIL, FOIR, LTV, SMA classification |
| Data | MIS Executive, Data/Business Analyst | B.Tech/BCA/B.Sc Stats, 0–1 yr | ₹25–50k | English | SQL, Excel, Power BI, DPD/collection efficiency |

## Interview rounds and rejection reasons (Gemini, unsourced)
- **Collections:** HR → collection manager → stress role-play. Judges temperament and ethics. Rejected for abusive language, not knowing the 8–7 rule, giving up.
- **Field Sales:** HR → branch/area manager → 60-sec pitch. Judges energy and rejection tolerance. Rejected for low energy, getting flustered by "no", poor grooming, can't explain a product.
- **Credit:** aptitude test → technical HR → credit manager. Judges attention to detail. Rejected for weak FOIR/LTV maths, missing discrepancies.
- **Data:** SQL/Excel test → technical → ops head. Judges accuracy and explaining to business. Rejected for failing the live test, overcomplicating.

## Question bank: scenarios worth keeping (new vs ChatGPT)
**Collections:** hospital + 3 EMIs (Hinglish); job loss "jo karna hai kar lo"; RBI threat for a 6:30 p.m. call; "wrong number" hang-up; refuses the ₹500 late fee; broken promise-to-pay ×3; brother answers the phone; phone off 10 days (skip tracing); "paid yesterday at the branch"; ICU photo asking for 6 months; **7:15 p.m. last call for your incentive**.
**Field Sales:** HDFC at 10.5% vs you at 11.5%; "I'll think about it"; CASA pitch in 60 sec; 60% of target; new PIN code, first 5 leads; insurance cross-sell after a ₹5 L loan; receptionist gatekeeper; **DSA offers files for a 1% cash cut**; hidden ₹2,000 processing fee; "your bank's service is garbage"; refuses auto-debit mandate; route planning.
**Credit:** CIBIL 690 + one 30+ DPD 8 months ago; FOIR ₹50k income, ₹15k + ₹10k EMIs = 50%; 3 signs of a forged bank statement; kirana store, no GST, 80% cash; CIBIL 780 but 95% card utilisation; Aadhaar in Bihar, living in Delhi; top-up "to pay other debts"; sales officer shouting at you; real-estate broker risk; ₹1 L salary but ₹2,000 balance on the 10th; SMA-1 vs SMA-2; LTV 85% of ex-showroom.
**Data:** 2W disbursement −20%; SQL collection efficiency for 30-DPD; explain rising First Payment Default to a 55-year-old branch manager; 30% income fields blank; INDEX-MATCH vs VLOOKUP; duplicate leads; automate a 2-hour daily report; ACH bounces vs EMI date; pivot layout; mean vs median TAT; sales 10,000 vs risk 6,000 "active customers"; masking PII for a vendor.

---

## Claude verification (27 Sep 2026)

| Item | Verdict |
|---|---|
| Sources | ❌ **Failed the prompt's rule.** 2 blog titles, no URLs, no dates. None of the salary, qualification or interview-round claims can be cited from Gemini. |
| RBI 8 a.m.–7 p.m., no harassment, no third-party disclosure | ✅ Matches the RBI circular of 11 Oct 2022 (verified in the ChatGPT file) |
| IIBF DRA 50–100 h | ✅ Verified (IIBF FAQ) |
| FOIR 25k / 50k = 50% · LTV 85% × ₹9 L = ₹7.65 L | ✅ Arithmetic correct |
| SMA-1 = 31–60 days, SMA-2 = 61–90 days overdue | ✅ Matches RBI's SMA classification |
| Forged statement sign: "weekend RTGS credits" | ❌ **Wrong.** RBI made RTGS available 24×7×365 from 14 Dec 2020 ([RBI press release](https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=50775)), so a weekend RTGS credit is normal. Drop it. |
| Forged statement sign: "no round-number UPI transactions" | ⚠️ Vague; keep only the balance check (opening + credits − debits = closing) and font/format inconsistencies |
| Stall answer: "fee waiver expires tomorrow" to create urgency | ⚠️ **Mis-selling risk** if the deadline isn't real. Rewrite as "find the real objection; mention a genuine offer end date only if one exists". |
| Insurance cross-sell framed as "loan protection" | ⚠️ Must say it's **optional**. Bundling insurance as a condition of the loan is mis-selling. Add "the loan doesn't depend on it". |
| Broken PTP: "escalate the perceived consequence… legal notice" | ⚠️ Near the line on intimidation. Rewrite as "state the real next step in the company's process (e.g. a field visit), factually, without threats". |
| Skip tracing: "review social media" | ⚠️ Privacy risk; keep only CRM, KYC/employer details and last known address |
| Missing income data: "impute median by PIN code" for a risk report | ⚠️ Debatable for credit risk. The better answer is to report with the gap flagged, not to fill it silently. |
| RBI threat Q (6:30 p.m. call) | ✅ Fine, but add: RBI also bars *persistent* calling, so the candidate shouldn't argue legality; stay calm and log it |
| Salary bands, qualifications, rounds | ⚠️ [UNVERIFIED]; they broadly agree with ChatGPT's sourced examples, but don't cite Gemini for them |

**Verdict:** ChatGPT for facts, Gemini for scenarios. Use Gemini's scenarios in the question bank **after the 6 fixes above**. Cite regulatory facts only from RBI/IIBF.
**Errors caught this round:** Gemini 1 factual error (weekend RTGS), 4 compliance-unsafe model answers, uncited claims. ChatGPT 1 wrong-company citation, 1 mirror domain, 1 weak source.

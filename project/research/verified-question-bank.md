# HireMate verified question bank (v1, 27 Sep 2026)

Merged from ChatGPT and Gemini (Prompt 1, see `ai-role-grounding/`), then checked by Claude. **48 questions, 12 per role.** Source tags: **G** = ChatGPT, **Gm** = Gemini, **fixed** = the AI's model answer was corrected. Regulatory points cite primary sources only (bottom of the page).

These are HireMate practice scenarios, not verbatim questions from a named bank. ★ = used in the live prototype (as a scenario or push-back).

---

## 1. Collections Officer

| # | Scenario | A strong answer covers | Red line (fails the round) | Src |
|---|---|---|---|---|
| 1 ★ | Tell me about yourself; why collections? → *push:* "Customers will shout daily and you'll ride in sun and rain. Why won't you quit in month one?" | Realistic view of the field job; handling pressure; a real reason to stay; a past example | — | G, Gm |
| 2 ★ | "I lost my job, missed 3 EMIs, no money. Why do you keep calling?" | Empathy; what he can actually pay (family income, new job); company options; exact amount + date | Threats (police, seizure), bringing in family or neighbours | G, Gm, fixed |
| 3 ★ | → *push:* "Stop calling! I'll complain to RBI." | Calm; accept his right to complain; agree a time/channel; log it | "Go ahead, complain" | G, Gm |
| 4 ★ | Manager: "Critical account, call at 7:30 a.m. tomorrow." | Calls only 8 a.m.–7 p.m.; tell the manager politely; call at 8 or visit | Agreeing to call at 7:30 | G |
| 5 ★ | → *push:* the customer's brother answers, "What's this about?" | Don't disclose the loan; leave name + callback; polite | Mentioning the loan, EMI or dues | G, Gm |
| 6 | "It's 7:15 p.m. One call left for your incentive. Do you call?" | No; schedule for 8 a.m.; compliance over target | Calling "just this once" | Gm |
| 7 | "I'll pay the EMI but not the ₹500 late fee." | Explain the charge per policy; don't waive without authority; aim for full clearance; escalate a waiver request if genuine | Waiving on your own | Gm, fixed |
| 8 | Customer has broken 3 promises-to-pay this month | Name the pattern; state the real next step in the process (e.g. field visit) factually; firm date | Threat-like escalation ("legal notice" as intimidation) | Gm, **fixed** |
| 9 | Phone off for 10 days: how do you trace him? | Alternate numbers in CRM, KYC and employer details, last known address, supervisor | Social-media stalking or messaging contacts | Gm, **fixed** |
| 10 | "I paid yesterday at the branch." / system shows overdue | Ask for receipt/UTR; verify in system; don't demand double payment | "System says overdue, pay again" | G, Gm |
| 11 | 100 overdue accounts, time for 20 visits. Prioritise. | DPD bucket, amount, contactability, promise-to-pay, route | "Nearest first" | G |
| 12 | Explain DPD and buckets to a beginner | Days past due; buckets (e.g. 1–30, 31–60, 61–90); why priority changes | "Default percentage" | G |

## 2. Field Sales / Relationship Executive

| # | Scenario | A strong answer covers | Red line | Src |
|---|---|---|---|---|
| 1 ★ | Sell me this two-wheeler loan in 60 seconds | Customer benefit; EMI/tenure; quick approval + documents; clear ask | — | G, Gm |
| 2 ★ | → *push:* "I'll think about it." | Ask what's holding them back; clear the doubt now; fix a follow-up | Invented deadline ("offer ends today") | G, Gm, **fixed** |
| 3 ★ | "Another bank offers 10.5%, you're at 11.5%." | Acknowledge; total cost (fees, pre-closure); service speed; ask for decision | Running down the competitor without facts | G, Gm |
| 4 ★ | → *push:* "Is insurance compulsory with this loan?" | It's optional, and the loan doesn't depend on it; what it covers; cost | Saying it's compulsory | Gm, **fixed** |
| 5 ★ | 25th of the month, 8 of 20 files | Daily numbers; lead sources; close ready files first; tell manager early | — | G, Gm |
| 6 ★ | → *push:* DSA offers 10 files for 1% of your incentive in cash | Refuse; report; it's a kickback | Accepting or negotiating | Gm |
| 7 | "I don't want to share my documents." | Why each is needed (KYC); privacy; no pressure | "No documents, no loan" with pressure | G |
| 8 | Customer wants a product they aren't eligible for | Explain eligibility; suggest an alternative | "I'll somehow process it" | G |
| 9 | "You didn't tell me about the ₹2,000 processing fee! Cancel!" | Apologise; explain transparently; escalate a waiver only if authorised | Blaming back office | Gm |
| 10 | New PIN code, zero presence: first 5 leads? | Catchment mapping; local businesses; referrals; branch/digital | "Wait for marketing leads" | G, Gm |
| 11 | Customer refuses the auto-debit mandate | Explain it avoids missed dates; SMS before debit; respect the choice | "It's just a formality" | Gm |
| 12 | Why sales? | Goals, customer interaction, resilience | "Salary is good" | G |

## 3. Credit Analyst

| # | Scenario | A strong answer covers | Red line | Src |
|---|---|---|---|---|
| 1 ★ | CIBIL 690, one 30+ DPD 8 months ago. Approve? | Not score alone; reason + recency; income/FOIR; clear next step | — | G, Gm |
| 2 ★ | → *push:* salary slip ₹60k vs bank credit ₹42k | Don't ignore the gap; deductions vs edited slip; verify (Form 16, employer); use the lower figure | Using ₹60k unverified | G |
| 3 ★ | ₹45k income, ₹12k EMI, new EMI ₹14k. Approve? | FOIR ≈ 58%; vs policy (~50%); fix: down payment/co-applicant; decision | — | G, Gm |
| 4 ★ | → *push:* sales head says "top dealer, just approve" | Policy first; respectful; route to yes; exceptions in writing | Approving under pressure | G, Gm |
| 5 ★ | Kirana owner, ₹3 L, no GST, 80% cash | Shop visit/PD; UPI, supplier bills; conservative income; conditional decision | "Reject, no GST" | Gm |
| 6 ★ | → *push:* one-line recommendation | Clear call; main risk; condition | — | G |
| 7 | 3 signs a bank statement may be forged | Balance maths (opening + credits − debits = closing); font/format inconsistencies; mismatch with salary slip or employer | *(Gemini's "weekend RTGS credit" is not a sign: RTGS runs 24×7)* | Gm, **fixed** |
| 8 | CIBIL 780 but 95% card utilisation | Credit-hungry signal; recent enquiries; FOIR | "780, approve" | Gm |
| 9 | Aadhaar in Bihar, living in Delhi | Current-address proof or field verification per KYC rules; migrants are normal customers | "Reject" | Gm |
| 10 | Top-up "to pay off other debts" | Debt-spiral risk; strict FOIR; pay other lenders directly | "Existing customer, approve" | Gm |
| 11 | SMA-1 vs SMA-2 | SMA-1 = 31–60 days overdue; SMA-2 = 61–90 days | — | Gm |
| 12 | Car ₹10 L on-road, ₹9 L ex-showroom, 85% LTV on ex-showroom. Customer asks ₹8.5 L | Max ₹7.65 L; ask for a higher down payment | 85% of on-road | Gm |

## 4. Data Analyst (BFSI)

| # | Scenario | A strong answer covers | Red line | Src |
|---|---|---|---|---|
| 1 ★ | 2W disbursement −20% MoM | Validate data; cut by branch/dealer/product; funnel; season | — | G, Gm |
| 2 ★ | → *push:* "Forget the dashboard. First two cuts, and why." | Two specific cuts; a funnel stage; a reason each | — | sim. interviews |
| 3 ★ | Collection efficiency by DPD bucket, last month (SQL) | SUM(collected)/SUM(due); GROUP BY bucket; month filter | — | G, Gm |
| 4 ★ | → *push:* rows with amount_due = 0 | Divide-by-zero; NULLIF/exclude; ask why | — | new |
| 5 ★ | Explain rising First Payment Default to a branch head | Plain definition; "out of 100"; what it means for sourcing; next step | — | Gm |
| 6 ★ | → *push:* "Your numbers are wrong." | Not defensive; check definitions; show the accounts | "Data can't be wrong" | G |
| 7 | Leads +20%, disbursement flat | Funnel; lead quality; approval rate; TAT | "Marketing is doing well" | G |
| 8 | Sales says 10,000 active customers, risk says 6,000 | Different definitions; agree one | "Someone's lying" | Gm |
| 9 | 30% of income fields blank; report due today | Report with the gap clearly flagged; fix at source; don't silently impute for risk decisions | Deleting rows or quietly filling them | Gm, **fixed** |
| 10 | ACH bounces vs EMI date | Group by EMI date; compare with salary credit days; show evidence | Guessing | Gm |
| 11 | Report due in 15 min, data not refreshed | Say so; last validated data with a date; ETA | Editing numbers | G |
| 12 | Sending a sample dataset to a vendor | Mask PII (names, phones, PAN) | "Password-protect the file" only | Gm |

---

## Primary sources for the regulatory points
- RBI, *Review of instructions on recovery agents*, DoR.SIG.FIN.REC.75/26.03.001/2022-23, 11 Oct 2022: no intimidation or harassment, no intruding on family/friends' privacy, no calls before 8 a.m. or after 7 p.m. https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12378&Mode=0
- IIBF, Debt Recovery Agent certification: mandatory for recovery agents; 50 h training (graduates) / 100 h (undergraduates). https://www.iibf.org.in/faq
- RBI, RTGS 24×7×365 from 14 Dec 2020. https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=50775
- SMA classification (SMA-0 up to 30, SMA-1 31–60, SMA-2 61–90 days) follows RBI's prudential norms. Check the current master circular before quoting it in the document.

## What the AI got wrong (fixed above)
1. Gemini: "weekend RTGS credits" as a forgery sign. Wrong, RTGS is 24×7.
2. Gemini: fake urgency ("fee waiver expires tomorrow"). This is mis-selling.
3. Gemini: insurance pitched without saying it's optional. This is a bundling risk.
4. Gemini: "escalate the perceived consequence… legal notice". This is near intimidation.
5. Gemini: "review social media" to trace a customer. This is a privacy risk.
6. Gemini: silently imputing missing income for a risk report.
7. ChatGPT: cited an insurance company (Chola MS) as Cholamandalam Finance; used a mirror RBI domain; cited a personal LinkedIn profile.

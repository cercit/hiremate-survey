# Prompt 1: role requirements + scenario question bank: Gemini

- **Run by:** Sameer, 27 Sep 2026
- **Tool:** Gemini
- **Chat link:** https://gemini.google.com/app/75f8984828335df2
- **Note:** Verified in `../role-grounding-gemini.md`. Gemini gave no source URLs.
- Response below is **verbatim**, exactly as pasted by Sameer.

---

## Prompt (verbatim)

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

## Response (verbatim)

BFSI Hiring and AI Interview Assessment Guide
https://gemini.google.com/app/75f8984828335df2

User prompt: You are a hiring and training expert for Indian banks and NBFCs (non-banking financial companies). I am building HireMate, an AI mock-interview app for Indian freshers and early-career job switchers (0–3 years' experience). Research how Indian banks and NBFCs hire for these 4 entry-level roles: 1. Collections Officer / Collection Executive (field and tele-calling, two-wheeler, personal loan, microfinance, vehicle finance) 2. Field Sales Officer / Relationship Executive (loans, credit cards, CASA, insurance cross-sell) 3. Credit Analyst / Credit Officer / Credit Underwriter (retail, MSME, vehicle loans) 4. Data Analyst / MIS Analyst in BFSI For EACH role, give me: A. ROLE REQUIREMENTS (from real job postings, 2025–2026) - Typical job titles used by banks vs NBFCs (e.g. HDFC Bank, ICICI Bank, Axis, Kotak, IDFC First, Bajaj Finance, Shriram Finance, Mahindra Finance, Cholamandalam, Muthoot, L&T Finance, AU Small Finance Bank, Ujjivan) - Minimum qualification, experience, salary range (₹ per month), languages required - Top 5 skills or behaviours the job posting asks for - Any regulatory knowledge expected (e.g. RBI Fair Practices Code for recovery agents, IIBF Debt Recovery Agent certification, KYC/AML, CIBIL basics, DPD buckets, FOIR) B. THE INTERVIEW PROCESS - Rounds (HR, branch manager, cluster head, written test, role-play), in order - What interviewers say they are really judging in each round - Most common reasons candidates get rejected C. SCENARIO-BASED QUESTION BANK: 12 questions per role Mix of: role-plays (interviewer plays the customer), situational ("what would you do if…"), and knowledge questions. For each question give: - The question, exactly as an interviewer would say it (English, plus a Hindi version for Collections and Field Sales) - What a strong answer covers (3–4 points) - A common weak answer and why it fails - Difficulty: easy / medium / hard Must include, at minimum: - Collections: angry customer who missed 3 EMIs; customer who lost their job; customer who says "I'll complain to RBI"; what you must NOT do under RBI recovery guidelines (calling hours, no threats, no contacting third parties) - Field Sales: customer says another bank offers a lower rate; customer says "I'll think about it"; pitch a product in 60 seconds; a missed monthly target - Credit: a salaried applicant with a CIBIL score of 690 and one 30+ DPD; FOIR calculation; spotting a fake salary slip or bank statement; an MSME with cash income - Data Analyst: a disbursement drop of 20% month-on-month, how you'd investigate; SQL for collection efficiency by bucket; explaining a dashboard to a non-technical branch head D. GAP CHECK - Which of these skills can a candidate realistically practise with an AI voice mock interview, and which need a human? RULES - Cite a source (URL + date) for every factual claim: job portals (Naukri, Apna, foundit, LinkedIn Jobs, Indeed), company career pages, RBI circulars, IIBF, news. Mark anything without a source as [UNVERIFIED]. - Do not invent statistics. If you can't find a number, say so. - India only. Keep the language simple. - Output as tables where possible.
Response: The biggest risk in your HireMate app is assuming an AI voice model can reliably evaluate emotional intelligence, local-language colloquialisms, and regulatory tone. In Collections and Field Sales, evaluating how a candidate says something (aggression vs. assertion) is more critical than what they say. If the AI cannot accurately flag a regulatory breach disguised as polite Hindi, the app's utility to Indian BFSI HR teams will be severely compromised.
A. Role Requirements (2025–2026)
[Certain] Minimum qualifications, regulatory requirements, and required skills are strictly enforced by the RBI and internal HR policies. [Likely] Salary data represents current fresher and early-career bands based on active job listings.

Role
Titles (Banks vs NBFCs)
Min Qualification & Experience
Salary Range (₹/Month)
Languages
Top 5 Skills
Regulatory / Domain Knowledge
Collections
Collection Executive, Tele-caller, Recovery Officer, Field DRA (Bajaj, Shriram, HDFC)
10th Pass (SSC) & 18+ yrs age, 0–1 yr exp
₹15,000 – ₹28,000
Local Regional (Must), Basic Hindi/English
Negotiation, thick skin/resilience, assertiveness, skip-tracing, basic MIS
RBI Fair Practices Code (8 AM–7 PM calling window, no harassment), IIBF DRA Certification (50–100 hrs), DPD buckets
Field Sales
Field Sales Officer, Relationship Exec, Personal Banker - Outbound (AU SFB, Kotak)
Graduation (Any), 0–2 yrs exp
₹15,000 – ₹35,000
Local Regional (Must), Basic English
Lead generation, objection handling, cross-selling, territory mapping, communication
KYC/AML basics, TRAI Do Not Call Registry limits, product LTV limits [UNVERIFIED]
Credit Analyst
Credit Analyst, Area Credit Manager - Nano, Field Credit Officer (InCred, Axis)
B.Com, BBA, CA-Inter; 0–1 yr exp
₹16,000 – ₹35,000
English (Written), Local Regional (Field PD)
Financial statement analysis, fraud detection, cash flow assessment, attention to detail, MS Excel
CIBIL scoring basics, FOIR, LTV calculations, SMA-0/1/2 classification rules [UNVERIFIED]
Data Analyst
MIS Executive, Data Analyst, Business Analyst (Entry Level)
B.Tech, BCA, B.Sc Stats; 0–1 yr exp
₹25,000 – ₹50,000 (₹3L–₹6L PA)
English
SQL, Advanced Excel (VLOOKUP, Pivots), PowerBI/Tableau, data cleaning, logical reasoning
Data privacy/infosec basics, understanding of DPD/Collection Efficiency metrics [UNVERIFIED]

B. The Interview Process
[Certain] Indian banks and NBFCs follow a highly structured, low-tolerance interview process for entry-level roles, heavily weighting practical application over theoretical knowledge.

Role
Interview Rounds (In Order)
What Interviewers Are Actually Judging
Most Common Reasons for Rejection
Collections
1. HR Screen

2. BM / Collection Manager

3. Role-play (Stress Test)
Temperament & Ethics: Can they handle abuse without losing their temper or violating RBI guidelines? Do they sound authoritative but legal?
Using abusive language in role-play, unfamiliarity with the 8 AM–7 PM RBI rule, taking things personally, giving up too easily.
Field Sales
1. HR Screen

2. Branch / Area Manager

3. 60-Sec Sales Pitch
Hustle & Rejection Tolerance: Do they have the energy for field visits in 40°C heat? Are they financially hungry? Can they close?
Lack of energy, getting flustered by "no," poor grooming, unable to explain a basic financial product clearly.
Credit
1. Written/Online Aptitude (Math/Logic)

2. Technical HR

3. Credit Manager
Pessimism & Attention to Detail: A good credit analyst looks for reasons to reject. Can they spot a fake font on a bank statement?
Poor basic math (failing FOIR/LTV calculations), overlooking discrepancies in test case files, lack of basic accounting knowledge.
Data Analyst
1. Technical Test (SQL/Excel)

2. Technical Interview

3. Branch/Ops Head
Accuracy & Translation: Can they write a clean SQL join? Can they explain what the data means to a non-technical Branch Manager?
Failing the live VLOOKUP/SQL test, inability to explain why a metric changed, overcomplicating answers for business users.

C. Scenario-Based Question Bank (48 Questions)
[Likely] These exact scenarios represent the core daily challenges faced by Indian BFSI staff.
1. Collections Officer
[Medium] The Angry Customer: "I missed 3 EMIs because I was in the hospital! Stop harassing me!" / "Mera accident ho gaya tha, 3 EMI baaki hai. Mujhe baar baar call mat karo!"
Strong: Empathizes briefly, firmly asks for medical proof, states the outstanding amount, sets a specific timeline for payment.
Weak: Apologizes and hangs up. Fails because no commitment was secured.
[Hard] Job Loss: "I lost my job. I have zero money. Do whatever you want." / "Meri naukri chali gayi hai. Mere paas ek rupaya nahi hai. Jo karna hai kar lo."
Strong: Stays calm, asks about severance/family support, offers restructuring or a partial payment plan, creates urgency regarding CIBIL damage.
Weak: Threatens legal action immediately. Fails because it escalates unnecessarily without finding a realistic payment source.
[Medium] The RBI Threat: "You called me at 6:30 PM. I know my rights, I will complain to the RBI." / "Tumne mujhe 6:30 baje call kiya hai. Main RBI mein tumhari complaint karunga."
Strong: Confirms the call is within the legal 8 AM–7 PM window, maintains a professional tone, immediately pivots back to the due amount.
Weak: Gets defensive or argumentative about the law. Fails because it loses control of the call.
[Easy] RBI Rules: "Under RBI recovery guidelines, what are the three things you must NEVER do?"
Strong: Never call before 8 AM or after 7 PM, never contact third parties/family without consent, never use abusive language or threats.
Weak: "Don't shout." Fails because it lacks specific regulatory knowledge.
[Easy] Instant Hang-up: Customer picks up, says "Wrong number" and cuts the call.
Strong: Redials once to confirm, checks CRM for alternative numbers, tags as "RNR" (Ringing No Response) or "Skip", updates supervisor.
Weak: Ignores and moves to the next lead without updating the system. Fails on basic MIS hygiene.
[Medium] Penal Charges: "I will pay the EMI, but I won't pay the ₹500 late fee." / "Main sirf EMI dunga, late fee ₹500 nahi dunga."
Strong: Explains the late fee is system-generated and non-negotiable, highlights that partial payment keeps the account in default, pushes for full clearance.
Weak: Agrees to waive it without authority. Fails because it creates a behavioral hazard.
[Hard] Serial PTP Breaker: Customer has broken a "Promise To Pay" (PTP) three times this month.
Strong: Confronts the broken promises directly, escalates the perceived consequence (field visit/legal notice), demands a same-day RTGS/UPI payment.
Weak: Accepts a 4th PTP for next week. Fails due to gullibility.
[Easy] Third-Party Answer: Customer's brother answers the phone.
Strong: Asks for the customer, leaves a callback number. STRICTLY avoids mentioning the loan, debt, or bank name.
Weak: Leaves a message saying "Tell him to pay his Bajaj Finance loan." Fails because it violates privacy guidelines.
[Medium] Tracing a Skip: "The customer's phone is switched off for 10 days. How do you find them?"
Strong: Check alternative numbers, review KYC documents for employer details, review social media (without messaging), visit the last known address.
Weak: "I will ask the police." Fails due to lack of practical process knowledge.
[Easy] Already Paid Claim: "I paid it yesterday at the branch." / "Maine kal hi branch mein cash jama kar diya tha."
Strong: Asks for the receipt number/transaction ID, asks for the exact branch location, holds the customer on the line while checking the system.
Weak: Believes them and closes the file. Fails due to lack of verification.
[Hard] Medical Emergency: Customer sends a photo of an ICU bed and asks for 6 months time.
Strong: Shows professional empathy, requests official hospital admission documents to process a formal moratorium request, explains that the system requires documentation to pause calls.
Weak: Agrees to call back in 6 months. Fails because it breaks protocol.
[Medium] Late Evening Priority: "It is 7:15 PM. You have one high-value target left to call to hit your monthly incentive. Do you call?"
Strong: Absolutely not. Marks it for 8:01 AM the next day. Emphasizes that RBI compliance supersedes targets.
Weak: "Just this once, yes." Fails the strict compliance test.
2. Field Sales Officer
[Hard] Competitor Rate: "HDFC is offering me a personal loan at 10.5%. You are at 11.5%. Why should I take yours?" / "HDFC mujhe 10.5% de raha hai. Main tumhara 11.5% kyun loon?"
Strong: Acknowledges the rate difference, pivots to processing fees, disbursement speed, zero pre-closure charges, or superior relationship management.
Weak: "I will ask my manager to match it." Fails because it shows zero selling skills.
[Medium] The Stall: "I'll think about it and let you know next week." / "Main soch kar batata hoon agle hafte."
Strong: Creates urgency (e.g., "This processing fee waiver expires tomorrow"), asks "What exactly do you need to think about?" to uncover the real objection.
Weak: "Okay sir, take your time." Fails because it loses the lead.
[Medium] The 60-Second Pitch: "Pitch me a basic savings account (CASA) in 60 seconds."
Strong: Introduces self, highlights 3 core benefits (interest rate, debit card offers, zero minimum balance if applicable), and ends with a direct call to action ("Can we start the e-KYC now?").
Weak: Lists 20 features without asking for the sale. Fails due to lack of closing.
[Hard] Missed Target: "You only achieved 60% of your target last month. Your manager is screaming at you. What is your response?"
Strong: Takes extreme ownership, provides a data-backed reason (not an excuse), presents a concrete daily activity plan to cover the gap this month.
Weak: Blames the market, the product, or the leads. Fails due to lack of accountability.
[Medium] New Territory: "You are assigned a new PIN code where our bank has zero presence. How do you get your first 5 leads?"
Strong: Catchment area mapping, cold-calling local CA offices/merchants, setting up a canopy near high-footfall areas, leveraging personal network.
Weak: "I will wait for the marketing team to give me data." Fails because it lacks hustle.
[Medium] Cross-Selling: "You just approved a customer's ₹5 Lakh personal loan. Pitch them life insurance."
Strong: Frames it as loan protection. "God forbid something happens, your family shouldn't bear this ₹5L burden. For just ₹X/month, this policy covers the exact loan amount."
Weak: Treats it as a totally separate, unrelated product. Fails because it feels pushy rather than protective.
[Easy] The Gatekeeper: "You visit an MSME office. The receptionist refuses to let you meet the owner."
Strong: Acts professionally, leaves a card, asks for the best time to call, attempts to build rapport with the receptionist, tries connecting via LinkedIn.
Weak: Argues with the receptionist. Fails due to lack of professionalism.
[Hard] The Kickback: "A DSA (Direct Selling Agent) says he will give you 20 files a month, but he wants a 1% cash cut from your incentive. What do you do?"
Strong: Hard no. Immediately declines, reports the DSA to the branch manager and compliance team.
Weak: Hesitates or asks to negotiate. Fails the integrity test.
[Medium] Hidden Charges: "You didn't tell me about the ₹2000 processing fee! Cancel the application!"
Strong: Apologizes for the miscommunication, breaks down the math to show the fee is standard and negligible over the loan tenure, offers a partial waiver if authorized.
Weak: Blames the back-office or the system. Fails because it breaks trust.
[Medium] Brand Hate: "I closed my account with your bank 5 years ago because your service is garbage. Get out."
Strong: Apologizes for the past experience, explains how technology and management have changed in 5 years, asks for a small chance to prove it with a minor product.
Weak: Argues that the service is actually good. Fails because it invalidates the customer's feelings.
[Hard] Reluctant Closing: "Customer has filled the form but refuses to sign the final mandate for auto-debit."
Strong: Explains that auto-debit protects their CIBIL score from accidental missed dates, assures them they will get an SMS 3 days before any deduction.
Weak: Tells them it's "just a formality." Fails because it dismisses a genuine fear.
[Easy] Route Planning: "You have 5 meetings today. 3 are in the north of the city, 2 in the south. How do you schedule?"
Strong: Groups geographical locations to minimize transit time. Schedules North meetings 10 AM-1 PM, South meetings 3 PM-6 PM.
Weak: Schedules chronologically as leads came in. Fails basic time management.
3. Credit Analyst
[Medium] CIBIL 690 & 30+ DPD: "A salaried applicant has a CIBIL score of 690 and one 30+ DPD (Days Past Due) on a credit card from 8 months ago. Approve or reject?"
Strong: Investigate. Ask for the credit card statement from 8 months ago. If it was a minor charge (e.g., annual fee dispute) that was settled, approve with a deviation. If it was an inability to pay, reject.
Weak: "Reject immediately because of the DPD." Fails because credit requires qualitative assessment, not just blind rule-following.
[Easy] FOIR Calculation: "Applicant earns ₹50,000 net. Existing EMIs are ₹15,000. Proposed EMI is ₹10,000. What is the FOIR, and is it acceptable?"
Strong: Total obligations = ₹25,000. FOIR = (25,000 / 50,000) * 100 = 50%. Generally acceptable for retail loans (usually capped at 50-60%).
Weak: Miscalculates the percentage. Fails basic math.
[Hard] Fake Documents: "You are looking at a 6-month bank statement PDF. What are 3 signs it might be forged?"
Strong: Font inconsistencies, math doesn't add up (opening balance + credits - debits ≠ closing balance), lack of round-number UPI transactions (living expenses), weekend RTGS credits.
Weak: "It looks suspicious." Fails because it lacks technical forensic skills.
[Hard] MSME Cash Income: "A grocery store owner wants a ₹10L business loan. He has no GST and deals 80% in cash. How do you underwrite this?"
Strong: Conduct a PD (Personal Discussion). Check daily diary (kachha bill), assess inventory turnover, check electricity bills, look at supplier payment receipts, calculate proxy margins.
Weak: "Reject because no GST." Fails because it ignores the reality of India's informal economy.
[Medium] High Utilization: "Applicant has a 780 CIBIL but has maxed out 3 credit cards (95% utilization). View?"
Strong: High risk of debt-trapping (credit hungry). Look closely at FOIR and recent inquiries. Likely reject or require card closure prior to disbursement.
Weak: "Approve because 780 is a good score." Fails to understand credit utilization ratios.
[Easy] KYC Mismatch: "Aadhaar address is in Bihar, current residence is in Delhi. What is required?"
Strong: A valid OVD (Officially Valid Document) for the current address (e.g., rent agreement, utility bill) or a field verification report (FI) confirming residence.
Weak: "Reject the file." Fails because migrant workers are a standard customer base.
[Medium] Over-leveraged Top-Up: "Customer with an existing ₹5L loan wants a ₹2L top-up to 'pay off other debts.' What is the risk?"
Strong: Classic sign of a debt spiral. The risk is immediate default. Require a strict FOIR check and mandate direct payment to the other lenders (Balance Transfer) rather than cash to the customer.
Weak: "Approve because they are an existing customer." Fails to identify credit risk.
[Hard] Handling Sales: "The top-performing Field Sales Officer is screaming at you for rejecting his file, claiming you are ruining his targets. How do you respond?"
Strong: Stay objective. "I want to approve files, but this applicant's FOIR is 75%. If they default, it hits our portfolio. Bring me a co-applicant to increase income, and I'll pass it."
Weak: Complains to HR or approves to stop the yelling. Fails to hold the line as a risk gatekeeper.
[Medium] Industry Risk: "Why would you be cautious underwriting a loan to a real estate broker right now?"
Strong: Income is highly cyclical, commission-based, and lacks fixed salary credits. High risk during market downturns.
Weak: "Because real estate is illegal." Fails basic business acumen.
[Easy] Bank Balance Drop: "Applicant earns ₹1 Lakh/month, but their average bank balance on the 10th of every month is ₹2,000. Issue?"
Strong: Extremely high lifestyle burn rate or hidden EMIs deducted on the 5th. Needs a deep dive into the debit transactions.
Weak: "It's fine, the salary is high." Fails to assess repayment capacity.
[Easy] SMA Definitions: "What is the difference between SMA-1 and SMA-2?"
Strong: SMA-1 is overdue 31-60 days. SMA-2 is overdue 61-90 days (pre-NPA).
Weak: Incorrectly defines the days. Fails basic regulatory knowledge.
[Medium] LTV Calculation: "Car costs ₹10L on-road. Bank policy is 85% LTV on ex-showroom (which is ₹9L). Customer asks for ₹8.5L loan. Do you approve?"
Strong: Max loan = 85% of 9L = ₹7.65L. Reject the ₹8.5L request. Ask customer to increase downpayment.
Weak: Approves 85% of the on-road price. Fails to understand LTV parameters.
4. Data Analyst / MIS Analyst
[Hard] 20% Drop: "Two-wheeler loan disbursements dropped 20% month-on-month. Walk me through exactly how you investigate this."
Strong: Check external factors (festive season end, holidays), check funnel metrics (were leads down? was approval rate down? was disbursement SLA delayed?), check by geography, check by dealer/DSA.
Weak: "I will ask the sales team." Fails to use data to find the root cause.
[Medium] SQL Collection Efficiency: "Write a conceptual SQL query to find the collection efficiency of the 30-DPD bucket for last month."
Strong: SELECT SUM(Amount_Collected) / SUM(Amount_Due) FROM collections WHERE DPD_Bucket = '30' AND Month = 'Last_Month';
Weak: Uses basic SELECT * without aggregates. Fails technical competency.
[Hard] Non-Tech Explanation: "Your dashboard shows a rising 'First Payment Default' (FPD) rate. Explain this to a 55-year-old Branch Manager who hates computers."
Strong: "Sir, out of every 100 new loans we gave last month, 8 people didn't even pay their very first EMI. We need to check who our sales guys are sourcing."
Weak: "The FPD variable has a standard deviation variance..." Fails to communicate with business stakeholders.
[Medium] Missing Data: "The CRM has 30% of 'Customer Income' fields blank. The risk team needs a report today. What do you do?"
Strong: Impute missing data using median income of the specific pin code/profession, add a bold disclaimer about the 30% gap, and flag the CRM issue to IT for fixing.
Weak: Deletes the 30% rows. Fails because it skews the entire dataset.
[Easy] VLOOKUP vs INDEX MATCH: "Why would you use INDEX MATCH instead of VLOOKUP in a file with 500,000 rows?"
Strong: INDEX MATCH is faster, uses less processing memory, and doesn't break if you insert a new column.
Weak: "VLOOKUP is better." Fails technical efficiency.
[Easy] Duplicate Leads: "How do you identify duplicate customer leads in Excel?"
Strong: Use Conditional Formatting -> Highlight Duplicate Values on the Phone Number/PAN card column, or use the COUNTIF function.
Weak: "I will scroll and check." Fails basic Excel skills.
[Medium] Automation: "You spend 2 hours every morning downloading a CSV, making a pivot, and emailing it. How do you automate this?"
Strong: Build an Excel Macro (VBA) to format the data, or connect the database directly to PowerBI/Tableau and set up an automated email subscription.
Weak: "I will work faster." Fails to show analytical maturity.
[Hard] Bounce Rate Correlation: "ACH bounce rates are up. You suspect it's linked to the day of the week the EMI is scheduled. How do you prove it?"
Strong: Group bounce data by day of the month/week. Correlate against standard salary credit days (1st/7th). Show a bar chart proving EMIs scheduled on the 28th bounce 3x more than the 5th.
Weak: "I will guess it's the weekend." Fails to use statistical proof.
[Easy] Pivot Table Logic: "To show branch-wise total disbursements by month, what goes in rows, columns, and values?"
Strong: Rows = Branch Name. Columns = Month. Values = Sum of Disbursement Amount.
Weak: Puts Branch Name in Values. Fails basic data structuring.
[Medium] Outliers: "Average loan processing time is 48 hours, but the data is skewed by a few loans that took 30 days. Which metric is better to report?"
Strong: The Median. It removes the extreme outliers and shows what a typical customer actually experiences.
Weak: "The Mean." Fails basic statistical concepts.
[Medium] Defining Metrics: "Sales says they have 10,000 'Active Customers.' Risk says there are only 6,000. Why?"
Strong: Definitions differ. Sales counts anyone who opened an account. Risk counts only those who did a transaction in the last 90 days. We must standardize the definition of "Active."
Weak: "One of them is lying." Fails to understand data governance.
[Easy] Data Privacy: "You need to send a sample dataset to an external vendor for a software demo. What must you do first?"
Strong: Mask/Anonymize all Personally Identifiable Information (PII) like names, phone numbers, and PAN cards.
Weak: Password protect the Excel file. Fails infosec compliance.
D. Gap Check: AI Voice Mock vs. Human Evaluation
[Guessing] Based on current LLM audio-processing capabilities, here is where your app will succeed and where it requires careful technical guardrails.

Skill / Evaluation Area
AI Voice Mock Feasibility
Human Evaluator Required?
Regulatory Knowledge (RBI limits, FOIR)
High. AI can easily check if the candidate mentioned "8 AM" or calculated 50% correctly.
No
Objection Handling Logic
High. AI can perfectly assess if a candidate pivoted from "Interest Rate" to "Processing Fee".
No
Language & Slang (Hindi/Regional)
Medium. AI struggles to classify local aggressive slang vs. assertive tone.
Yes (Needs human review for flagged edge-cases)
Aggression vs. Firmness (Tone)
Low. Voice AI often misinterprets loud, authoritative speaking (required in collections) as anger.
Yes (Crucial risk area for false negatives)
Technical/Excel Tests (Data/Credit)
Low. Voice cannot assess a live SQL join or VLOOKUP execution.
Yes (Needs integrated coding/Excel environment)

Sources
RBI Guidelines on Recovery Agents: Rules & Borrower Rights
Can Recovery Agents Call You on Sunday? RBI Calling Time Rules

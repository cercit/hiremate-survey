# Prompt 1: role requirements + scenario question bank: ChatGPT (Deep Research)

- **Run by:** Sameer, 27 Sep 2026
- **Tool:** ChatGPT (Deep Research)
- **Note:** Verified in `../role-grounding-gpt.md`.
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

I researched this as a hiring-market and interview-preparation exercise for India, using 2025–2026 job postings/career pages where available, plus RBI and IIBF material. One important limitation: private banks/NBFCs rarely publish their complete interview scorecards or rejection criteria. Where I am synthesising from several postings/interview reports rather than quoting a published company process, I have marked it **[UNVERIFIED / SYNTHESISED]**.

The question bank itself is **HireMate-generated practice content**, not a claim that these are verbatim questions asked by a particular bank.

## 1. Collections Officer / Collection Executive

### A. Role requirements

| Area                 | Research finding                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Common bank titles   | Collection Officer, Collection Executive, Recovery Officer, Collections Executive, Recovery Agent                                                                                                                                                                                                                                         |
| Common NBFC titles   | Collection Executive, Collection Officer, Field Collection Executive, Recovery Executive, FOS / Field Officer                                                                                                                                                                                                                             |
| Typical work         | Phone follow-up, field visits, overdue EMI recovery, repayment negotiation, account updates, locating customers, escalation/legal-recovery coordination. A current Muthoot Finance-linked Chennai posting explicitly describes overdue tracking, debtor communication, repayment-plan negotiation and record keeping. ([Indeed India][1]) |
| Qualification        | The market is broad. Current entry-level postings include 10th/12th-pass requirements; Mahindra Finance's SRM School of Banking programme recruits candidates into Business Executive/Collection Executive roles. ([Evanios Jobs][2])                                                                                                     |
| Experience           | Fresher–2 years is visible in entry-level field-collection postings. More specialised portfolios, such as 41–180 DPD, can ask for prior bank/NBFC experience. ([Evanios Jobs][2])                                                                                                                                                         |
| Salary               | Public 2026 examples: ₹15,000–₹25,000/month for a Chennai collection role; ₹15,000–₹18,000/month in another Chennai posting; ₹18,000–₹22,000/month for a Muthoot Finance-linked Chennai Collection Officer role. These are individual postings, **not an industry-wide salary benchmark**. ([Evanios Jobs][2])                            |
| Languages            | Local-language ability is frequently relevant to field collections. One Chennai posting explicitly says English is not required; another asks for basic English. Exact language requirements vary by geography. ([Apna][3])                                                                                                               |
| Mobility             | Field roles can require a two-wheeler/licence and extensive travel. A current Chennai posting explicitly requires 100% willingness to travel. ([Indeed India][1])                                                                                                                                                                         |
| Top skills           | Communication, negotiation, persistence, customer handling, field discipline/record keeping. These are directly reflected in current collection postings. ([Indeed India][1])                                                                                                                                                             |
| Regulatory knowledge | RBI recovery-agent rules, customer confidentiality, Fair Practices Code, permitted calling hours, no intimidation/harassment, correct representations. ([System Health][4])                                                                                                                                                               |
| DRA certification    | IIBF states that DRA certification is mandatory for employment as a recovery agent and describes 50 hours of training for graduates and 100 hours for undergraduates before examination. ([Indian Institute of Banking & Finance][5])                                                                                                     |

A particularly important HireMate point: **collections training cannot be reduced to “be persuasive.”** The candidate needs to demonstrate recovery effectiveness while staying within customer-protection rules.

RBI's 2022 instructions prohibit intimidation or harassment, threatening/anonymous calls, inappropriate messages, intrusion into family members' privacy, false/misleading representations and calls before 8 a.m. or after 7 p.m. for recovery of overdue loans. ([System Health][4])

### B. Interview process

| Likely stage                    | What is assessed                                                          | Evidence                                                                        |
| ------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Recruiter/HR screening          | Communication, location, salary, willingness to travel, basic eligibility | **[UNVERIFIED / SYNTHESISED]** from entry-level postings and interview patterns |
| Branch/collection-manager round | Recovery mindset, customer handling, target orientation, field readiness  | **[UNVERIFIED / SYNTHESISED]**                                                  |
| Situation/role-play             | Whether candidate can negotiate without becoming aggressive               | **[UNVERIFIED / SYNTHESISED]**                                                  |
| Documentation/HR                | Identity, education, salary, joining availability                         | **[UNVERIFIED / SYNTHESISED]**                                                  |

Mahindra Finance's published campus programme demonstrates structured selection/training for Business Executive and Collection Executive roles, while public interview reports across financial-services employers show aptitude/GD/interview combinations for some graduate programmes. ([Mahindra Finance][6])

**Likely rejection triggers [UNVERIFIED / SYNTHESISED]:** aggressive recovery language, inability to handle an angry customer, unwillingness to travel, weak local-language communication, unrealistic salary expectations, poor target orientation, or ignorance of basic recovery restrictions.

### C. 12-question HireMate bank

| #  | Interviewer question                                                                                                                                                                                               | Strong answer covers                                                                                  | Weak answer                                            | Level  |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------ |
| 1  | **EN:** “I am your customer. I have missed three EMIs and I am angry. Convince me to make a payment today.” **HI:** “मैंने तीन EMI मिस की हैं और मैं आपसे नाराज़ हूँ। मुझे आज पेमेंट करने के लिए कैसे मनाओगे?”     | Acknowledge; verify situation; offer realistic payment path; remain respectful                        | “Sir, pay immediately otherwise action will be taken.” | Medium |
| 2  | **EN:** “The customer tells you he lost his job and genuinely cannot pay the EMI. What will you do?” **HI:** “ग्राहक कहता है कि उसकी नौकरी चली गई है और वह सच में EMI नहीं भर सकता। आप क्या करेंगे?”               | Empathy; understand ability to pay; explain available company options; document/escalate              | “I will keep calling until he pays.”                   | Medium |
| 3  | **EN:** “The customer says, ‘I will complain to RBI if you call me again.’ How do you respond?” **HI:** “ग्राहक कहता है, ‘मैं RBI में शिकायत करूँगा अगर आपने फिर फोन किया।’ आप क्या कहेंगे?”                       | Stay calm; explain purpose; respect grievance rights; stop inappropriate contact/escalate as required | “Go ahead, complain. We are doing our job.”            | Hard   |
| 4  | **EN:** “Tell me what you must NOT do while recovering an overdue loan.” **HI:** “Loan recovery करते समय आपको कौन-कौन सी चीजें बिल्कुल नहीं करनी चाहिए?”                                                           | No threats; no harassment; no public humiliation/third-party intrusion; no prohibited calling hours   | “I can call relatives if customer doesn't answer.”     | Easy   |
| 5  | **EN:** “The customer refuses to pay but says he can pay ₹3,000 today against a much larger overdue amount. What do you do?” **HI:** “ग्राहक पूरी रकम नहीं दे सकता लेकिन आज ₹3,000 दे सकता है। आप क्या करेंगे?”    | Verify policy; accept/record only through approved process; document commitment; follow-up            | “Take ₹3,000 cash and settle it privately.”            | Medium |
| 6  | **EN:** “You visit the customer's house and his neighbour asks why you have come. What do you say?” **HI:** “आप ग्राहक के घर जाते हैं और पड़ोसी पूछता है कि आप क्यों आए हैं। आप क्या कहेंगे?”                      | Protect confidentiality; don't disclose debt; politely ask to meet customer                           | “He hasn't paid his EMI.”                              | Hard   |
| 7  | **EN:** “A customer abuses you on the phone. What do you do?” **HI:** “ग्राहक फोन पर आपको गाली देता है। आप क्या करेंगे?”                                                                                           | Don't retaliate; de-escalate; set professional boundary; document/escalate                            | “I will abuse him back.”                               | Easy   |
| 8  | **EN:** “Explain DPD to me as if I have never worked in collections.”                                                                                                                                              | Days past due; ageing; bucket concept; effect on follow-up priority                                   | “DPD means default percentage.”                        | Easy   |
| 9  | **EN:** “You have 100 overdue accounts but only enough time to visit 20 today. How will you prioritise?” **HI:** “100 overdue accounts हैं लेकिन आज सिर्फ 20 customers visit कर सकते हैं। कैसे prioritise करेंगे?” | DPD/severity; amount; contactability; promise-to-pay/risk/route efficiency                            | “I'll visit whichever customers are closest.”          | Hard   |
| 10 | **EN:** “A customer says the EMI was already paid, but your system still shows overdue. What will you do?” **HI:** “ग्राहक कहता है EMI भर दी है लेकिन system में overdue दिख रहा है। क्या करेंगे?”                 | Request payment proof; verify system/bank trail; avoid demanding duplicate payment; update/escalate   | “System says overdue, so pay again.”                   | Medium |
| 11 | **EN:** “Your manager asks you to call a customer at 7:30 a.m. because the account is critical. What do you do?” **HI:** “Manager कहते हैं critical account है इसलिए सुबह 7:30 बजे call करो। आप क्या करेंगे?”      | Know calling restriction; explain compliance concern; use permitted window/escalation                 | “Manager told me, so I will call.”                     | Hard   |
| 12 | **EN:** “Why do you want a collections job when the work involves rejection, travel and targets?” **HI:** “Collections job में rejection, field travel और targets हैं। फिर भी यह job क्यों?”                       | Resilience; communication; problem-solving; realistic understanding of job                            | “I need any job.”                                      | Easy   |

The regulatory portions above are grounded in RBI's recovery-agent instructions. ([System Health][4])

---

# 2. Field Sales Officer / Relationship Executive

### A. Role requirements

| Area               | Research finding                                                                                                                                                                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Common titles      | Sales Officer, Relationship Officer, Relationship Manager, Field Sales Officer, Business Executive, Customer Relationship Officer                                                                                                                                           |
| Bank examples      | ICICI's entry-level Sales & Relationship Manager programme explicitly recruits freshers and converts successful candidates into Relationship Managers.                                                                                                                      |
| NBFC examples      | Mahindra Finance's entry programme places candidates as Business Executive or Collection Executive; Ujjivan uses Customer Relationship Officer for microbanking. ([Mahindra Finance][6])                                                                                    |
| Education          | Graduation is common in bank sales programmes; some field-sales postings accept broader education levels. ICICI's programme is specifically aimed at graduates.                                                                                                             |
| Experience         | Freshers are explicitly accepted in ICICI's SRM programme and a current Axis Sales Officer posting.                                                                                                                                                                         |
| Salary             | Current Axis Coimbatore Sales Officer posting: ₹2.52–₹4.10 lakh/year, approximately ₹21,000–₹34,200/month. Another 2026 Axis field-sales posting lists ₹16,000–₹18,000/month. These are individual advertised packages, not a national salary range. ([JobsForce India][7]) |
| Field requirements | Two-wheeler, driving licence and local-market knowledge appear in current field-sales postings. ([JobsForce India][7])                                                                                                                                                      |
| Skills             | Customer acquisition, lead generation, communication, relationship management, target orientation and cross-selling. ([JobsForce India][7])                                                                                                                                 |
| Product knowledge  | CASA, loans, cards, insurance and other banking products depending on vertical. ICICI describes acquiring new relationships and increasing wallet share through suitable products.                                                                                          |
| Compliance         | KYC-compliant onboarding is explicitly mentioned in the current Axis posting; RBI KYC Directions establish customer-due-diligence requirements for regulated entities. ([JobsForce India][7])                                                                               |

ICICI's own description is useful for HireMate because it explicitly frames the RM role around understanding customer needs and offering appropriate solutions rather than merely pushing a product. 

### B. Interview process

A reasonable HireMate simulation flow is:

**Screening → Branch/Manager interview → Sales role-play → HR/documentation**

This is **[UNVERIFIED / SYNTHESISED]**, not a universal bank process. ICICI's actual SRM programme has an entrance-exam-based recruitment process, structured training, partner interview and subsequent ICICI interview.  Public ICICI interview reports also show behavioural/situational questioning for RM roles. ([Glassdoor][8])

### C. 12-question bank

| #  | Interviewer question                                                                                                                                                                                   | Strong answer covers                                                                | Weak answer                              | Level  |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| 1  | **EN:** “I already have an account with another bank offering a lower interest rate. Why should I consider your product?” **HI:** “दूसरा bank कम interest rate दे रहा है। मैं आपका product क्यों लूँ?” | Understand need; compare total proposition; transparent comparison; no false claims | “Our service is better.”                 | Medium |
| 2  | **EN:** “I will think about it and get back to you.” What do you say? **HI:** “मैं सोचकर बताऊँगा।” आप क्या कहेंगे?                                                                                     | Identify objection; ask what needs consideration; clarify; agree follow-up          | “Okay sir, call me whenever.”            | Easy   |
| 3  | **EN:** “Sell me this loan in 60 seconds.” **HI:** “60 seconds में मुझे loan बेचकर दिखाइए।”                                                                                                            | Need discovery; 2–3 benefits; eligibility/process; clear CTA                        | Gives a memorised product speech         | Medium |
| 4  | **EN:** “You have missed your monthly sales target. What will you do in the next seven days?” **HI:** “आपका monthly target miss हो गया है। अगले सात दिन क्या करेंगे?”                                  | Gap analysis; pipeline; activity plan; daily tracking                               | “I will work harder.”                    | Medium |
| 5  | **EN:** “I don't want to share my documents.” **HI:** “मैं documents share नहीं करना चाहता।”                                                                                                           | Explain purpose; privacy; required documents; don't pressure                        | “Without documents you cannot get loan.” | Easy   |
| 6  | **EN:** “You have 50 leads and only 10 hours. How will you prioritise?” **HI:** “50 leads हैं और सिर्फ 10 घंटे हैं। कैसे prioritise करेंगे?”                                                           | Intent, eligibility, probability, urgency                                           | First-come-first-served only             | Medium |
| 7  | **EN:** “The customer wants a product you know he is not eligible for. What do you do?” **HI:** “Customer ऐसे product की मांग कर रहा है जिसके लिए वह eligible नहीं है। क्या करेंगे?”                   | Explain eligibility; alternative; no mis-selling                                    | “I will somehow process it.”             | Hard   |
| 8  | **EN:** “Pitch a credit card to a customer who says he doesn't need one.” **HI:** “ऐसे customer को credit card pitch करें जो कहता है उसे जरूरत नहीं है।”                                               | Ask need first; relevant use case; cost/terms transparency; accept no               | Repeated pressure                        | Medium |
| 9  | **EN:** “A customer complains that you promised something that isn't in the product terms. What do you do?” **HI:** “Customer कहता है आपने ऐसी सुविधा promise की थी जो terms में नहीं है।”             | Verify; acknowledge; correct information; escalate if needed                        | Blame customer                           | Hard   |
| 10 | **EN:** “How would you generate leads in a new locality?” **HI:** “नई locality में leads कैसे generate करेंगे?”                                                                                        | Market mapping; references; local businesses; digital/branch/referral channels      | “I will wait for leads.”                 | Easy   |
| 11 | **EN:** “You have two competing offers. How do you make your pitch?” **HI:** “Customer के पास दो competing offers हैं। कैसे pitch करेंगे?”                                                             | Need-based comparison; total cost; service/process; honest differentiation          | Criticise competitor without evidence    | Hard   |
| 12 | **EN:** “Why sales?” **HI:** “आप sales में क्यों आना चाहते हैं?”                                                                                                                                       | Communication; measurable goals; customer interaction; resilience                   | “Because salary is good.”                | Easy   |

---

# 3. Credit Analyst / Credit Officer / Credit Underwriter

### A. Role requirements

This is the area where the market becomes much more domain-specific.

| Area                   | Research finding                                                                                                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titles                 | Credit Officer, Credit Analyst, Credit Executive, Credit Manager, Credit Underwriter, Credit Risk Analyst                                                                                                                                                             |
| Bank examples          | ICICI currently lists Credit Manager and Credit Monitoring Analyst roles; exact entry-level requirements vary by business vertical. ([ICICI Careers][9])                                                                                                              |
| NBFC/fintech example   | A current Credit Analyst posting asks candidates to review loan applications, KYC, income/financial documents, CIBIL reports, repayment capacity and fraud/risk indicators. ([Glassdoor][10])                                                                         |
| Qualification          | Graduate is common; finance/commerce/MBA backgrounds are frequently relevant. A current Credit Analyst/Loan Writer posting specifies B.Com or MBA Finance/Marketing. ([LinkedIn][11])                                                                                 |
| Salary                 | Current public Credit Analyst example: ₹25,000–₹35,000/month. This is a specific employer's advertised range, not a national benchmark. ([Glassdoor][10])                                                                                                             |
| Core skills            | Financial-document analysis, CIBIL/credit-bureau interpretation, repayment-capacity assessment, Excel, attention to detail, risk identification and policy adherence. ([Glassdoor][10])                                                                               |
| Retail-credit concepts | CIBIL score/history, DPD, income verification, FOIR, banking behaviour, KYC, fraud indicators. The specific combination varies by lender. **[PARTLY UNVERIFIED]**                                                                                                     |
| MSME                   | Bank statements, business cash flows, financial statements, GST/tax information and business stability can form part of credit assessment. **[UNVERIFIED for a particular employer]**                                                                                 |
| Regulatory knowledge   | KYC/AML and fraud-risk controls are relevant to regulated lending institutions. RBI's KYC Directions require regulated entities to undertake customer due diligence, while RBI has separate Fraud Risk Management Directions for NBFCs. ([Reserve Bank of India][12]) |

### B. Interview process

For credit roles, a practical HireMate model is:

**Resume/HR screening → credit/technical round → case or document-analysis exercise → manager/HR**

This is **[UNVERIFIED / SYNTHESISED]** rather than a single industry-standard process.

A Chola interview report describes a technical round covering NBFCs, loans, EMI, NPA and customer handling followed by a managerial round with practical scenarios. ([Glassdoor][13])

**Likely rejection triggers [UNVERIFIED / SYNTHESISED]:** blindly approving a weak case, inability to explain a credit decision, overlooking document inconsistencies, weak Excel/numerical ability, treating CIBIL score as the only credit variable, or inability to balance business and risk.

### C. 12-question bank

| #  | Interviewer question                                                                                            | Strong answer covers                                                                                   | Weak answer                                      | Level  |
| -- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------ |
| 1  | “A salaried applicant has a CIBIL score of 690 and one 30+ DPD. Would you approve the loan?”                    | Don't decide from score alone; examine reason/recency; current repayment; policy; income/FOIR          | “690 is good, approve.”                          | Hard   |
| 2  | “The applicant's salary slip shows ₹60,000 but the bank statement shows ₹42,000 salary credit. What do you do?” | Reconcile; verify employer/bank statement; investigate; don't ignore mismatch                          | “Salary slip is official, so accept ₹60,000.”    | Medium |
| 3  | “You suspect the salary slip has been edited. What are your next steps?”                                        | Compare metadata/format; employer verification; bank credits; escalation; document evidence            | “Reject immediately because it looks fake.”      | Hard   |
| 4  | “The bank statement has several large credits unrelated to salary. How would you assess them?”                  | Identify source; recurring vs one-off; exclude unverifiable income; assess sustainability              | “Add all credits as income.”                     | Hard   |
| 5  | “Calculate FOIR if monthly obligations are ₹25,000 and eligible monthly income is ₹60,000.”                     | Formula = obligations/income; 41.67%; compare with lender policy                                       | “FOIR is ₹35,000.”                               | Easy   |
| 6  | “An MSME applicant earns a large portion of income in cash. How would you assess the case?”                     | Banking trail; business evidence; GST/tax/financials where applicable; conservative sustainable income | “Cash income cannot be considered.”              | Hard   |
| 7  | “Sales is pushing you to approve a case because the customer is a high-value dealer reference. What do you do?” | Policy first; evidence; independent assessment; documented exception process if permitted              | “Approve because dealer is important.”           | Medium |
| 8  | “A customer has a good CIBIL score but unstable income. Which matters more?”                                    | Both; repayment capacity; stability; obligations; product/policy                                       | “CIBIL always matters more.”                     | Medium |
| 9  | “What is DPD and why is 30+ DPD relevant?”                                                                      | Days past due; payment behaviour; delinquency history; recency/frequency                               | “DPD means default percentage.”                  | Easy   |
| 10 | “You find two documents with different addresses and dates. What do you do?”                                    | Reconcile; verify current address; check document validity; flag inconsistency                         | “Ignore because address differences are common.” | Medium |
| 11 | “A branch is under pressure to improve disbursement. How can credit support growth without weakening controls?” | Faster TAT; clear eligibility; automation; quality checks; consistent policy                           | “Approve more applications.”                     | Hard   |
| 12 | “Give me your recommendation on this loan in 60 seconds: approve, decline or investigate further.”              | Facts; risks; mitigants; policy; clear recommendation                                                  | Long answer without decision                     | Hard   |

---

# 4. Data Analyst / MIS Analyst — BFSI

### A. Role requirements

| Area                   | Research finding                                                                                                                                                                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titles                 | Data Analyst, MIS Analyst, MIS Executive, Reporting Analyst, Business Analyst, Credit Risk Analyst, Operations Analyst                                                                                                                                                                       |
| BFSI example           | Chola Finance has advertised a Data Analyst / Python Automation Specialist role for 0–1 years in Chennai. ([LinkedIn][14])                                                                                                                                                                   |
| Technical requirements | The Chola posting specifies Python, Power BI and SQL, plus data cleaning/transformation, reporting, APIs and Excel. ([LinkedIn][14])                                                                                                                                                         |
| Education              | The Chola example is aimed at recent graduates/early-career candidates. ([Weekday][15])                                                                                                                                                                                                      |
| Salary                 | **[UNVERIFIED]** — I did not find a sufficiently reliable 2025–26 BFSI-specific entry-level salary posting for this exact role that I would use as a benchmark. Public salary sites contain individual observations, but they are not sufficiently representative to label a national range. |
| Skills                 | SQL, Excel, Power BI, data cleaning, reporting, analytical thinking, communication and business understanding. ([Weekday][15])                                                                                                                                                               |
| BFSI domain            | Portfolio/disbursement, collections, DPD, customer/product metrics and operational KPIs are useful domain knowledge for BFSI analytics. **[UNVERIFIED as a universal job requirement]**                                                                                                      |
| Interview emphasis     | SQL/Excel/technical knowledge, projects, analytical reasoning and business communication appear in current interview reports. Chola's Data Analyst interview report describes questions around internships, projects and technical skills. ([Glassdoor][16])                                 |

### B. Interview process

A realistic HireMate simulation:

**HR/recruiter screening → SQL/Excel test → technical/data round → business case/manager round → HR**

This is **[UNVERIFIED / SYNTHESISED]** and varies substantially by employer.

A 2026 Jana Small Finance Bank interview report identifies technical questions around Data Analytics, Excel, SAS and SQL. ([AmbitionBox][17]) A current Chola candidate report describes project/internship and technical-skill questions. ([Glassdoor][16])

For analytics, the interesting difference from sales/collections is that **voice AI can evaluate the candidate's reasoning, but not completely evaluate hands-on SQL execution unless HireMate adds a coding/data workspace.**

### C. 12-question bank

| #  | Interviewer question                                                                                        | Strong answer covers                                                                     | Weak answer                                        | Level  |
| -- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| 1  | “Disbursement has fallen 20% month-on-month. How would you investigate?”                                    | Validate data; segment by branch/product/channel; compare funnel; identify root cause    | “I will make a dashboard.”                         | Hard   |
| 2  | “The branch head says your dashboard is wrong because his branch looks down. What do you do?”               | Validate source; reconcile; understand metric definition; show evidence                  | “The dashboard is correct because SQL is correct.” | Medium |
| 3  | “Explain this dashboard to a branch head who is not comfortable with data.”                                 | Start with business outcome; 3 key metrics; exception/action; avoid technical jargon     | Explains SQL and tables first                      | Medium |
| 4  | “Write a query to calculate collection efficiency by DPD bucket.”                                           | Group by bucket; collected/amount due; appropriate date/filter; handle zero/null         | “SELECT * FROM collections.”                       | Hard   |
| 5  | “Your report has 100,000 records but 2,000 are duplicates. What do you do?”                                 | Define duplicate; identify key; deduplicate; validate totals                             | Delete duplicate rows immediately                  | Medium |
| 6  | “Two systems show different disbursement numbers. Which one do you use?”                                    | Understand definitions; source-of-truth; reconcile; document                             | Always use the bigger number                       | Hard   |
| 7  | “How would you identify branches with worsening collection performance?”                                    | Trend; bucket movement; denominator; peer comparison; drill-down                         | Sort collection amount only                        | Medium |
| 8  | “What is the difference between WHERE and HAVING in SQL?”                                                   | WHERE filters rows before aggregation; HAVING filters grouped results                    | “They are basically the same.”                     | Easy   |
| 9  | “A manager asks you for a report in 15 minutes, but the source data has not refreshed. What do you do?”     | Communicate limitation; provide last validated data if appropriate; don't fabricate; ETA | Change numbers manually                            | Medium |
| 10 | “Your dashboard shows a 20% increase in leads but no increase in disbursement. What would you investigate?” | Conversion funnel; lead quality; approval rate; TAT; drop-off stage                      | “Marketing is doing well.”                         | Hard   |
| 11 | “Tell me about one project where your analysis changed a decision.”                                         | Problem; data; method; insight; measurable action                                        | Describes only the dashboard design                | Medium |
| 12 | “You have one hour and three datasets: customers, loans and collections. What would you analyse first?”     | Business question first; keys/relationships; data quality; prioritised metric            | Starts randomly exploring columns                  | Medium |

---

# 5. Regulatory knowledge HireMate can test

This is worth making a dedicated module rather than scattering compliance questions across the app.

| Concept                     | Collections |    Sales |   Credit | Data/MIS |
| --------------------------- | ----------: | -------: | -------: | -------: |
| RBI recovery-agent rules    |    **High** |      Low |   Medium |      Low |
| Calling-hour restrictions   |    **High** |      Low |      Low |      Low |
| No intimidation/harassment  |    **High** |   Medium |   Medium |      Low |
| Customer confidentiality    |    **High** |     High |     High |     High |
| KYC/CDD                     |      Medium | **High** | **High** |   Medium |
| DRA certification           |    **High** |       No |       No |       No |
| CIBIL/credit-bureau basics  |        High |   Medium | **High** |     High |
| DPD/buckets                 |    **High** |      Low | **High** | **High** |
| FOIR                        |         Low |   Medium | **High** |   Medium |
| Fraud/document verification |      Medium |   Medium | **High** |   Medium |

RBI's KYC framework requires regulated entities to conduct customer due diligence, and the 2025 amendment updated the KYC Directions. ([Reserve Bank of India][12])

For collections, RBI explicitly covers confidentiality, calling hours and prohibition of intimidation/harassment. ([System Health][4]) IIBF's current DRA material also confirms the DRA examination/training framework. ([Indian Institute of Banking & Finance][18])

---

# 6. What AI voice can realistically practise

This is where I think HireMate can become much more differentiated.

| Skill                              | AI voice |                           Human needed? | Why                                                                            |
| ---------------------------------- | -------: | --------------------------------------: | ------------------------------------------------------------------------------ |
| Self-introduction                  |    ★★★★★ |                                      No | Voice fluency and structure are measurable                                     |
| English/Hindi communication        |    ★★★★★ |                               Sometimes | AI can assess clarity; humans add cultural nuance                              |
| Customer empathy                   |    ★★★★★ |                               Sometimes | Very suitable for simulated angry/distressed customers                         |
| Collections negotiation            |    ★★★★★ |                         Yes, eventually | AI can simulate customers and compliance traps                                 |
| Aggressive customer handling       |    ★★★★★ |                                  Useful | Excellent role-play use case                                                   |
| Sales objection handling           |    ★★★★★ |                                  Useful | AI can dynamically change objections                                           |
| 60-second product pitch            |    ★★★★★ |                                      No | Excellent AI use case                                                          |
| Target-pressure scenarios          |    ★★★★★ |                                      No | Conversational judgement can be evaluated                                      |
| Regulatory response                |    ★★★★☆ |                                      No | AI can check prohibited behaviours against rules                               |
| Credit judgement                   |    ★★★★☆ |                Yes for final validation | AI can present cases; actual underwriting needs domain validation              |
| FOIR calculation                   |    ★★★★☆ |                                      No | Voice question + numerical workspace is effective                              |
| Fake document detection            |    ★★☆☆☆ |            **Yes / document workspace** | Voice alone cannot inspect documents properly                                  |
| SQL                                |    ★★☆☆☆ |      **No, but needs coding workspace** | Voice can ask SQL questions; actual query execution requires a SQL environment |
| Excel                              |    ★★☆☆☆ | **No, but needs spreadsheet workspace** | Voice cannot prove spreadsheet skill                                           |
| Power BI                           |    ★★☆☆☆ |            **No, needs dashboard task** | Candidate needs to build/read an actual dashboard                              |
| Business-case reasoning            |    ★★★★★ |                                  Useful | AI can dynamically challenge assumptions                                       |
| Explaining analytics to a manager  |    ★★★★★ |                                      No | Excellent voice simulation                                                     |
| Stakeholder disagreement           |    ★★★★★ |                                  Useful | AI can play an impatient branch manager                                        |
| Local-language field communication |    ★★★★★ |                                  Useful | Strong fit for Hindi/regional-language practice                                |
| Physical field ability             |    ★☆☆☆☆ |                                 **Yes** | Travel, mobility and field behaviour cannot be validated through voice         |
| Actual customer acquisition        |    ★☆☆☆☆ |                                 **Yes** | Needs real-world evidence                                                      |
| Actual collection performance      |    ★☆☆☆☆ |                                 **Yes** | Needs portfolio/outcome data                                                   |

## 7. The HireMate opportunity

The research points to a fairly clear product architecture.

Don't make HireMate simply:

**AI asks question → candidate answers → AI gives communication score.**

For these BFSI roles, a stronger product would be:

**Role selection → realistic BFSI situation → voice conversation → dynamic follow-up → domain/compliance evaluation → communication evaluation → final interview report.**

For example, a Collections simulation could deliberately evolve:

> Customer: “I lost my job. I have no money.”

Candidate responds.

> Customer: “Stop calling me. I'll complain to RBI.”

Candidate responds.

Then HireMate asks:

> “Your manager now tells you to call the customer at 7:30 a.m. because the account is critical. What do you do?”

That tests **three different competencies in one conversation**: empathy, recovery judgement and regulatory awareness.

For Field Sales, the same engine can dynamically move from:

**“Tell me about the product” → “Another bank is cheaper” → “I'll think about it” → “Your competitor has already approved me” → “Convince me in 30 seconds.”**

For Credit:

**690 CIBIL → one 30+ DPD → salary-slip mismatch → bank-statement mismatch → FOIR calculation → final credit recommendation.**

For Data Analyst:

**20% disbursement decline → interviewer challenges the first hypothesis → asks for segmentation → asks for SQL → asks candidate to explain the finding to a branch head.**

That last format is particularly valuable because it moves HireMate from a generic interview chatbot toward a **role-specific BFSI assessment simulator**.

### Source notes

The strongest primary sources used here are RBI's recovery-agent instructions, RBI KYC directions, IIBF's DRA material, ICICI Bank's own careers pages and Mahindra Finance's own programme page. Job portals and interview-report sites were used mainly to supplement actual hiring examples, not as regulatory authority. ([System Health][4])

**Source dates:** where the source itself provides a publication/posting/interview date, I have used that date above; current undated career/job pages were checked on **27 September 2026**. Public job-board salary figures are individual advertisements and are therefore not presented as industry averages.

My product view: **Collections and Field Sales are the strongest first AI-voice modules for HireMate.** They have highly conversational work, obvious role-play scenarios, local-language requirements and measurable behavioural competencies. Credit can be the next module, while Data Analyst becomes substantially stronger once HireMate adds a SQL/Excel assessment workspace alongside voice.

[1]: https://in.indeed.com/viewjob?jk=21603f2e729aa1e8&utm_source=chatgpt.com "Collections Officer - Chennai, Tamil Nadu - Indeed.com"
[2]: https://www.evaniosjobs.com/job-apply/2597277/collection-executive-job-in-chennai?utm_source=chatgpt.com "Collection Executive Job Opening in Chennai – Apply Now | Evanios Jobs"
[3]: https://apna-seo.production.infra.apna.co/job/chennai/collection-executive-officer-117666403?utm_source=chatgpt.com "Collection Executive / Officer in Abhay Finance, George Town, Chennai | apna.co"
[4]: https://systemhealth.rbi.org.in/Scripts/NotificationUser.aspx_Id%3D12378%26Mode%3D0.html?utm_source=chatgpt.com "Reserve Bank of India - Notifications"
[5]: https://www.iibf.org.in/faq?utm_source=chatgpt.com "FAQ - IIBF"
[6]: https://www.mahindrafinance.com/careers/prarambh/srm-school-of-banking?utm_source=chatgpt.com "SRM School of Banking Mahindra Finance"
[7]: https://jobsforceindia.com/jobs/sales-officer-liabilities-axis-bank-coimbatore/?utm_source=chatgpt.com "Sales Officer – Liabilities — Axis Bank, Coimbatore | JobsForce India"
[8]: https://www.glassdoor.co.in/Interview/ICICI-Bank-Interview-Questions-E11763.htm?utm_source=chatgpt.com "2179 ICICI Bank Interview Questions & Answers (2026) | Glassdoor"
[9]: https://careers.icici.bank.in/?utm_source=chatgpt.com "ICICI Careers - Explore Dream Job with a Career in ICICI Bank Ltd"
[10]: https://www.glassdoor.co.in/job-listing/credit-analyst-geetpay-JV_KO0%2C14_KE15%2C22.htm?jl=1010264991000&utm_source=chatgpt.com "Geetpay hiring Credit Analyst Job in India | Glassdoor"
[11]: https://in.linkedin.com/jobs/view/credit-analyst-loan-writer-at-nxtlevel-limited-4424515501?utm_source=chatgpt.com "NxtLevel Limited hiring Credit Analyst / Loan Writer in Ahmedabad, Gujarat, India | LinkedIn"
[12]: https://www.rbi.org.in/scripts/NotificationUser.aspx/searchnew/searchnew/NotificationUser.aspx?Id=12866&utm_source=chatgpt.com "Reserve Bank of India - Notifications"
[13]: https://www.glassdoor.co.in/Interview/Chola-MS-General-Insurance-Company-Interview-Questions-E1024799.htm?utm_source=chatgpt.com "17 Chola MS General Insurance Company Interview Questions & Answers (2026) | Glassdoor"
[14]: https://in.linkedin.com/in/rupash-kaliyamurthy?utm_source=chatgpt.com "Rupash Kaliyamurthy - Cholamandalam Investment and Finance Company Limited | LinkedIn"
[15]: https://jobs.weekday.works/cholamandalam-finance%28murugappa-group%29-data-analyst-%2F-python-automation-specialist?utm_source=chatgpt.com "Cholamandalam Finance(Murugappa Group) hiring for Data Analyst / Python Automation Specialist"
[16]: https://www.glassdoor.co.in/Interview/Cholamandalam-Interview-Questions-E546802.htm?utm_source=chatgpt.com "11 Cholamandalam Interview Questions & Answers (2026) | Glassdoor"
[17]: https://www.ambitionbox.com/interviews/jana-small-finance-bank-interview-questions/data-analyst?utm_source=chatgpt.com "1 Jana Small Finance Bank Data Analyst Interview Questions & Answers | Complete Prep Guide 2025 | AmbitionBox"
[18]: https://www.iibf.org.in/certificate-examination-for-DRA?from=dra&utm_source=chatgpt.com "Certificate Examination for DRA - IIBF"

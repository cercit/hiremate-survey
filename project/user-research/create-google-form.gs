/**
 * Creates the "Job Interview Experience Survey" Google Form (15 questions).
 *
 * How to use:
 *   1. Go to https://script.google.com -> New project
 *   2. Delete the sample code and paste this whole file
 *   3. Save, then click Run (function: createSurvey)
 *   4. Allow permissions for your own Google account
 *   5. View -> Execution log: copy the "Share link" and "Edit link"
 */
function createSurvey() {
  var form = FormApp.create('Job Interview Experience Survey (5 minutes)');
  form.setDescription(
    "Hi! I'm researching how freshers and early-career professionals prepare for job interviews. " +
    "This takes about 5 minutes. No right or wrong answers. Your responses are anonymous unless " +
    "you choose to share your contact at the end. Thank you!"
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);

  form.setConfirmationMessage('Thank you! This survey is for freshers and early-career job seekers, and your answers really help.');

  // ---------- Screening question: "No" submits the form ----------
  var screener = form.addMultipleChoiceItem()
    .setTitle('Are you a student, a fresher, or someone with less than 3 years of work experience who is looking for a job now or in the next 6 months?')
    .setRequired(true);

  // ---------- Section 1: About you ----------
  form.addPageBreakItem().setTitle('About you');

  screener.setChoices([
    screener.createChoice('Yes', FormApp.PageNavigationType.CONTINUE),
    screener.createChoice('No', FormApp.PageNavigationType.SUBMIT)
  ]);

  form.addMultipleChoiceItem()
    .setTitle('1. What best describes you right now?')
    .setChoiceValues([
      'Final-year student',
      'Graduated, looking for my first job',
      'Working, less than 1 year of experience',
      'Working, 1–3 years of experience'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('2. Which roles are you applying for or planning to apply for?')
    .setChoiceValues([
      'Data Analyst / MIS / Business Analyst',
      'Credit Analyst / Credit Officer',
      'Field Sales / Relationship Executive (bank, NBFC, insurance)',
      'Collections / Recovery Officer'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('3. Where do you live?')
    .setChoiceValues([
      'Metro city (Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Pune, Kolkata)',
      'Tier-2 city',
      'Smaller town / rural area'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('4. In which language are you most comfortable answering interview questions?')
    .setChoiceValues(['English', 'Hindi', 'Mix of English and Hindi'])
    .showOtherOption(true)
    .setRequired(true);

  // ---------- Section 2: Your recent interviews ----------
  form.addPageBreakItem().setTitle('Your recent interviews');

  form.addMultipleChoiceItem()
    .setTitle('5. How many job interviews have you attended in the last 6 months?')
    .setChoiceValues(['0', '1–2', '3–5', '6 or more'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('6. How many of those interviews turned into a job offer?')
    .setChoiceValues(['None', '1', '2 or more', 'Still waiting for results']);

  form.addCheckboxItem()
    .setTitle('7. How did you prepare for your most recent interview?')
    .setChoiceValues([
      "Didn't prepare much",
      'YouTube videos / online articles',
      'Practised with friends, seniors or family',
      'College placement cell / training',
      'ChatGPT or another AI chatbot',
      'An AI mock-interview app (please name it in "Other")',
      'Paid coaching or paid mock interview'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('8. In your most recent interview, what was the hardest part?')
    .setChoiceValues([
      'Technical / subject questions (Excel, SQL, finance, credit)',
      'Explaining my background and experience',
      'Nervousness / confidence',
      'Speaking fluently in the interview language',
      'Sales pitch / role-play / handling a customer situation',
      'Salary discussion',
      "Not sure: I don't know where I went wrong"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("9. When you didn't get selected, did anyone tell you why?")
    .setChoiceValues([
      'Yes, I got clear feedback',
      'I got a vague answer ("we\'ll get back to you", "not a fit")',
      'No feedback at all',
      "I haven't been rejected yet"
    ])
    .setRequired(true);

  // ---------- Section 3: Spending and trust ----------
  form.addPageBreakItem().setTitle('Spending and preparation');

  form.addMultipleChoiceItem()
    .setTitle('10. In the last 12 months, roughly how much have you spent on your job search?')
    .setHelpText('Resume writing, Naukri/LinkedIn paid plans, courses, coaching, mock interviews')
    .setChoiceValues(['₹0', 'Under ₹500', '₹500 – ₹2,000', '₹2,000 – ₹5,000', 'More than ₹5,000'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('11. Has anyone ever asked you to pay money in exchange for getting you a job?')
    .setChoiceValues(['Yes, and I paid', 'Yes, but I refused', 'No'])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('12. Before an interview, how confident do you usually feel?')
    .setBounds(1, 5)
    .setLabels('Very nervous', 'Fully confident')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('13. If you could practise a real interview for your target role and get feedback, which option would you most likely choose?')
    .setChoiceValues([
      "Only if it's free",
      'Pay per practice session (around ₹99)',
      'A pack of sessions at a lower price per session (around ₹499 for 10)',
      'A monthly plan with unlimited practice',
      "I wouldn't use it"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('14. Describe one interview question you struggled with recently, or one thing you wish you had done differently.');

  // ---------- Section 4: Optional follow-up ----------
  form.addPageBreakItem().setTitle('Optional: 20-minute follow-up chat');

  form.addTextItem()
    .setTitle('15. Would you be open to a 20-minute phone chat about your interview experience? If yes, share your name and phone number or email.')
    .setHelpText("Your details will only be used to schedule this one call and won't be shared.");

  Logger.log('Share link: ' + form.getPublishedUrl());
  Logger.log('Edit link:  ' + form.getEditUrl());
}

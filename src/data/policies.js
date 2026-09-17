/* ============================================================
   TIDAS NIKESHALA — Legal pages
   Privacy Policy · Terms & Conditions · Refund Policy

   DRAFTS. These were written to fit how the classes actually run
   (Gampaha physical classes, an online batch, the LMS, monthly fees,
   Telegram channels) but they have NOT been reviewed by a lawyer.
   Every item marked "CONFIRM" below is an assumption about your
   business practice — change it if it is wrong before going live.

   Each policy is structured data: the PolicyPage component renders
   `sections` in order. A section can have `body` (paragraphs before the
   list), `list` (bullet points) and `after` (paragraphs after the list).
   ============================================================ */

import { brand } from './content'

const UPDATED = '17 September 2026'

const contactBlock = {
  heading: 'How to contact us',
  body: ['For anything relating to this policy, reach us through any of the following:'],
  list: [
    `Phone: ${brand.phone}`,
    'WhatsApp: +94 70 168 4511',
    `Email: ${brand.email}`,
    'Physical classes: Sipsara, Gampaha',
  ],
}

/* ------------------------------------------------------------
   REFUND POLICY
   ------------------------------------------------------------ */
const refundPolicy = {
  slug: 'refund-policy',
  title: 'Refund Policy',
  updated: UPDATED,
  intro:
    'This policy explains when fees paid for Smart Physics classes can be refunded, and how to ask for one. It applies to physical classes, online classes and access to the student LMS.',
  sections: [
    {
      heading: 'Class fees',
      body: [
        // CONFIRM: monthly, paid in advance
        'Fees are charged per calendar month and are payable in advance, before the first class of that month. A month\'s fee covers every scheduled class for your batch in that month, together with the tutes, papers and any recordings released for it on the LMS.',
        'Paying for a month does not reserve a place in later months. Each month is paid for separately.',
      ],
    },
    {
      heading: 'When a refund is available',
      body: ['A full refund of a month\'s fee is available if all of the following are true:'],
      list: [
        // CONFIRM: the refund window
        'You ask for the refund before the first scheduled class of the month you paid for.',
        'You have not attended any class — physical or online — for that month.',
        'You have not opened or downloaded any tute, paper or recording released for that month on the LMS.',
      ],
    },
    {
      heading: 'When a refund is not available',
      list: [
        'Once you have attended any class in a paid month, or accessed that month\'s materials on the LMS, the fee for that month is not refundable.',
        'Classes you miss are not refunded. Where a recording is available it will be released on the LMS so you can catch up.',
        'If you join part-way through a month, the fee covers the rest of that month and is not refundable once you have attended a class.',
        'Fees are not refunded if your enrolment is ended for breaching the Terms and Conditions — for example, sharing LMS login details or distributing class materials.',
      ],
    },
    {
      heading: 'If we cancel or move a class',
      body: [
        'If we have to cancel a class, we will do our best to reschedule it or provide a recording. If a class is cancelled and neither a replacement class nor a recording can be offered, that class will be credited against your next month\'s fee. If you are not continuing, the fee for that class will be refunded pro rata.',
      ],
    },
    {
      heading: 'Online classes and technical problems',
      body: [
        'If an online class cannot go ahead because of a problem on our side — the stream fails, or the platform is down — we will provide a replacement session or a recording.',
        'Problems with your own internet connection, device or power supply are outside our control and are not grounds for a refund. Recordings, where released, will be on the LMS.',
      ],
    },
    {
      heading: 'LMS access',
      body: [
        'Access to the student LMS is included with your monthly fee and continues while your fees are up to date. Unused LMS access is not refundable, and no refund is due if access ends because a fee has not been paid.',
      ],
    },
    {
      heading: 'How to request a refund',
      body: ['Send a request by WhatsApp, phone or email with the following details:'],
      list: [
        'The student\'s full name and batch (for example, 2027 Revision).',
        'The date of the payment and the amount.',
        'The payment method and any reference number.',
        'The reason for the request.',
      ],
    },
    {
      heading: 'How refunds are paid',
      body: [
        // CONFIRM: processing time and method
        'We aim to review every request within 7 working days. Approved refunds are paid by the same method used for the original payment — for example, a bank transfer is refunded to the same account. Any bank charges on the refund are deducted from the amount returned.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy from time to time. The date at the top shows when it was last changed. The policy in force when you paid is the one that applies to that payment.',
      ],
    },
    contactBlock,
  ],
}

/* ------------------------------------------------------------
   PRIVACY POLICY
   ------------------------------------------------------------ */
const privacyPolicy = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  updated: UPDATED,
  intro:
    'This policy explains what personal information Smart Physics collects from students and parents, why we collect it, and how we look after it. It covers our website, the student LMS, our classes and the ways we communicate with you.',
  sections: [
    {
      heading: 'Who we are',
      body: [
        `Smart Physics is the A/L Physics class run by ${brand.name}, with physical classes at Sipsara, Gampaha and an online batch. Our website is tidas.lk and the student LMS is at students.tidas.lk.`,
      ],
    },
    {
      heading: 'Information we collect',
      body: ['We collect only what we need to enrol you, run the classes and keep in touch.'],
      list: [
        'Registration details — the student\'s name, phone number, email address, school and A/L batch year, and a parent or guardian\'s name and phone number.',
        'Payment records — the amount, date, payment method and reference for each fee paid. We do not store bank card numbers.',
        'LMS activity — your login details, the materials you access, and your marks for any papers submitted through the LMS.',
        'Communications — messages you send us on WhatsApp or Telegram, and notes from phone calls, so we can follow up on your questions.',
        // CONFIRM: whether analytics are in use
        'Website usage — basic, anonymous information about how the website is used, such as which pages are visited. This does not identify you personally.',
      ],
    },
    {
      heading: 'How we use it',
      list: [
        'To enrol you in the right batch and keep your place.',
        'To give you access to the LMS and the materials for your batch.',
        'To send you timetables, hall changes, tutes and announcements.',
        'To keep records of fees paid and reminders of fees due.',
        'To answer your questions and support you through the course.',
        'To understand how the classes are going and improve them.',
      ],
      body: ['We do not use your information for any purpose unrelated to the classes, and we do not sell it to anyone.'],
    },
    {
      heading: 'Students under 18',
      body: [
        'Many A/L students are under 18. Where a student is under 18, we collect a parent or guardian\'s contact details at registration, and we treat the parent or guardian as having given consent for the student\'s information to be used as described here. Parents and guardians may contact us at any time about their child\'s information.',
      ],
    },
    {
      heading: 'Who we share it with',
      body: ['We share your information only where it is needed to run the classes:'],
      list: [
        'The provider that hosts the student LMS, so your account and materials can be stored and delivered.',
        'Banks and payment services, to process the fees you pay.',
        'Messaging platforms — WhatsApp and Telegram — when we communicate with you through them. Your use of those platforms is also governed by their own privacy policies.',
        'Where the law requires it, or to protect the rights and safety of students, staff or the public.',
      ],
      after: ['We never sell your information, and we do not share it with advertisers.'],
    },
    {
      heading: 'Telegram, WhatsApp and social media',
      body: [
        'We run channels on Telegram and communicate on WhatsApp, and we have pages on Facebook, YouTube and TikTok. Anything you post publicly on those platforms is visible to other users. Those platforms collect their own information about you under their own policies, which we do not control.',
      ],
    },
    {
      heading: 'Student reviews and results',
      body: [
        // CONFIRM: consent practice for publishing reviews
        'We sometimes share students\' feedback and results — on the website, in class or on social media — to show what the classes achieve. We only do this with the student\'s agreement, and a parent or guardian\'s agreement where the student is under 18. You can ask us to remove any review or result of yours at any time.',
      ],
    },
    {
      heading: 'How we keep it safe',
      body: [
        'LMS accounts are protected by individual login credentials. Access to student records is limited to the people who need it to run the classes. Please keep your own LMS login private — do not share it with anyone — and tell us straight away if you think it has been used by someone else.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        // CONFIRM: retention period
        'We keep your information while you are enrolled and for a reasonable period afterwards, so that we can deal with any questions about fees, results or certificates. Payment records are kept for as long as our accounting obligations require. After that, information is deleted or anonymised.',
      ],
    },
    {
      heading: 'Your rights',
      body: ['You can ask us at any time to:'],
      list: [
        'Tell you what information we hold about you.',
        'Correct anything that is wrong or out of date.',
        'Delete your information, where we no longer need it to run the classes or to meet a legal obligation.',
        'Stop sending you messages that are not essential to your enrolment.',
      ],
      after: ['To do any of these, contact us using the details below.'],
    },
    {
      heading: 'Cookies',
      body: [
        // CONFIRM: cookie use
        'Our website uses only the cookies needed for it to work. We do not use advertising cookies. The LMS uses a cookie to keep you logged in.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy as the classes or the law change. The date at the top shows when it was last updated. Significant changes will be announced on our Telegram channels.',
      ],
    },
    contactBlock,
  ],
}

/* ------------------------------------------------------------
   TERMS AND CONDITIONS
   ------------------------------------------------------------ */
const termsAndConditions = {
  slug: 'terms-and-conditions',
  title: 'Terms and Conditions',
  updated: UPDATED,
  intro:
    'These terms apply to every student who enrols in Smart Physics classes, and to anyone who uses our website or the student LMS. By enrolling, paying a fee, or using the LMS, you agree to them. Where a student is under 18, a parent or guardian agrees on their behalf.',
  sections: [
    {
      heading: 'About the classes',
      body: [
        `Smart Physics provides A/L Physics classes taught by ${brand.name}. Classes are held physically at Sipsara, Gampaha, and online. Each class belongs to a batch — for example 2027 Revision or 2028 Theory — with its own timetable, which is published on the website and on the batch\'s Telegram channel.`,
      ],
    },
    {
      heading: 'Enrolment',
      list: [
        'To enrol, contact us by WhatsApp or phone, or register in person. You must give accurate details, including a working phone number.',
        'Students under 18 must be enrolled by, or with the knowledge of, a parent or guardian, whose contact details we will record.',
        'Enrolment is for a named student and cannot be transferred to anyone else.',
        'We may decline or end an enrolment where these terms are not followed.',
      ],
    },
    {
      heading: 'Fees and payment',
      list: [
        // CONFIRM: monthly in advance
        'Fees are charged monthly and are payable in advance, before the first class of the month.',
        'If a month\'s fee is not paid, access to classes and the LMS for that month may be suspended until it is.',
        'Fees may change between academic years. We will announce any change before it takes effect.',
        'Refunds are governed by our Refund Policy, which forms part of these terms.',
      ],
    },
    {
      heading: 'Your LMS account',
      list: [
        'Each student is given a personal LMS account at students.tidas.lk. It is for that student\'s use only.',
        'Keep your login details private. Do not share them with anyone, and do not let anyone else use your account.',
        'You are responsible for everything done through your account. If you believe someone else has used it, tell us immediately.',
        'We may suspend or close an account that is shared, used by someone other than the enrolled student, or used to copy or distribute materials.',
      ],
    },
    {
      heading: 'Class materials and copyright',
      body: [
        'All tutes, papers, notes, recordings, videos and other materials we provide — whether in class, on the LMS or through Telegram — are our property and are protected by copyright.',
      ],
      list: [
        'You may use the materials for your own study only.',
        'You must not copy, photograph, record, screenshot, share, sell, upload or otherwise distribute any materials, in whole or in part, to anyone.',
        'You must not record classes — physical or online — by any means.',
        'Breaching this section is a serious matter. It may result in your enrolment being ended without refund, and we reserve the right to take further action.',
      ],
    },
    {
      heading: 'Behaviour in class',
      body: [
        'We expect every student to treat teachers, staff and fellow students with respect, and to behave in a way that lets everyone learn. This applies equally in the hall, in online sessions and on our Telegram channels.',
        // CONFIRM: removal without refund
        'A student who disrupts classes, behaves offensively, or is dishonest in papers or tests may be asked to leave the class. In serious cases, enrolment will be ended and no refund will be due for the current month.',
      ],
    },
    {
      heading: 'Timetables and changes',
      list: [
        'Timetables may change. Changes will be announced on the batch\'s Telegram channel, which every student should follow.',
        'We may occasionally need to cancel or move a class. Where we do, we will reschedule it, provide a recording, or apply a credit as set out in the Refund Policy.',
        'Classes missed by a student are not made up individually. Recordings, where available, are released on the LMS.',
      ],
    },
    {
      heading: 'Online classes',
      list: [
        'For online classes you need a device and an internet connection suitable for live video. These are your responsibility.',
        'Online classes are for enrolled students only. Links and access details must not be shared.',
        // CONFIRM: recording policy
        'We may record online classes for release on the LMS to enrolled students. Recordings are provided at our discretion and are covered by the copyright section above.',
      ],
    },
    {
      heading: 'Telegram and WhatsApp',
      list: [
        'Our Telegram channels are for announcements, timetables and materials for the batch concerned. Please do not post unrelated content.',
        'Communications on WhatsApp should be about the classes. Please be courteous and patient — messages are answered during reasonable hours.',
        'We may remove anyone from a channel who posts offensive, disruptive or unrelated content.',
      ],
    },
    {
      heading: 'Results',
      body: [
        'We work hard to prepare every student, and we are proud of what our students achieve. However, examination results depend on many things, including the student\'s own effort. We do not guarantee any particular result, grade or ranking.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'To the extent permitted by law, we are not liable for any indirect or consequential loss arising from your enrolment, the classes, the LMS or the website — including loss caused by internet or platform failures outside our control, or by a student\'s own equipment. Nothing in these terms limits liability that cannot be limited by law.',
      ],
    },
    {
      heading: 'Ending your enrolment',
      list: [
        'You may stop attending at any time by simply not paying for the following month. There is no notice period.',
        'We may end an enrolment for a breach of these terms, as described above.',
        'When enrolment ends, LMS access ends with it. Please download anything you are entitled to keep before then.',
      ],
    },
    {
      heading: 'The website',
      body: [
        'The information on tidas.lk is provided for general information about the classes and may change without notice. Links to third-party sites — Telegram, WhatsApp, YouTube, Facebook, TikTok and the LMS — are provided for convenience; those sites have their own terms.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These terms are governed by the laws of Sri Lanka, and any dispute will be subject to the jurisdiction of the courts of Sri Lanka.',
      ],
    },
    {
      heading: 'Changes to these terms',
      body: [
        'We may update these terms from time to time. The date at the top shows when they were last changed. Continuing to attend classes or use the LMS after a change means you accept the updated terms. Significant changes will be announced on our Telegram channels.',
      ],
    },
    contactBlock,
  ],
}

export const policies = {
  'privacy-policy': privacyPolicy,
  'terms-and-conditions': termsAndConditions,
  'refund-policy': refundPolicy,
}

export const policyList = [privacyPolicy, termsAndConditions, refundPolicy]

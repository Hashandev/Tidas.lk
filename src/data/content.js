/* ============================================================
   TIDAS NIKESHALA — Site content
   Single source of truth. Bilingual: Sinhala kicker + English.
   Edit here, the UI follows.
   ============================================================ */

export const brand = {
  name: 'Tidas Nikeshala',
  nameSinhala: 'තිදස් නිකේෂලා',
  initials: 'TN',
  subject: 'A/L Physics',
  tagline: 'Smart Physics',
  taglineSinhala: 'භෞතික විද්‍යාව සරලව',
  /* Wordmark used by the navbar and footer */
  siteName: 'tidas.lk',
  /* Call line — deliberately different from the WhatsApp number below */
  phone: '070 377 3488',
  email: 'info@tidas.lk',
  lmsUrl: 'https://students.tidas.lk',
  /* wa.me needs the number with no +, spaces or leading zero */
  whatsappUrl: 'https://wa.me/94701684511',
  telegramUrl: 'https://t.me/sptidas',
  facebookUrl: 'https://www.facebook.com/share/1HUaKHeqjB/?mibextid=wwXIfr',
  youtubeUrl: 'https://youtube.com/@physicsfromtidas6787?si=govQlzyFlkR5lLOy',
  tiktokUrl: 'https://www.tiktok.com/@tidasnikeshala?_r=1&_t=ZS-99NGCouYyrU',
}

export const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Telegram', href: '#telegram' },
  { label: 'FAQ', href: '#faq' },
]

/* ---------- Scrolling ticker above the navbar ---------- */
export const ticker = [
  '2028 A/L Theory — ලියාපදිංචිය දැන් විවෘතයි',
  '2026 Revision class starts this September',
  'නොමිලේ සම්මන්ත්‍රණය — සෑම මාසයකම අවසන් ඉරිදා',
  'Every class now recorded on the LMS',
  'දිවයින පුරා ලියාපදිංචි මධ්‍යස්ථාන 14ක්',
]

/* ---------- Hero ---------- */
export const hero = {
  /* Not rendered — the badge pill was removed from the hero. */
  badge: 'SMART PHYSICS',
  /* Wordmark, set in Gemunu Libre. English was 'Tidas' / 'Nikeshala'. */
  title: 'තිදස්',
  titleAccent: 'නිකේශල',

  /* Not rendered — the hero shows badge, title, buttons and stats only.
     Kept here so the copy isn't lost if you want it back. */
  kicker: 'භෞතික විද්‍යාව සරලව',
  lead:
    'Physics is not a subject to be memorised. Twelve years of teaching A/L Physics on one rule — understanding comes first, the equation comes second, and a paper comes every week.',
  leadSinhala: 'සෑම පාඩමක්ම මතක තබා ගැනීමෙන් නොව, අවබෝධයෙන් ආරම්භ වේ.',
}

/* ---------- "Our Story" highlight cards ---------- */
export const highlights = [
  {
    icon: 'trophy',
    stat: '7',
    statLabel: 'Island Ranks',
    title: 'Island ranking students',
    body: 'Students from these classes have placed inside the island top 20 for Physics across seven separate years.',
  },
  {
    icon: 'clock',
    stat: '12',
    statLabel: 'Years',
    title: 'Over a decade of teaching',
    body: 'A syllabus-mapped method refined for twelve years and rebuilt each year against the latest examiner reports.',
  },
  {
    icon: 'chart',
    stat: '95',
    statLabel: '% A/B',
    title: 'Results that hold',
    body: 'Not one strong year — a decade of pass rates staying above ninety percent, batch after batch.',
  },
  {
    icon: 'pin',
    stat: '14',
    statLabel: 'Centres',
    title: 'Village to city',
    body: 'Fourteen registration centres island-wide plus a live online batch, so distance never decides who gets to learn.',
  },
]

export const story = {
  eyebrow: 'About the teacher',
  heading: 'Our Story',
  photo: '/assets/photos/teacher-story.jpg',

  /* Not rendered — kept in case you want the Sinhala kicker back. */
  kicker: 'අපගේ කතාව',

  /* Biography — supplied copy, kept verbatim, split at sentence breaks. */
  paragraphs: [
    'ගුරුවරයා කොළඹ ආනන්ද විද්‍යාලයෙන් 2020 වර්ශයේදී උසස්පෙල ගණිත අංශයෙන් පෙනී සිට AAA සාමාර්ථ සහිතව සමත් වී ඇත.',
    'එයින් මොරටුව විශ්ව විද්‍යාලයට පිවිස යාන්ත්‍රික ඉංජිනේරු ගෞරව උපාධියක් සම්පූර්ණ කර ඇත.',
    '2022 වසරේ සිට භෞතික විද්‍යා විශය ඉගැන්වීම් කටයුතු සිදුකරන අතර ඉතා ඉක්මනින් ගම්පහ නගරයේ වර්ධනය වන භෞතික විද්‍යා සන්නාමය බවට පත් වී ඇත.',
  ],

  /* Drawn straight from the biography above — no invented figures. */
  facts: [
    { icon: 'school', label: 'පාසල', value: 'කොළඹ ආනන්ද විද්‍යාලය' },
    { icon: 'award', label: '2020 උසස් පෙළ', value: 'ගණිත අංශය — AAA' },
    { icon: 'graduation', label: 'උපාධිය', value: 'මොරටුව විශ්ව විද්‍යාලය — යාන්ත්‍රික ඉංජිනේරු' },
    { icon: 'board', label: 'ඉගැන්වීම්', value: '2022 වසරේ සිට' },
  ],
}

/* ---------- Testimonials ---------- */
export const testimonialsIntro = {
  heading: 'What students say',

  /* Not rendered — the section shows the heading only. */
  eyebrow: 'Student reviews',
  lede: 'Messages from students, exactly as they were sent. Tap any one to read it in full.',
  kicker: 'සිසුන් කියන දේ',
}

/* Screenshots live in public/assets/reviews/. To add more, drop the file in
   with the next number in sequence and raise the count below. */
export const reviewPhotos = Array.from(
  { length: 11 },
  (_, i) => `/assets/reviews/review-${String(i + 1).padStart(2, '0')}.jpg`,
)

/* ---------- Telegram channels ---------- */
export const telegramIntro = {
  heading: 'Our Telegram Channels',
  lede: 'Timetables, tutes, papers and announcements — free to join.',

  /* Not rendered — kept in case you want the Sinhala kicker back. */
  kicker: 'ටෙලිග්‍රෑම් නාලිකා',
}

/* Title renders as: {pre} {accent} {post}, with `accent` picked out in navy. */
export const telegramChannels = [
  {
    pre: '2028',
    accent: 'Theory',
    post: 'Channel',
    url: 'https://t.me/+ZiSFRxqBbIQ3NGU1',
  },
  {
    pre: '2027',
    accent: 'Smart Revision',
    post: 'Channel',
    url: 'https://t.me/+XUAzcEAt2r44NWZl',
  },
  {
    pre: '',
    accent: 'Smart Physics',
    post: 'Main Channel',
    url: 'https://t.me/sptidas',
  },
]

/* ---------- FAQ ---------- */
export const faqIntro = {
  eyebrow: 'Q&A',
  heading: 'Frequently Asked Questions',

  /* Not rendered — kept in case you want them back. */
  kicker: 'ප්‍රශ්න සහ පිළිතුරු',
  lede: 'If your question is not here, message us on WhatsApp — someone answers within the day.',
}

/* Each entry is one accordion row. `venue` and `schedule` are optional —
   an item with a plain `a` string renders as a paragraph instead. */
export const faqs = [
  {
    q: 'LMS එකට join වෙන්නෙ කොහොමද?',
    a: 'උඩ තියෙන student login කියන button එක click කරන්න. ඒකෙන් ඔයාව direct LMS එකට අරගෙන යනවා.',
  },
  {
    q: 'Physical පන්ති මොනවද?',
    venue: 'ගම්පහ — සිප්සර',
    schedule: [
      { batch: '2028 Theory', day: 'සෙනසුරාදා', time: '7.30 - 12.00' },
      { batch: '2027 Theory', day: 'සෙනසුරාදා', time: '1.00 - 5.30' },
      { batch: '2027 Revision', day: 'සිකුරාද', time: '7.30 - 1.30' },
      { batch: '2027 Paper', day: 'සිකුරාද', time: '2.00 - 5.30' },
    ],
  },
  {
    q: 'Online පන්ති මොනවද?',
    schedule: [{ batch: '2027 Revision', day: 'අඟහරුවාදා හවස', time: '7.00 - 11.00' }],
  },
]

/* ---------- Footer ---------- */

/* Policy pages — hrefs are placeholders until the pages exist. */
export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Refund Policy', href: '#' },
]

export const developer = {
  name: 'Inwaits',
  url: 'https://inwaits.com/',
}

export const footerLinks = [
  {
    title: 'Channels',
    links: [
      { label: '2028 Theory', href: '#telegram' },
      { label: '2027 Smart Revision', href: '#telegram' },
      { label: 'Smart Physics Main', href: '#telegram' },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Student Login (LMS)', href: '#' },
      { label: 'Our Story', href: '#story' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'WhatsApp', href: brand.whatsappUrl, icon: 'whatsapp' },
      { label: 'Telegram', href: brand.telegramUrl, icon: 'telegram' },
      { label: 'Facebook', href: brand.facebookUrl, icon: 'facebook' },
      { label: 'YouTube', href: brand.youtubeUrl, icon: 'youtube' },
      { label: 'TikTok', href: brand.tiktokUrl, icon: 'tiktok' },
    ],
  },
]

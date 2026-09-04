# Tidas Nikeshala — A/L Physics

React + Vite landing page for Tidas Nikeshala's A/L Physics classes.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle
```

## Where things live

```
index.html                 page shell, SEO tags, Google Fonts
src/main.jsx               React entry
src/App.jsx                section order
src/data/content.js        ← ALL copy, classes, FAQ, links. Edit here first.
src/styles/global.css      design tokens, buttons, headings, reveal animation
src/components/*.jsx|css   one component + one stylesheet per section
src/hooks/                 useInView, useCountUp, useScrollState
public/assets/             portrait image, favicon
```

## Editing content

Almost nothing needs a component change. `src/data/content.js` drives:

- `brand` — name, phone, email, and every external link (**WhatsApp, Telegram,
  Facebook, YouTube and the LMS login are all `'#'` placeholders — set these first**)
- `ticker` — the scrolling strip above the navbar (mixed Sinhala/English)
- the `*Intro` objects (`announcementsIntro`, `classesIntro`, `faqIntro`, …) —
  each holds the Sinhala `kicker` and the English `heading` for one section
- `announcements` — the three cards under the hero
- `heroStats`, `highlights` — the animated counters
- `batches` — the 2026 / 2027 / 2028 tabs and their course cards
- `testimonials`, `telegramChannels`, `faqs`, `footerLinks`

Stat numbers count up when scrolled into view, so keep them as plain numbers.

## Design system

The palette is built on **three colours** — ink, slate and sky tint. Everything
else is derived from them, and the accent blue appears sparingly. Tokens live on
`:root` in `src/styles/global.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0F1626` | dark sections, headings, primary buttons, footer |
| `--slate` | `#5C6880` | body text |
| `--sky-tint` | `#E3EEF9` | the main light surface — cards, alternating sections |
| `--ink-soft` / `--ink-line` | `#1A2338` / `#2A3448` | raised surfaces and borders on ink |
| `--slate-light` / `--slate-dark` | `#8D98AC` / `#3F4A60` | muted and strong text |
| `--tint-deep` / `--tint-soft` | `#CBDFF2` / `#F2F7FC` | borders on tint, and a barely-there wash |
| `--accent` | `#3E8FD0` | one accent — links, active states, the odd CTA |

Change a colour once here and it propagates everywhere.

**Section rhythm** (set by `.section--tint`, `--wash` and `--ink` in `App.jsx`):
hero tint → announcements white → story **ink** → classes tint → testimonials
white → telegram wash → FAQ white → CTA **ink** → footer **ink**. The two ink
sections are the contrast anchors; don't add a third without removing one.

## Notes

- The hero canvas (`ParticleField.jsx`) pauses when scrolled out of view and
  renders a single static frame under `prefers-reduced-motion`.
- Replace `public/assets/teacher-portrait.jpg` with a 3:4 portrait; it is used in
  both the hero and the story section.
- All copy is placeholder — student names, results and counts should be replaced
  with real figures before going live.

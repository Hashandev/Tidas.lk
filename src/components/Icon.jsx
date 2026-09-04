/* Inline SVG icon set — stroke icons inherit currentColor. */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  book: (
    <g {...stroke}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </g>
  ),
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </g>
  ),
  arrowRight: (
    <g {...stroke}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </g>
  ),
  arrowDown: (
    <g {...stroke}>
      <line x1="12" y1="4" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </g>
  ),
  chevron: (
    <g {...stroke}>
      <polyline points="6 9 12 15 18 9" />
    </g>
  ),
  phone: (
    <g {...stroke}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 22 16.9z" />
    </g>
  ),
  mail: (
    <g {...stroke}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <polyline points="3 7 12 13 21 7" />
    </g>
  ),
  pin: (
    <g {...stroke}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
  trophy: (
    <g {...stroke}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 5H4.5A2.5 2.5 0 0 0 4.7 10 5 5 0 0 0 8 12" />
      <path d="M17 5h2.5a2.5 2.5 0 0 1-.2 5A5 5 0 0 1 16 12" />
      <line x1="12" y1="14" x2="12" y2="17" />
      <path d="M8.5 20h7l-.7-3h-5.6z" />
    </g>
  ),
  chart: (
    <g {...stroke}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="6" y="12" width="3" height="5" rx="1" />
      <rect x="11" y="8" width="3" height="9" rx="1" />
      <rect x="16" y="4" width="3" height="13" rx="1" />
    </g>
  ),
  /* Mortarboard — for a degree */
  graduation: (
    <g {...stroke}>
      <path d="M12 4.2 22 8.8 12 13.4 2 8.8z" />
      <path d="M6.6 10.9v4.3c0 1.4 2.4 2.6 5.4 2.6s5.4-1.2 5.4-2.6v-4.3" />
      <path d="M22 8.8v5.4" />
    </g>
  ),
  /* School building — for an institution */
  school: (
    <g {...stroke}>
      <path d="M2.5 20.5h19" />
      <path d="M5 20.5V10.2l7-4.4 7 4.4v10.3" />
      <path d="M10 20.5v-4.6h4v4.6" />
      <circle cx="12" cy="11.6" r="1.3" />
    </g>
  ),
  /* Medal with ribbons — for an exam result */
  award: (
    <g {...stroke}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.8 13.6 7.5 21l4.5-2.4 4.5 2.4-1.3-7.4" />
    </g>
  ),
  plus: (
    <g {...stroke}>
      <line x1="12" y1="5.5" x2="12" y2="18.5" />
      <line x1="5.5" y1="12" x2="18.5" y2="12" />
    </g>
  ),
  minus: (
    <g {...stroke}>
      <line x1="5.5" y1="12" x2="18.5" y2="12" />
    </g>
  ),
  /* Music note — stands in for TikTok */
  tiktok: (
    <g {...stroke}>
      <circle cx="8.5" cy="16.5" r="3.5" />
      <path d="M12 16.5V4h3a4.5 4.5 0 0 0 4.5 4.5" />
    </g>
  ),
  /* Board on a stand — for teaching */
  board: (
    <g {...stroke}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7.5 8.5h6" />
      <path d="M7.5 11.8h3.5" />
      <path d="M12 16v2.6" />
      <path d="M9 21.2 12 18.6l3 2.6" />
    </g>
  ),
  spark: (
    <g {...stroke}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </g>
  ),
  users: (
    <g {...stroke}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.9" />
      <path d="M17.6 14.3A6.2 6.2 0 0 1 21.2 20" />
    </g>
  ),
  play: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5z" />
    </g>
  ),
  laptop: (
    <g {...stroke}>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <line x1="2" y1="19.5" x2="22" y2="19.5" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <polyline points="5 12.5 10 17.5 19 7" />
    </g>
  ),
  atom: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)" />
    </g>
  ),
  menu: (
    <g {...stroke}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </g>
  ),
  close: (
    <g {...stroke}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </g>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.03-.51-.07-.15-.66-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34m-5.42 7.4a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.16 11.9c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.41z"
    />
  ),
  telegram: (
    <path
      fill="currentColor"
      d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm4.9 7.22c.1 0 .33.02.47.14a.5.5 0 0 1 .17.33c.02.09.04.3.02.47-.18 1.9-.96 6.5-1.36 8.63-.17.9-.5 1.2-.82 1.23-.7.06-1.23-.46-1.9-.9-1.06-.7-1.65-1.13-2.68-1.8-1.19-.78-.42-1.21.26-1.91.17-.19 3.24-2.98 3.3-3.23.01-.03.02-.15-.05-.21-.07-.06-.18-.04-.25-.02-.1.02-1.8 1.14-5.06 3.34-.48.33-.91.5-1.3.48-.43 0-1.25-.24-1.87-.44-.75-.24-1.35-.37-1.3-.79.03-.21.33-.43.9-.66 3.5-1.52 5.83-2.53 7-3.01 3.33-1.39 4.02-1.63 4.47-1.64z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.5 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.02 24 18.06 24 12.07z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"
    />
  ),
}

export default function Icon({ name, size = 20, className = '', ...rest }) {
  const glyph = paths[name]
  if (!glyph) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  )
}

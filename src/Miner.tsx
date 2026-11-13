/** Original vector artwork, sized to the mine's 1000 × 580 viewBox. */
export function Miner() {
  return <g transform="translate(365 138)" strokeLinejoin="round" strokeLinecap="round">
    <defs>
      <linearGradient id="miner-shirt" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#b8c0a0" /><stop offset="1" stopColor="#697a60" />
      </linearGradient>
      <linearGradient id="miner-skin" x1="0" y1="0" x2="1" y2=".6">
        <stop stopColor="#edc399" /><stop offset="1" stopColor="#bd825d" />
      </linearGradient>
      <linearGradient id="miner-hat" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#d5b77a" /><stop offset="1" stopColor="#9c793f" />
      </linearGradient>
    </defs>
    {/* Ground shadow, stool, and boots anchor the figure to the surface. */}
    <ellipse cx="52" cy="49" rx="48" ry="5" fill="#614631" opacity=".22" />
    <path d="M28 12l-7 35m44-35 8 35M19 33h52" stroke="#614a35" strokeWidth="5" />
    <path d="M24 12h48" stroke="#ac8050" strokeWidth="7" />
    <path d="M34 9l-2 18 13 13m14-31 9 13 9 17" fill="none" stroke="#485b5c" strokeWidth="14" />
    <path d="M32 25l13 13m24-16 7 15" stroke="#758181" strokeWidth="2" />
    <path d="M38 35l10 1 8 8q2 5-4 5H35l-2-6zm32 0 11-1 12 9q3 5-4 5H72l-3-5z" fill="#514039" stroke="#3e332c" strokeWidth="2" />
    <path d="M35 47h19m18-1h19" stroke="#aa8e67" strokeWidth="2" />
    {/* Collared work shirt, worn denim bib, and leather suspenders. */}
    <path d="M32-29q16-9 32 0l9 17-4 25q-19 7-43-1l-2-24z" fill="url(#miner-shirt)" stroke="#52624d" strokeWidth="2" />
    <path d="M40-30l8 12-10 5-7-13m24-4-7 12 11 5 5-13" fill="#d1d2b6" stroke="#78846b" strokeWidth="1.3" />
    <path d="M33-24l4 24m25-24-5 24" stroke="#725843" strokeWidth="5" />
    <path d="M35-5l25-1 3 21q-17 5-30-1z" fill="#52696a" stroke="#3e5455" strokeWidth="2" />
    <path d="M41 0h13v9q-6 4-13 0z" fill="#657d7b" stroke="#a0a798" strokeWidth="1" />
    <circle cx="37" cy="-5" r="2" fill="#d2ac64" /><circle cx="59" cy="-5" r="2" fill="#d2ac64" />
    {/* Bent sleeves and forearms reach naturally toward the winch handle. */}
    <path d="M29-22q-9 7-11 19l17 10" fill="none" stroke="#52624d" strokeWidth="15" />
    <path d="M29-22q-9 7-11 19l17 10" fill="none" stroke="url(#miner-shirt)" strokeWidth="11" />
    <path d="M63-22l14 16 17 6" fill="none" stroke="#52624d" strokeWidth="15" />
    <path d="M63-22l14 16 17 6" fill="none" stroke="url(#miner-shirt)" strokeWidth="11" />
    <path d="M23 0l13 7m50-9 12 5" stroke="#d0cfad" strokeWidth="10" />
    <path d="M36 7l8 2m52-6 14 6" stroke="url(#miner-skin)" strokeWidth="8" />
    <path d="M104 10h22" stroke="#4e4337" strokeWidth="6" />
    <path d="M107 6q5-3 7 1l1 6-7 1" fill="#dba77d" stroke="#9e6b4e" strokeWidth="1.3" />
    <path d="M109 8l4 1m-4 2 4 1" stroke="#a27154" strokeWidth=".8" />
    {/* Shaded face, ears, hair, brows, nose, and a layered grey beard. */}
    <path d="M42-37v10q6 6 13-1v-11" fill="url(#miner-skin)" stroke="#a87856" strokeWidth="1.5" />
    <ellipse cx="33" cy="-50" rx="4" ry="6" fill="#cb956e" />
    <ellipse cx="65" cy="-50" rx="4" ry="6" fill="#bd825d" />
    <path d="M33-66q16-13 32 1l-1 21q-4 14-15 15-12-2-16-17z" fill="url(#miner-skin)" stroke="#a97853" strokeWidth="1.5" />
    <path d="M34-62l2 15-5-5v-12m31 1-1 16 5-5v-11" fill="#7b7667" />
    <path d="M35-45q5 4 9 2l5 4 6-4 8-3q0 18-14 23-15-6-14-22z" fill="#b6b5a1" stroke="#7e8171" strokeWidth="1" />
    <path d="M38-40l4 7m2-4 3 9m5-9-1 10m6-13-2 7" fill="none" stroke="#dfdbc4" strokeWidth="1.5" />
    <path d="M37-55q4-3 8-1m9 0q4-2 7 0" fill="none" stroke="#686b5b" strokeWidth="2.5" />
    <path d="M39-52h4m12 0h4" stroke="#3d4438" strokeWidth="2" />
    <path d="M49-53l-2 9q3 2 6-1" fill="none" stroke="#a16f4e" strokeWidth="1.5" />
    <path d="M43-40q6-3 13 0" stroke="#777b69" strokeWidth="3" fill="none" />
    <path d="M46-37q4 2 7-1" stroke="#775c48" strokeWidth="1.5" fill="none" />
    {/* Creased felt brim and a small brass headlamp. */}
    <path d="M29-65l6-18q4-8 12-3l7-1q7-1 10 8l5 15z" fill="url(#miner-hat)" stroke="#896b3e" strokeWidth="2" />
    <path d="M40-81l-3 10m20-11 4 12" stroke="#e6cc93" strokeWidth="2" />
    <path d="M31-69q18 4 35-1l2 7H29z" fill="#6c5840" />
    <path d="M22-65q25 5 53-1l-1 5q-29 7-52-1z" fill="#b9955b" stroke="#896b3e" strokeWidth="1.5" />
    <circle cx="52" cy="-68" r="6" fill="#ba9d60" stroke="#574f3a" strokeWidth="2" />
    <circle cx="52" cy="-68" r="3.5" fill="#fff1b8" /><circle cx="51" cy="-69" r="1.5" fill="#fffbea" />
  </g>;
}

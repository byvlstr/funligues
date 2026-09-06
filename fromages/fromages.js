const FROMAGES = [
  'Camembert','Emmental','Mozzarella','Raclette','Bûche de chèvre',
  'Comté','Saint Nectaire','Roquefort','Reblochon','Parmesan',
  'Ossau-Iraty','Mimolette','Gorgonzola','Beaufort','Cantal'
];

/* ── ICÔNES FROMAGES (viewBox 0 0 100 100, fond transparent) ── */

const SVG_CAMEMBERT = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,42) scale(0.575)"><ellipse cx="0" cy="46" rx="86" ry="16" fill="#000" opacity="0.08"/><path d="M0,28 L77,38 A80 40 0 0 1 7,68 Z" fill="#e8cd85"/><path d="M0,0 L77,10 L77,38 L0,28 Z" fill="#f7dc9c"/><path d="M0,0 L77,10 L77,17 L0,7 Z" fill="#fbf7ea"/><path d="M0,0 L7,40 L7,68 L0,28 Z" fill="#efd08a"/><path d="M0,0 L7,40 L7,47 L0,7 Z" fill="#f2ecd9"/><path d="M-80,0 A80 40 0 0 0 80,0 L80,28 A80 40 0 0 1 -80,28 Z" fill="#eee7d0"/><path d="M-80,0 A80 40 0 0 0 -20,38 L-20,66 A80 40 0 0 1 -80,28 Z" fill="#fbf7ea" opacity="0.75"/><path d="M-30,38 L-30,66" stroke="#ded4b6" stroke-width="1.4" opacity="0.6"/><path d="M-56,29 L-56,57" stroke="#ded4b6" stroke-width="1.4" opacity="0.6"/><path d="M-4,40 L-4,68" stroke="#ded4b6" stroke-width="1.4" opacity="0.5"/><path d="M22,39 L22,67" stroke="#ded4b6" stroke-width="1.4" opacity="0.5"/><path d="M50,32 L50,60" stroke="#ded4b6" stroke-width="1.4" opacity="0.5"/><path d="M0,0 L7,40 A80 40 0 1 1 77,10 Z" fill="#fdfaf0"/><path d="M0,0 L-38,-13 A80 40 0 0 0 -50,29 Q-24,4 0,0 Z" fill="#ffffff" opacity="0.7"/><path d="M-60,-12 Q-30,-24 4,-25" fill="none" stroke="#e7e0c9" stroke-width="1.6" opacity="0.75"/><path d="M-70,4 Q-36,-8 0,-9" fill="none" stroke="#e7e0c9" stroke-width="1.6" opacity="0.6"/><path d="M-58,22 Q-28,10 -2,8" fill="none" stroke="#e7e0c9" stroke-width="1.6" opacity="0.55"/><path d="M22,-30 Q48,-24 66,-8" fill="none" stroke="#e7e0c9" stroke-width="1.6" opacity="0.6"/></g></svg>`;

const SVG_EMMENTAL = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(55.5,29.5) scale(0.91)"><ellipse cx="0" cy="60" rx="62" ry="13" fill="#000" opacity="0.08"/><path d="M30,-28 A58 30 0 0 1 42,22 L42,52 A58 30 0 0 0 30,2 Z" fill="#d9a63c"/><path d="M-54,6 L42,22 L42,52 L-54,36 Z" fill="#f6d976"/><path d="M-54,10 Q-14,20 42,30 L42,50 Q-14,40 -54,30 Z" fill="#fdeeb2" opacity="0.5"/><ellipse cx="-30" cy="24" rx="9" ry="7" fill="#e4be55"/><ellipse cx="-4" cy="32" rx="7" ry="6" fill="#e4be55"/><ellipse cx="22" cy="36" rx="5.5" ry="5" fill="#e4be55"/><ellipse cx="10" cy="20" rx="4.5" ry="4" fill="#e4be55"/><path d="M-54,6 L30,-28 A58 30 0 0 1 42,22 Z" fill="#fbe694"/><path d="M-54,6 L-6,-14 A58 30 0 0 0 4,14 Q-26,12 -54,6 Z" fill="#fef5c8" opacity="0.7"/><ellipse cx="-12" cy="-2" rx="7" ry="4" fill="#eccd68"/><ellipse cx="14" cy="-10" rx="5" ry="3" fill="#eccd68"/><ellipse cx="22" cy="8" rx="4" ry="2.6" fill="#eccd68"/></g></svg>`;

const SVG_MOZZARELLA = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(60,46) scale(0.5)"><ellipse cx="6" cy="60" rx="80" ry="15" fill="#000" opacity="0.07"/><path d="M-58,4 Q-58,-52 8,-52 Q72,-52 72,6 Q72,52 8,52 Q-46,52 -58,4 Z" fill="#f6f6ec"/><path d="M-58,4 Q-58,-52 8,-52 Q-26,-46 -34,4 Q-30,42 8,52 Q-46,52 -58,4 Z" fill="#ffffff" opacity="0.85"/><path d="M8,52 Q60,44 66,-8 Q76,26 60,44 Q40,54 8,52 Z" fill="#dedecd" opacity="0.5"/><ellipse cx="-16" cy="-26" rx="24" ry="13" fill="#ffffff" opacity="0.75"/><path d="M2,-52 Q10,-64 22,-53" fill="none" stroke="#e2e2d2" stroke-width="2.5" stroke-linecap="round"/><path d="M-58,4 Q-58,-52 8,-52 L8,52 Q-46,52 -58,4 Z" fill="#fbfbf4"/><path d="M-46,-26 Q-20,-34 6,-33" fill="none" stroke="#eaeadc" stroke-width="2" opacity="0.8"/><path d="M-52,-4 Q-24,-12 6,-11" fill="none" stroke="#eaeadc" stroke-width="2" opacity="0.7"/><path d="M-48,20 Q-22,12 6,13" fill="none" stroke="#eaeadc" stroke-width="2" opacity="0.6"/><circle cx="-32" cy="-14" r="3" fill="#f0efe0"/><circle cx="-14" cy="6" r="2.4" fill="#f0efe0"/><circle cx="-36" cy="26" r="2" fill="#f0efe0"/><g transform="translate(-72,50) rotate(-14)"><path d="M-40,-4 Q-42,-32 -8,-38 Q30,-42 44,-20 Q52,-2 34,10 Q0,20 -26,12 Q-38,6 -40,-4 Z" fill="#f9f9f0"/><path d="M-40,-4 Q-42,-32 -8,-38 Q-24,-24 -22,-6 Q-20,8 -4,16 Q-30,16 -40,-4 Z" fill="#ffffff" opacity="0.8"/><circle cx="0" cy="-16" r="3" fill="#eeeee0"/><circle cx="20" cy="-6" r="2.4" fill="#eeeee0"/><ellipse cx="-6" cy="-26" rx="18" ry="7" fill="#ffffff" opacity="0.6"/></g><g transform="translate(-30,64) rotate(-4)"><path d="M-36,-2 Q-38,-28 -6,-34 Q28,-38 40,-18 Q46,-2 30,8 Q0,16 -22,10 Q-34,4 -36,-2 Z" fill="#f4f4ea"/><path d="M-36,-2 Q-38,-28 -6,-34 Q-20,-22 -18,-6 Q-16,6 -2,12 Q-26,12 -36,-2 Z" fill="#fefefa" opacity="0.85"/><circle cx="6" cy="-14" r="2.6" fill="#e8e8d8"/><ellipse cx="-8" cy="-22" rx="14" ry="6" fill="#ffffff" opacity="0.5"/></g></g></svg>`;

const SVG_RACLETTE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(49.4,40.2) scale(0.63)"><ellipse cx="-4" cy="70" rx="86" ry="13" fill="#000" opacity="0.08"/><path d="M-72,-20 L24,-38 Q60,-32 60,12 L74,6 Q74,-44 36,-52 L-56,-32 Z" fill="#d98f34"/><path d="M-72,-20 L24,-38 Q60,-32 60,12 L64,10 Q64,-30 26,-30 L-64,-13 Z" fill="#efb060" opacity="0.6"/><path d="M60,12 Q60,52 24,58 L36,64 Q74,54 74,6 Z" fill="#bd7822"/><path d="M-72,-20 L24,-38 Q60,-32 60,12 Q60,52 24,58 L-72,48 Z" fill="#f7e6a8"/><path d="M-72,-20 L-26,-29 Q-32,12 -26,46 L-72,48 Z" fill="#fdf4cd" opacity="0.7"/><path d="M-72,42 L24,52 Q54,48 59,22 Q58,50 26,58 L-72,48 Z" fill="#e6d089" opacity="0.55"/><circle cx="-18" cy="6" r="2" fill="#fffbe2" opacity="0.9"/><circle cx="14" cy="20" r="1.6" fill="#fffbe2" opacity="0.85"/><circle cx="4" cy="-8" r="1.4" fill="#fffbe2" opacity="0.8"/><path d="M-72,48 L24,58 Q36,57 44,52 L24,62 L-72,54 Z" fill="#bd7822" opacity="0.8"/></g></svg>`;

const SVG_BUCHE_CHEVRE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(52.1,43.9) scale(0.42)"><ellipse cx="0" cy="52" rx="105" ry="13" fill="#000" opacity="0.08"/><path d="M-92,-32 L54,-32 A22 34 0 0 1 54,36 L-92,36 A22 34 0 0 1 -92,-32 Z" fill="#ece5d3"/><path d="M-92,-32 L54,-32 A22 34 0 0 0 40,-16 L-92,-16 A22 20 0 0 1 -92,-32 Z" fill="#fdfaf0" opacity="0.85"/><path d="M-92,20 L46,20 A22 34 0 0 1 54,36 L-92,36 A22 20 0 0 1 -92,20 Z" fill="#d8cfb6" opacity="0.6"/><path d="M-70,-32 Q-66,2 -70,36" fill="none" stroke="#d5cbae" stroke-width="1.6" opacity="0.7"/><path d="M-38,-32 Q-42,2 -38,36" fill="none" stroke="#d5cbae" stroke-width="1.6" opacity="0.7"/><path d="M-6,-32 Q-2,2 -6,36" fill="none" stroke="#d5cbae" stroke-width="1.6" opacity="0.6"/><path d="M26,-32 Q22,2 26,36" fill="none" stroke="#d5cbae" stroke-width="1.6" opacity="0.6"/><ellipse cx="-92" cy="-6" rx="14" ry="18" fill="#fdfaf0" opacity="0.6"/><g transform="translate(80,16)"><ellipse cx="0" cy="0" rx="24" ry="36" fill="#f5f0e0"/><ellipse cx="0" cy="0" rx="16" ry="27" fill="#fdfcf4"/><path d="M-24,0 A24 36 0 0 1 -8,-34 Q-20,-18 -20,0 Q-20,18 -8,34 A24 36 0 0 1 -24,0 Z" fill="#ffffff" opacity="0.7"/><circle cx="-6" cy="-10" r="2.4" fill="#eee9d6"/><circle cx="6" cy="6" r="2" fill="#eee9d6"/><circle cx="-2" cy="18" r="1.6" fill="#eee9d6"/></g></g></svg>`;

const SVG_COMTE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(52.3,43) scale(0.465)"><ellipse cx="-6" cy="72" rx="118" ry="14" fill="#000" opacity="0.08"/><path d="M-104,-22 L48,-42 Q80,-36 80,10 L94,4 Q94,-48 60,-56 L-88,-34 Z" fill="#a08258"/><path d="M-104,-22 L48,-42 Q80,-36 80,10 L84,8 Q84,-40 50,-34 L-96,-14 Z" fill="#c4a97c" opacity="0.6"/><circle cx="-40" cy="-28" r="1.6" fill="#7d6440" opacity="0.6"/><circle cx="10" cy="-36" r="1.4" fill="#7d6440" opacity="0.6"/><circle cx="58" cy="-38" r="1.4" fill="#7d6440" opacity="0.5"/><path d="M80,10 Q80,56 48,62 L60,68 Q94,58 94,4 Z" fill="#8d7048"/><path d="M-104,-22 L48,-42 Q80,-36 80,10 Q80,56 48,62 L-104,50 Z" fill="#f2d375"/><path d="M-104,-22 L-40,-31 Q-46,14 -40,48 L-104,50 Z" fill="#f8e5a6" opacity="0.65"/><path d="M-104,44 L48,56 Q76,52 79,22 Q78,52 50,62 L-104,50 Z" fill="#d9b556" opacity="0.5"/><circle cx="-24" cy="4" r="2.2" fill="#fdf2c8" opacity="0.9"/><circle cx="16" cy="-6" r="1.8" fill="#fdf2c8" opacity="0.9"/><circle cx="4" cy="30" r="1.6" fill="#fdf2c8" opacity="0.8"/><circle cx="42" cy="20" r="1.6" fill="#fdf2c8" opacity="0.8"/><path d="M-52,-2 Q-40,-6 -30,0" fill="none" stroke="#e7c76a" stroke-width="1.4" opacity="0.7"/><path d="M-104,50 L48,62 Q60,61 68,56 L48,66 L-104,56 Z" fill="#8d7048" opacity="0.8"/></g></svg>`;

const SVG_SAINT_NECTAIRE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(55.5,29.5) scale(0.91)"><ellipse cx="0" cy="60" rx="62" ry="13" fill="#000" opacity="0.08"/><path d="M30,-28 A58 30 0 0 1 42,22 L42,52 A58 30 0 0 0 30,2 Z" fill="#6b6862"/><path d="M-54,6 L42,22 L42,52 L-54,36 Z" fill="#f4ecd4"/><path d="M-54,6 L42,22 L42,29 L-54,13 Z" fill="#7d7a73"/><path d="M-54,10 Q-14,20 42,30 L42,50 Q-14,40 -54,30 Z" fill="#faf5e4" opacity="0.55"/><circle cx="-24" cy="30" r="2.6" fill="#e9dfc0" opacity="0.8"/><circle cx="6" cy="36" r="2.2" fill="#e9dfc0" opacity="0.8"/><circle cx="26" cy="40" r="1.8" fill="#e9dfc0" opacity="0.8"/><path d="M-54,6 L30,-28 A58 30 0 0 1 42,22 Z" fill="#77746d"/><path d="M-54,6 L-6,-14 A58 30 0 0 0 4,14 Q-26,12 -54,6 Z" fill="#918d85" opacity="0.75"/><circle cx="-26" cy="2" r="4" fill="#c9c4b6" opacity="0.7"/><circle cx="0" cy="-8" r="3.2" fill="#c9c4b6" opacity="0.55"/><circle cx="18" cy="4" r="3.6" fill="#4d4b46" opacity="0.5"/><circle cx="-8" cy="8" r="2.6" fill="#4d4b46" opacity="0.45"/><circle cx="22" cy="-12" r="2.4" fill="#c9903f" opacity="0.5"/><circle cx="30" cy="10" r="2.6" fill="#4d4b46" opacity="0.45"/></g></svg>`;

const SVG_ROQUEFORT = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="roqTopClip"><path d="M-84,6 Q-50,-16 -14,-40 Q34,-24 84,-4 Q50,20 16,42 Q-34,24 -84,6 Z"/></clipPath></defs><g transform="translate(50,39) scale(0.548)"><ellipse cx="0" cy="66" rx="88" ry="14" fill="#000" opacity="0.08"/><path d="M-84,6 Q-34,24 16,42 L16,60 Q-34,42 -84,24 Z" fill="#f2eee0"/><path d="M16,42 Q50,20 84,-4 L84,14 Q50,38 16,60 Z" fill="#e6e1d0"/><path d="M-84,6 Q-34,24 16,42 L16,48 Q-34,30 -84,12 Z" fill="#fdfcf6"/><path d="M16,42 Q50,20 84,-4 L84,2 Q50,26 16,48 Z" fill="#f4f0e2"/><circle cx="-52" cy="24" r="2.4" fill="#3f5049" opacity="0.65"/><circle cx="-18" cy="38" r="2" fill="#3f5049" opacity="0.6"/><circle cx="46" cy="34" r="2.2" fill="#3f5049" opacity="0.5"/><path d="M-84,6 Q-50,-16 -14,-40 Q34,-24 84,-4 Q50,20 16,42 Q-34,24 -84,6 Z" fill="#fbfaf2"/><g clip-path="url(#roqTopClip)"><path d="M-84,6 Q-56,-8 -30,-24 Q-24,4 -34,24 Q-60,16 -84,6 Z" fill="#ffffff" opacity="0.85"/><path d="M20,40 Q54,18 84,-4 Q76,16 40,38 Q30,42 20,40 Z" fill="#e9e4d4" opacity="0.55"/><path d="M-46,-4 Q-36,-16 -22,-12 Q-14,-2 -26,6 Q-42,8 -46,-4 Z" fill="#39473f"/><path d="M-6,-24 Q6,-32 18,-24 Q22,-14 8,-12 Q-6,-14 -6,-24 Z" fill="#2f3c35"/><path d="M22,-4 Q40,-14 54,-4 Q58,10 40,12 Q22,10 22,-4 Z" fill="#3d4b43"/><path d="M-24,16 Q-10,8 4,16 Q8,28 -8,30 Q-24,28 -24,16 Z" fill="#33413a"/><path d="M-62,10 Q-54,4 -46,10 Q-44,18 -54,20 Q-62,18 -62,10 Z" fill="#3d4b43"/><path d="M14,24 Q28,18 38,26 Q40,36 26,36 Q14,34 14,24 Z" fill="#2f3c35"/><path d="M-30,-26 Q-22,-32 -14,-27 Q-12,-20 -22,-19 Q-30,-20 -30,-26 Z" fill="#44534a"/><path d="M50,-16 Q60,-20 66,-13 Q66,-6 56,-6 Q49,-9 50,-16 Z" fill="#39473f"/><path d="M-44,26 Q-34,22 -28,28 Q-27,35 -37,35 Q-45,33 -44,26 Z" fill="#3d4b43"/><circle cx="4" cy="-2" r="5" fill="#2f3c35"/><circle cx="-40" cy="12" r="3.4" fill="#44534a"/><circle cx="34" cy="6" r="3" fill="#39473f"/><circle cx="-12" cy="-14" r="3.2" fill="#3d4b43"/><circle cx="60" cy="0" r="2.6" fill="#44534a"/><circle cx="-2" cy="30" r="2.8" fill="#39473f"/><circle cx="24" cy="-18" r="2.4" fill="#44534a"/><circle cx="-16" cy="4" r="3" fill="#ffffff" opacity="0.9"/><circle cx="46" cy="-12" r="2.4" fill="#ffffff" opacity="0.85"/><circle cx="-34" cy="-14" r="2" fill="#ffffff" opacity="0.8"/><circle cx="12" cy="14" r="2.2" fill="#ffffff" opacity="0.85"/></g></g></svg>`;

const SVG_REBLOCHON = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,39.5) scale(0.657)"><ellipse cx="0" cy="52" rx="76" ry="14" fill="#000" opacity="0.08"/><path d="M-70,0 A70 34 0 0 0 70,0 L70,26 A70 34 0 0 1 -70,26 Z" fill="#e0a44e"/><path d="M-70,0 A70 34 0 0 0 -14,32 L-14,58 A70 34 0 0 1 -70,26 Z" fill="#eec078" opacity="0.75"/><path d="M40,26 A70 34 0 0 0 70,0 L70,26 A70 34 0 0 1 40,52 Z" fill="#b8802f" opacity="0.5"/><path d="M-44,24 L-44,50" stroke="#c98f3c" stroke-width="1.4" opacity="0.5"/><path d="M0,34 L0,60" stroke="#c98f3c" stroke-width="1.4" opacity="0.45"/><ellipse cx="0" cy="0" rx="70" ry="34" fill="#e8ae5a"/><path d="M-70,0 A70 34 0 0 1 -6,-33 Q-42,-18 -50,2 Q-42,20 -6,32 A70 34 0 0 1 -70,0 Z" fill="#f2c47c" opacity="0.8"/><path d="M0,33 A70 34 0 0 0 58,-18 Q68,4 50,20 Q30,32 0,33 Z" fill="#c2892f" opacity="0.4"/><ellipse cx="-24" cy="-10" rx="12" ry="6" fill="#f7ecd2" opacity="0.75"/><ellipse cx="14" cy="-16" rx="8" ry="4" fill="#f7ecd2" opacity="0.6"/><ellipse cx="26" cy="8" rx="9" ry="5" fill="#f7ecd2" opacity="0.55"/><ellipse cx="-8" cy="14" rx="7" ry="4" fill="#f7ecd2" opacity="0.5"/><circle cx="-40" cy="6" r="2.2" fill="#c2892f" opacity="0.5"/><circle cx="4" cy="-2" r="2" fill="#c2892f" opacity="0.45"/></g></svg>`;

const SVG_PARMESAN = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,37.1) scale(0.697)"><ellipse cx="0" cy="56" rx="66" ry="13" fill="#000" opacity="0.08"/><path d="M30,-26 Q54,-14 58,10 L58,42 Q54,18 30,6 Z" fill="#c99b3f"/><path d="M30,-26 Q54,-14 58,10 L58,18 Q52,-6 30,-18 Z" fill="#e0b862" opacity="0.7"/><circle cx="44" cy="18" r="1.6" fill="#a67d29" opacity="0.7"/><circle cx="48" cy="30" r="1.4" fill="#a67d29" opacity="0.6"/><path d="M-58,2 L-30,10 L4,4 L30,6 Q54,18 58,42 L26,44 L-16,38 L-58,34 Z" fill="#f3e2a8"/><path d="M-58,2 L-30,10 L-26,38 L-58,34 Z" fill="#faefc9" opacity="0.75"/><path d="M-58,28 L-16,32 L26,38 L58,36 L58,42 L26,44 L-16,38 L-58,34 Z" fill="#ddc57e" opacity="0.5"/><circle cx="-34" cy="20" r="1.5" fill="#fdf6dc"/><circle cx="-12" cy="26" r="1.3" fill="#fdf6dc"/><circle cx="8" cy="18" r="1.6" fill="#fdf6dc"/><circle cx="24" cy="30" r="1.2" fill="#fdf6dc"/><circle cx="-24" cy="34" r="1.2" fill="#e6d296"/><circle cx="14" cy="34" r="1.4" fill="#e6d296"/><circle cx="-2" cy="30" r="1.1" fill="#e6d296"/><path d="M-58,2 L-34,-24 L2,-32 L30,-26 Q54,-14 58,10 L30,6 L4,4 L-30,10 Z" fill="#f8ecc4"/><path d="M-58,2 L-34,-24 L-14,-18 Q-24,-2 -30,10 Z" fill="#fdf7e0" opacity="0.8"/><path d="M14,-30 Q40,-20 52,0 L30,6 Q26,-14 8,-28 Z" fill="#e8d69a" opacity="0.55"/><circle cx="-18" cy="-8" r="1.6" fill="#fffcec"/><circle cx="6" cy="-14" r="1.4" fill="#fffcec"/><circle cx="-6" cy="-2" r="1.2" fill="#e8d69a"/></g></svg>`;

const SVG_OSSAU_IRATY = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(35.5,41.2) scale(0.605)"><ellipse cx="24" cy="72" rx="76" ry="13" fill="#000" opacity="0.08"/><path d="M-26,-30 L48,-42 Q80,-36 80,10 L94,4 Q94,-48 60,-56 L-12,-42 Z" fill="#d9a83f"/><path d="M-26,-30 L48,-42 Q80,-36 80,10 L84,8 Q84,-40 50,-34 L-20,-23 Z" fill="#edc76b" opacity="0.65"/><circle cx="10" cy="-38" r="1.8" fill="#a87c22" opacity="0.6"/><circle cx="54" cy="-40" r="1.6" fill="#a87c22" opacity="0.55"/><circle cx="34" cy="-34" r="1.4" fill="#f6e2a8" opacity="0.6"/><path d="M80,10 Q80,56 48,62 L60,68 Q94,58 94,4 Z" fill="#b8892a"/><path d="M-26,-30 L48,-42 Q80,-36 80,10 Q80,56 48,62 L-26,54 Z" fill="#f9f0cf"/><path d="M-26,-30 L4,-35 Q-2,12 4,58 L-26,54 Z" fill="#fefae5" opacity="0.7"/><path d="M-26,48 L48,56 Q76,52 79,22 Q78,52 50,62 L-26,54 Z" fill="#e5d7a8" opacity="0.5"/><circle cx="12" cy="6" r="1.6" fill="#fffdf0" opacity="0.9"/><circle cx="46" cy="26" r="1.4" fill="#fffdf0" opacity="0.85"/><circle cx="26" cy="36" r="1.2" fill="#fffdf0" opacity="0.8"/><path d="M-26,54 L48,62 Q60,61 68,56 L48,66 L-26,60 Z" fill="#b8892a" opacity="0.8"/></g></svg>`;

const SVG_MIMOLETTE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="mimoRindClip"><path d="M-58,4 Q-58,-52 8,-52 Q72,-52 72,6 Q72,52 8,52 Q-46,52 -58,4 Z"/></clipPath></defs><g transform="translate(46.2,43) scale(0.639)"><ellipse cx="6" cy="60" rx="72" ry="14" fill="#000" opacity="0.07"/><path d="M-58,4 Q-58,-52 8,-52 Q72,-52 72,6 Q72,52 8,52 Q-46,52 -58,4 Z" fill="#9a958a"/><g clip-path="url(#mimoRindClip)"><path d="M-58,4 Q-58,-52 8,-52 Q-26,-46 -34,4 Q-30,42 8,52 Q-46,52 -58,4 Z" fill="#b3ada0" opacity="0.85"/><path d="M8,52 Q60,44 66,-8 Q76,26 60,44 Q40,54 8,52 Z" fill="#6f6b62" opacity="0.5"/><circle cx="26" cy="-24" r="3" fill="#7a766d" opacity="0.8"/><circle cx="46" cy="4" r="3.4" fill="#7a766d" opacity="0.75"/><circle cx="18" cy="20" r="2.6" fill="#7a766d" opacity="0.7"/><circle cx="40" cy="32" r="2.4" fill="#7a766d" opacity="0.65"/><circle cx="6" cy="-38" r="2.4" fill="#7a766d" opacity="0.7"/><circle cx="34" cy="-38" r="2" fill="#c4bfb2" opacity="0.7"/><circle cx="56" cy="-16" r="2.2" fill="#c4bfb2" opacity="0.6"/><circle cx="28" cy="6" r="2" fill="#c4bfb2" opacity="0.6"/></g><path d="M-58,4 Q-58,-52 8,-52 L8,52 Q-46,52 -58,4 Z" fill="#e0691f"/><path d="M-58,4 Q-58,-52 8,-52 L8,-44 Q-50,-44 -50,4 Q-50,44 8,44 L8,52 Q-46,52 -58,4 Z" fill="#8d867a"/><path d="M-50,4 Q-50,-44 8,-44 L8,44 Q-50,44 -50,4 Z" fill="#e97a26"/><path d="M-50,4 Q-50,-44 8,-44 Q-30,-36 -36,4 Q-32,36 8,44 Q-46,44 -50,4 Z" fill="#f59245" opacity="0.7"/><path d="M-24,-30 Q-6,-34 8,-32 L8,36 Q-8,36 -22,30 Q-14,0 -24,-30 Z" fill="#d75f18" opacity="0.35"/><circle cx="-30" cy="-14" r="2.2" fill="#fbb872" opacity="0.8"/><circle cx="-16" cy="10" r="1.8" fill="#fbb872" opacity="0.75"/><circle cx="-34" cy="22" r="1.6" fill="#fbb872" opacity="0.7"/></g></svg>`;

const SVG_GORGONZOLA = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="gorgoFaceClip"><path d="M-54,6 L42,22 L42,56 L-54,40 Z"/></clipPath></defs><g transform="translate(50,32) scale(0.767)"><ellipse cx="0" cy="62" rx="60" ry="13" fill="#000" opacity="0.08"/><path d="M30,-28 A58 30 0 0 1 42,22 L42,56 A58 30 0 0 0 30,6 Z" fill="#f0e9d6"/><path d="M30,-28 A58 30 0 0 1 42,22 L42,30 A58 30 0 0 0 30,-20 Z" fill="#d9c9a8"/><path d="M-54,6 L42,22 L42,56 L-54,40 Z" fill="#fbf6e4"/><g clip-path="url(#gorgoFaceClip)"><path d="M-54,6 L-16,12 Q-20,30 -16,46 L-54,40 Z" fill="#fffdf4" opacity="0.75"/><path d="M-54,34 Q-10,42 42,50 L42,56 L-54,40 Z" fill="#e5dcc2" opacity="0.55"/><path d="M-46,14 Q-34,10 -26,18 Q-18,26 -30,28 Q-44,26 -46,14 Z" fill="#6a8073" opacity="0.9"/><path d="M-12,16 Q0,10 10,18 Q16,28 2,30 Q-12,28 -12,16 Z" fill="#5b7264" opacity="0.85"/><path d="M16,28 Q28,24 34,32 Q36,42 24,42 Q15,39 16,28 Z" fill="#6a8073" opacity="0.8"/><path d="M-38,32 Q-28,28 -22,36 Q-20,44 -30,44 Q-38,42 -38,32 Z" fill="#5b7264" opacity="0.75"/><path d="M22,10 Q32,6 38,12 Q40,20 30,20 Q22,18 22,10 Z" fill="#7b9284" opacity="0.7"/><path d="M-6,36 Q4,34 10,40 Q10,48 0,47 Q-7,45 -6,36 Z" fill="#6a8073" opacity="0.7"/><circle cx="-30" cy="22" r="2" fill="#40564a" opacity="0.8"/><circle cx="6" cy="24" r="1.8" fill="#40564a" opacity="0.75"/><circle cx="28" cy="36" r="1.6" fill="#40564a" opacity="0.7"/></g><path d="M-54,6 L30,-28 A58 30 0 0 1 42,22 Z" fill="#fdfaef"/><path d="M-54,6 L-6,-14 A58 30 0 0 0 4,14 Q-26,12 -54,6 Z" fill="#ffffff" opacity="0.8"/><path d="M-18,-2 Q-8,-10 0,-2 Q4,6 -6,7 Q-16,6 -18,-2 Z" fill="#7b9284" opacity="0.7"/><path d="M14,-14 Q24,-18 30,-11 Q30,-4 20,-4 Q13,-7 14,-14 Z" fill="#6a8073" opacity="0.6"/><circle cx="24" cy="8" r="2.6" fill="#7b9284" opacity="0.55"/></g></svg>`;

const SVG_BEAUFORT = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,35.8) scale(0.767)"><ellipse cx="0" cy="62" rx="60" ry="13" fill="#000" opacity="0.08"/><path d="M26,-30 Q40,-16 46,18 L60,10 Q54,-26 38,-38 Z" fill="#9c6f31"/><path d="M26,-30 Q40,-16 46,18 L52,14 Q47,-20 32,-34 Z" fill="#bb8c48" opacity="0.65"/><path d="M46,18 Q30,34 44,56 L58,50 Q46,32 60,10 Z" fill="#875f28"/><path d="M-54,6 L46,18 Q30,34 44,56 L-54,40 Z" fill="#f2cf62"/><path d="M-54,6 L-16,11 Q-22,28 -16,45 L-54,40 Z" fill="#f9e79c" opacity="0.65"/><path d="M-54,34 Q-10,42 42,50 L44,56 L-54,40 Z" fill="#d9b34c" opacity="0.5"/><path d="M-54,6 L46,18 L46,24 L-54,12 Z" fill="#b17c33"/><circle cx="-24" cy="24" r="1.8" fill="#fdf0bc"/><circle cx="6" cy="32" r="1.6" fill="#fdf0bc"/><circle cx="26" cy="36" r="1.4" fill="#fdf0bc"/><path d="M-34,32 Q-20,28 -8,34" fill="none" stroke="#dcb84f" stroke-width="1.4" opacity="0.7"/><path d="M-54,6 L26,-30 Q40,-16 46,18 Z" fill="#f6d97a"/><path d="M-54,6 L-8,-15 Q0,4 4,14 Q-26,11 -54,6 Z" fill="#fce9ad" opacity="0.7"/><circle cx="-16" cy="-2" r="1.8" fill="#fef6d2"/><circle cx="12" cy="-10" r="1.5" fill="#fef6d2"/></g></svg>`;

const SVG_CANTAL = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(52.5,44.3) scale(0.41)"><ellipse cx="-6" cy="74" rx="112" ry="14" fill="#000" opacity="0.08"/><path d="M-100,-24 L44,-46 Q78,-40 78,10 L92,2 Q92,-52 56,-60 L-84,-36 Z" fill="#c9b47c"/><path d="M-100,-24 L44,-46 Q78,-40 78,10 L82,7 Q82,-44 46,-38 L-92,-16 Z" fill="#dfcf9c" opacity="0.65"/><circle cx="-44" cy="-30" r="2.2" fill="#a08c58" opacity="0.6"/><circle cx="4" cy="-38" r="2" fill="#a08c58" opacity="0.55"/><circle cx="50" cy="-40" r="1.8" fill="#d9b45e" opacity="0.6"/><circle cx="-20" cy="-34" r="1.6" fill="#efe4c2" opacity="0.7"/><path d="M78,10 Q78,58 44,64 L56,70 Q92,60 92,2 Z" fill="#ab9660"/><path d="M-100,-24 L44,-46 Q78,-40 78,10 Q78,58 44,64 L-100,52 Z" fill="#f6e59a"/><path d="M-100,-24 L-40,-33 Q-46,14 -40,50 L-100,52 Z" fill="#fcf2c6" opacity="0.7"/><path d="M-100,46 L44,58 Q74,54 77,22 Q76,54 46,64 L-100,52 Z" fill="#dfca79" opacity="0.5"/><path d="M-60,0 Q-46,-6 -34,2" fill="none" stroke="#e0c96f" stroke-width="1.6" opacity="0.7"/><path d="M-4,14 Q10,8 24,16" fill="none" stroke="#e0c96f" stroke-width="1.6" opacity="0.6"/><circle cx="-24" cy="26" r="1.6" fill="#fffae0" opacity="0.9"/><circle cx="20" cy="36" r="1.4" fill="#fffae0" opacity="0.85"/><path d="M-100,52 L44,64 Q56,63 64,58 L44,68 L-100,58 Z" fill="#ab9660" opacity="0.8"/></g></svg>`;

const FROMAGE_DATA = {
  'Camembert':{type:'svg',val:SVG_CAMEMBERT},
  'Emmental':{type:'svg',val:SVG_EMMENTAL},
  'Mozzarella':{type:'svg',val:SVG_MOZZARELLA},
  'Raclette':{type:'svg',val:SVG_RACLETTE},
  'Bûche de chèvre':{type:'svg',val:SVG_BUCHE_CHEVRE},
  'Comté':{type:'svg',val:SVG_COMTE},
  'Saint Nectaire':{type:'svg',val:SVG_SAINT_NECTAIRE},
  'Roquefort':{type:'svg',val:SVG_ROQUEFORT},
  'Reblochon':{type:'svg',val:SVG_REBLOCHON},
  'Parmesan':{type:'svg',val:SVG_PARMESAN},
  'Ossau-Iraty':{type:'svg',val:SVG_OSSAU_IRATY},
  'Mimolette':{type:'svg',val:SVG_MIMOLETTE},
  'Gorgonzola':{type:'svg',val:SVG_GORGONZOLA},
  'Beaufort':{type:'svg',val:SVG_BEAUFORT},
  'Cantal':{type:'svg',val:SVG_CANTAL}
};

const COLORS=['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#e91e8c'];
let players=[],matches=[],currentMatchIndex=0,currentPlayerIndex=0,scores={};
let gameFinished=false;

function icon(name,size='large'){
  const d=FROMAGE_DATA[name];if(!d)return'';
  if(d.type==='svg'){const cls=size==='large'?'fromage-icon':size==='medium'?'podium-icon':'tbl-icon';return`<div class="${cls}">${d.val}</div>`;}
  if(size==='large')return`<div class="fromage-icon" style="font-size:3.4rem">${d.val}</div>`;
  if(size==='medium')return`<div class="podium-icon" style="font-size:2.2rem">${d.val}</div>`;
  return`<div class="tbl-icon" style="font-size:1.4rem">${d.val}</div>`;
}

function initSetup(){
  const grid=document.getElementById('players-grid');grid.innerHTML='';
  for(let i=0;i<8;i++){const div=document.createElement('div');div.className='player-input';div.innerHTML=`<div class="player-num" style="background:${COLORS[i]}">${i+1}</div><input type="text" placeholder="Joueur ${i+1}" id="p${i}" maxlength="20">`;grid.appendChild(div);}
}

function generateMatches(){
  const m=[];for(let i=0;i<FROMAGES.length;i++)for(let j=i+1;j<FROMAGES.length;j++)m.push([i,j]);
  return m.sort(()=>Math.random()-0.5);
}

function startGame(){
  const names=[];for(let i=0;i<8;i++){const v=document.getElementById('p'+i).value.trim();if(v)names.push({name:v,color:COLORS[i]});}
  if(names.length===0){alert('Entrez au moins un joueur !');return;}
  players=names;matches=generateMatches();currentMatchIndex=0;currentPlayerIndex=0;scores={};gameFinished=false;
  players.forEach(p=>{scores[p.name]={};FROMAGES.forEach(f=>scores[p.name][f]=0);});
  showTab('match');renderMatch();
}

function renderMatch(){
  const content=document.getElementById('match-content');
  const totalPerPlayer=matches.length,globalTotal=players.length*totalPerPlayer;
  const done=currentPlayerIndex*totalPerPlayer+currentMatchIndex;
  if(currentPlayerIndex>=players.length){
    gameFinished=true;
    content.innerHTML=`<div class="match-done"><div style="font-size:3rem;margin-bottom:1rem">🏆</div><p style="font-size:1.2rem;font-weight:500;margin-bottom:8px">Tous les matchs terminés !</p><p style="color:#666;margin-bottom:1.5rem">Consultez le classement de chaque joueur.</p><button class="btn btn-primary" onclick="showTab('results');renderResults()">Voir les classements →</button></div>`;
    return;
  }
  if(currentMatchIndex>=matches.length){currentPlayerIndex++;currentMatchIndex=0;renderMatch();return;}
  const player=players[currentPlayerIndex];const[fi,fj]=matches[currentMatchIndex];const fA=FROMAGES[fi],fB=FROMAGES[fj];
  content.innerHTML=`
    <div class="match-progress">Match ${currentMatchIndex+1}/${totalPerPlayer} · Joueur ${currentPlayerIndex+1}/${players.length} · Total ${done}/${globalTotal}</div>
    <div style="width:100%;background:#f0f0f0;border-radius:4px;height:6px;margin-bottom:1.2rem;overflow:hidden"><div style="height:6px;border-radius:4px;background:${player.color};width:${Math.round(done/globalTotal*100)}%"></div></div>
    <div class="match-player"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${player.color};margin-right:6px;vertical-align:middle"></span>${player.name}, quel est ton fromage préféré ?</div>
    <div class="match-arena">
      <div class="fromage-card" onclick="vote(0)">${icon(fA,'large')}<div class="fromage-name">${fA}</div></div>
      <div class="vs">VS</div>
      <div class="fromage-card" onclick="vote(1)">${icon(fB,'large')}<div class="fromage-name">${fB}</div></div>
    </div>`;
}

function vote(choice){
  const player=players[currentPlayerIndex];const[fi,fj]=matches[currentMatchIndex];
  scores[player.name][choice===0?FROMAGES[fi]:FROMAGES[fj]]+=3;currentMatchIndex++;renderMatch();
}

function getRanked(playerName){
  return FROMAGES.map(f=>({name:f,score:scores[playerName][f]})).sort((a,b)=>b.score-a.score);
}

function renderResults(){
  const content=document.getElementById('results-content');
  const tabsHtml=players.map((p,i)=>`<button class="rtab${i===0?' active':''}" onclick="showPlayerResult(${i})">${p.name}</button>`).join('');
  content.innerHTML=`<div class="results-tabs">${tabsHtml}</div><div id="player-result"></div>`;
  showPlayerResult(0);
}

function showPlayerResult(idx){
  document.querySelectorAll('.rtab').forEach((t,i)=>t.classList.toggle('active',i===idx));
  const player=players[idx];const ranked=getRanked(player.name);const max=ranked[0].score||1;
  const top3=ranked.slice(0,3);const podiumOrder=[top3[1],top3[0],top3[2]].filter(Boolean);
  const heights=[60,90,45],podiumColors=['#c0392b','#e74c3c','#e67e22'],medals=['🥈','🥇','🥉'];
  let podiumHtml=`<div class="podium">`;
  podiumOrder.forEach((item,i)=>{podiumHtml+=`<div class="podium-item">${icon(item.name,'medium')}<div class="podium-name">${item.name}</div><div class="podium-bar" style="width:80px;height:${heights[i]}px;background:${podiumColors[i]}"><span style="font-size:18px">${medals[i]}</span></div></div>`;});
  podiumHtml+=`</div>`;
  let tableHtml=`<table class="ranking-table"><thead><tr><th>#</th><th>Fromage</th><th>Points</th><th>Popularité</th></tr></thead><tbody>`;
  ranked.forEach((item,i)=>{const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';tableHtml+=`<tr><td class="rank-num">${medal||i+1}</td><td><div class="td-fromage">${icon(item.name,'small')}<span>${item.name}</span></div></td><td style="font-weight:500">${item.score}</td><td><div class="score-bar-wrap"><div class="score-bar" style="width:${Math.round(item.score/max*120)}px"></div><span style="font-size:11px;color:#aaa">${max>0?Math.round(item.score/max*100)+'%':''}</span></div></td></tr>`;});
  tableHtml+=`</tbody></table>`;
  document.getElementById('player-result').innerHTML=`<div style="text-align:center;margin-bottom:0.5rem"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${player.color};margin-right:6px;vertical-align:middle"></span><span style="font-weight:500">${player.name}</span></div>${podiumHtml}${tableHtml}`;
}

function showTab(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const idx=['setup','match','results'].indexOf(id);
  const btns=document.querySelectorAll('.tab');if(btns[idx])btns[idx].classList.add('active');
}

/* ── SAVE MODAL ── */
function openSaveModal(){
  if(!gameFinished||players.length===0)return;
  document.getElementById('save-options-list').style.display='flex';
  document.getElementById('capture-progress').classList.remove('active');
  document.getElementById('capture-progress').innerHTML='';
  document.getElementById('save-modal').classList.add('open');
}
function closeSaveModal(e){
  if(!e||e.target===document.getElementById('save-modal'))
    document.getElementById('save-modal').classList.remove('open');
}

/* ── EXPORT JSON ── */
function exportJSON(){
  const date=new Date().toLocaleDateString('fr-FR');
  const data={date,joueurs:{}};
  players.forEach(p=>{
    const ranked=getRanked(p.name);
    data.joueurs[p.name]={classement:ranked.map((f,i)=>({rang:i+1,fromage:f.name,points:f.score}))};
  });
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`ligue-des-fromages-${date.replace(/\//g,'-')}.json`;a.click();
  document.getElementById('save-modal').classList.remove('open');
}

/* ── SCREENSHOTS ── */
function buildSnapshotHTML(player){
  const ranked=getRanked(player.name);const max=ranked[0].score||1;
  const date=new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  const top3=ranked.slice(0,3);
  const podiumOrder=[top3[1],top3[0],top3[2]].filter(Boolean);
  const heights=[60,90,45],podiumColors=['#c0392b','#e74c3c','#e67e22'],medals=['🥈','🥇','🥉'];
  let podiumHtml=`<div style="display:flex;align-items:flex-end;justify-content:center;gap:16px;margin:16px 0">`;
  podiumOrder.forEach((item,i)=>{
    const fromageD=FROMAGE_DATA[item.name];
    const fromageDisp=fromageD&&fromageD.type==='svg'
      ?`<div style="width:48px;height:48px">${fromageD.val}</div>`
      :`<div style="font-size:2rem;line-height:1">${fromageD?fromageD.val:''}</div>`;
    podiumHtml+=`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">${fromageDisp}<div style="font-size:11px;font-weight:500;text-align:center;max-width:70px">${item.name}</div><div style="width:72px;height:${heights[i]}px;background:${podiumColors[i]};border-radius:8px 8px 0 0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:5px"><span style="font-size:16px">${medals[i]}</span></div></div>`;
  });
  podiumHtml+=`</div>`;
  let rows='';
  ranked.forEach((item,i)=>{
    const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    const fromageD=FROMAGE_DATA[item.name];
    const fromageDisp=fromageD&&fromageD.type==='svg'
      ?`<span style="display:inline-block;width:22px;height:22px;vertical-align:middle">${fromageD.val}</span>`
      :`<span style="font-size:1.1rem;vertical-align:middle">${fromageD?fromageD.val:''}</span>`;
    const pct=max>0?Math.round(item.score/max*100):0;
    rows+=`<tr style="border-bottom:1px solid #f0f0f0">
      <td style="padding:5px 6px;font-size:12px;color:#666;font-weight:500">${medal||i+1}</td>
      <td style="padding:5px 6px;font-size:12px;display:flex;align-items:center;gap:4px">${fromageDisp} ${item.name}</td>
      <td style="padding:5px 6px;font-size:12px;font-weight:500">${item.score}</td>
      <td style="padding:5px 6px"><div style="display:flex;align-items:center;gap:6px"><div style="height:5px;border-radius:3px;background:#e74c3c;opacity:0.7;width:${Math.round(pct*0.9)}px"></div><span style="font-size:10px;color:#aaa">${pct}%</span></div></td>
    </tr>`;
  });
  return`<div style="font-family:system-ui,sans-serif;background:#fff;padding:24px;width:460px">
    <div style="text-align:center;margin-bottom:12px">
      <div style="font-size:1.3rem;font-weight:500;color:#e74c3c">🏆 Ligue des Fromages</div>
      <div style="font-size:14px;margin-top:4px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${player.color};margin-right:5px;vertical-align:middle"></span><strong>${player.name}</strong></div>
      <div style="font-size:11px;color:#bbb;margin-top:2px">${date}</div>
    </div>
    ${podiumHtml}
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr style="border-bottom:1px solid #e5e5e5"><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">#</th><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">Fromage</th><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">Pts</th><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">Popularité</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

async function startScreenshots(){
  document.getElementById('save-options-list').style.display='none';
  const prog=document.getElementById('capture-progress');prog.classList.add('active');
  prog.innerHTML=players.map((p,i)=>`<div class="cap-player" id="cap-row-${i}"><div class="cap-dot" style="background:${p.color}"></div><span>${p.name}</span><span class="cap-status" id="cap-status-${i}">En attente…</span></div>`).join('');

  const card=document.getElementById('snapshot-card');
  for(let i=0;i<players.length;i++){
    const statusEl=document.getElementById('cap-status-'+i);
    statusEl.textContent='Génération…';statusEl.className='cap-status active';
    card.innerHTML=buildSnapshotHTML(players[i]);
    await new Promise(r=>setTimeout(r,80));
    try{
      const canvas=await html2canvas(card,{backgroundColor:'#ffffff',scale:2,useCORS:true,logging:false});
      const a=document.createElement('a');
      a.href=canvas.toDataURL('image/png');
      a.download=`classement-${players[i].name.replace(/\s+/g,'-').toLowerCase()}.png`;
      a.click();
      await new Promise(r=>setTimeout(r,300));
      statusEl.textContent='✓ Téléchargé';statusEl.className='cap-status done';
    }catch(err){statusEl.textContent='Erreur';statusEl.className='cap-status';}
  }
  card.innerHTML='';
}

document.addEventListener('DOMContentLoaded', initSetup);
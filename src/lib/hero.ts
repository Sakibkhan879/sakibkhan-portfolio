export const FRAME_COUNT = 169;

const BASE = "/sakibkhan-portfolio";

export const framePath = (n: number) =>
  `${BASE}/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Code is like humor. When you have to explain it, it's bad.",
    speaker: "Sakib Khan",
    film: "DEVELOPER — 2026",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "First, solve the problem. Then, write the code.",
    speaker: "Sakib Khan",
    film: "FULL-STACK — 2026",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "The best error message is the one that never shows up.",
    speaker: "Sakib Khan",
    film: "PORTFOLIO — 2026",
  },
];

export const HERO_TEXT_FADE_END = 0.08;

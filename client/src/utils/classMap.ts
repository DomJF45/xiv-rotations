import { iJob, iPlayerClasses } from "./types";

export const playerMap: iPlayerClasses = {
  1: "Paladin",
  2: "Warrior",
  3: "Dark Knight",
  4: "Gunbreaker",
  5: "White Mage",
  6: "Scholar",
  7: "Astrologian",
  8: "Sage",
  9: "Monk",
  10: "Dragoon",
  11: "Ninja",
  12: "Samurai",
  13: "Reaper",
  14: "Bard",
  15: "Machinist",
  16: "Dancer",
  17: "Black Mage",
  18: "Summoner",
  19: "Red Mage",
};

export const jobRole: { [key: string]: "Tank" | "Dps" | "Healer" } = {
  Paladin: "Tank",
  Warrior: "Tank",
  "Dark Knight": "Tank",
  Gunbreaker: "Tank",
  "White Mage": "Healer",
  Scholar: "Healer",
  Astrologian: "Healer",
  Sage: "Healer",
  Monk: "Dps",
  Dragoon: "Dps",
  Ninja: "Dps",
  Samurai: "Dps",
  Reaper: "Dps",
  Bard: "Dps",
  Machinist: "Dps",
  Dancer: "Dps",
  "Black Mage": "Dps",
  Summoner: "Dps",
  "Red Mage": "Dps",
};

export const jobMap: iJob[] = [
  {
    id: 1,
    icon: "/job/Paladin.png",
    job: "Paladin",
  },
  {
    id: 2,
    icon: "/job/Warrior.png",
    job: "Warrior",
  },
  {
    id: 3,
    icon: "/job/DarkKnight.png",
    job: "Dark Knight",
  },
  {
    id: 4,
    icon: "/job/Gunbreaker.png",
    job: "Gunbreaker",
  },
  {
    id: 5,
    icon: "/job/WhiteMage.png",
    job: "White Mage",
  },
  {
    id: 6,
    icon: "/job/Scholar.png",
    job: "Scholar",
  },
  {
    id: 7,
    icon: "/job/Astrologian.png",
    job: "Astrologian",
  },
  {
    id: 8,
    icon: "/job/Sage.png",
    job: "Sage",
  },
  {
    id: 9,
    icon: "/job/Monk.png",
    job: "Monk",
  },
  {
    id: 10,
    icon: "/job/Dragoon.png",
    job: "Dragoon",
  },
  {
    id: 11,
    icon: "/job/Ninja.png",
    job: "Ninja",
  },
  {
    id: 12,
    icon: "/job/Samurai.png",
    job: "Samurai",
  },
  {
    id: 13,
    icon: "/job/Reaper.png",
    job: "Reaper",
  },
  {
    id: 14,
    icon: "/job/Bard.png",
    job: "Bard",
  },
  {
    id: 15,
    icon: "/job/Machinist.png",
    job: "Machinist",
  },
  {
    id: 16,
    icon: "/job/Dancer.png",
    job: "Dancer",
  },
  {
    id: 17,
    icon: "/job/BlackMage.png",
    job: "Black Mage",
  },
  {
    id: 18,
    icon: "/job/Summoner.png",
    job: "Summoner",
  },
  {
    id: 19,
    icon: "/job/RedMage.png",
    job: "Red Mage",
  },
];

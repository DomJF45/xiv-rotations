export interface iSkill {
  name: string;
  icon: string;
  level: number | string | null;
  help_html: string;
  cast_time: number | null;
  recast_time?: number | string | null;
  cast_range: number | null;
  cost: string | number | null;
  category: number | null;
  radius: number | null;
  deprecated?: number | null;
  c?: string;
  gcd?: boolean;
}

export interface iSkills {
  [key: string]: iSkill;
}

export interface iSeqItem {
  id: string;
  skill: iSkill;
}

export interface iClasses {
  [key: string]: iClass;
}

export interface iClass {
  native: number[];
  cross: number[];
  specialist?: number[];
  iaijutsu?: number[];
  summon?: number[];
  discipline: string;
}

export interface iData {
  skills: iSkills;
  classes: iClasses;
  misc: number[];
}

export interface iPlayerClasses {
  [key: number]: string;
}

export interface iJob {
  id: number;
  icon: string;
  job: string;
}

export interface iRotation {
  [job: string]: {
    skills: iSeqItem[];
  };
}

export interface iPostRotation {
  job: string;
  jobRole: "Tank" | "Dps" | "Healer";
  skills: iSeqItem[];
  type: "PVE" | "PVP";
}

export interface iPost {
  id: string;
  postedBy: string;
  likes: number;
  viewedBy: number;
  saved: number;
  rotation: iPostRotation;
}

export interface iUserState {
  userName: string;
  saved: string[];
  liked: string[];
  rotations: iPost[];
}

import { Document } from 'mongoose';

export interface iSkill {
  name: string;
  icon: string;
  level: number | string | null;
  help_html: string;
  cast_time: number | null;
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

export interface Skill extends Document {
  name: string;
  icon: string;
  level?: number;
  help_html: string;
  cast_time?: number;
  cast_range?: number;
  cost?: number;
  category?: number;
  radius?: number;
  deprecated?: number;
  c?: string;
  gcd?: boolean;
}

export interface Sequence extends Document {
  id: string;
  skill: Skill;
}

export interface Rotation extends Document {
  job: string;
  skills: [Sequence];
}

export interface IRotationModel extends Document {
  title: string;
  user: string; // for now
  rotation?: [Rotation];
  rating: number;
}

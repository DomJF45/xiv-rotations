import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import {
  iClass,
  iData,
  iPost,
  iRotation,
  iSeqItem,
  iSkill,
} from "../../utils/types";

type SequenceProps = {
  children: React.ReactNode;
};

type SequenceItemProps = {
  seqItem: iSeqItem;
  handleRemove: (obj: string) => void;
};

type ListProps = {
  setPlayerClass: (num: number) => void;
};

type PostProps = {
  rotationPost: iPost;
  setOpenWindow: Dispatch<SetStateAction<boolean>>;
  setRotationId: Dispatch<SetStateAction<string | undefined>>;
};

type PostFeedProps = {
  posts: iPost[];
  setOpenWindow: Dispatch<SetStateAction<boolean>>;
  setRotationId: Dispatch<SetStateAction<string | undefined>>;
};

type InteractProps = {
  likes: number;
  viewedBy: number;
  saved: number;
};

type SkillTableProps = {
  skill: iSkill | undefined;
};

type InteractIconProps = {
  unclicked: React.ReactElement;
  clicked: React.ReactElement;
  interactableNumber: number;
  activated: boolean;
  method: () => void;
  aria: string;
};

type SkillInfoProps = {
  skill: iSkill | undefined;
  showSkill: boolean;
};

type JobSkillsProps = {
  skills: iClass["native"];
  data: iData;
  setShowSkill: (bool: boolean) => void;
  setSkillInfo: (str: string) => void;
  setSkill: (skill: iSkill) => void;
  handleAddRotation: (seqItem: iSkill) => void;
};

type SequenceBarProps = {
  rotation: iRotation;
  playerClass: number;
  handleRemove: (skillId: string) => void;
  playerMap: { [key: number]: string };
};

export type SequenceComponent = FunctionComponent<SequenceProps>;
export type SequenceItemComponent = FunctionComponent<SequenceItemProps>;
export type ClassListComponent = FunctionComponent<ListProps>;
export type InteractBarComponent = FunctionComponent<InteractProps>;
export type InteractIconComponent = FunctionComponent<InteractIconProps>;
export type RotationPostsComponent = FunctionComponent<PostFeedProps>;
export type SkillTableComponent = FunctionComponent<SkillTableProps>;
export type PreviewComponent = FunctionComponent<PostProps>;
export type SkillInfoComponent = FunctionComponent<SkillInfoProps>;
export type JobSkillsComponent = FunctionComponent<JobSkillsProps>;
export type SequenceBarComponent = FunctionComponent<SequenceBarProps>;

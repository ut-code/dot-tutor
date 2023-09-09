export type SixDotsType = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];
export type SixDotPositionType = 1 | 2 | 3 | 4 | 5 | 6;

export type EightDotsType = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];
export type EightDotPositionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type DotsType = SixDotsType | EightDotsType;

export type DotPositionType = SixDotPositionType | EightDotPositionType;

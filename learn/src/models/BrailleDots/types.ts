type SixDotsArrayType = [boolean, boolean, boolean, boolean, boolean, boolean];

type EightDotsArrayType = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];

export type DotsArrayType = SixDotsArrayType | EightDotsArrayType;

type SixDotsObjectType = {
  dot1: boolean;
  dot2: boolean;
  dot3: boolean;
  dot4: boolean;
  dot5: boolean;
  dot6: boolean;
};

type EightDotsObjectType = {
  dot1: boolean;
  dot2: boolean;
  dot3: boolean;
  dot7: boolean;
  dot4: boolean;
  dot5: boolean;
  dot6: boolean;
  dot8: boolean;
};

export type DotsObjectType = SixDotsObjectType | EightDotsObjectType;

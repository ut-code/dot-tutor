/**
 * Represents the type of an object of six-dot braille dots.
 */
type SixDotsObjectType = {
  dot1: boolean;
  dot2: boolean;
  dot3: boolean;
  dot4: boolean;
  dot5: boolean;
  dot6: boolean;
};

/**
 * Represents the type of an object of eight-dot braille dots.
 */
export type EightDotsObjectType = {
  dot1: boolean;
  dot2: boolean;
  dot3: boolean;
  dot7: boolean;
  dot4: boolean;
  dot5: boolean;
  dot6: boolean;
  dot8: boolean;
};

/**
 * Represents the type of an object of braille dots.
 */
export type DotsObjectType = SixDotsObjectType | EightDotsObjectType;

/**
 * Represents the type of an array of six-dot braille dots.
 */
type SixDotsArrayType = [boolean, boolean, boolean, boolean, boolean, boolean];

/**
 * Represents the type of an array of eight-dot braille dots.
 */
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

/**
 * Represents the type of an array of braille dots.
 */
export type DotsArrayType = SixDotsArrayType | EightDotsArrayType;

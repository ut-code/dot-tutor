/**
 * Represents the type of the number of dots of a six-dot braille.
 */
type SixDotBrailleDotCountType = 6;

/**
 * Represents the type of the number of dots of an eight-dot braille.
 */
type EightDotBrailleDotCountType = 8;

/**
 * Represents the type of the number of dots based on the types of braille.
 */
export type DotCountType =
  | SixDotBrailleDotCountType
  | EightDotBrailleDotCountType;

/**
 * Represents the type of the position of dots of a six-dot braille.
 */
type SixDotBrailleDotPositionType =
  | "dot1"
  | "dot2"
  | "dot3"
  | "dot4"
  | "dot5"
  | "dot6";

/**
 * Represents the type of the position of dots of an eight-dot braille.
 */
type EightDotBrailleDotPositionType =
  | "dot1"
  | "dot2"
  | "dot3"
  | "dot7"
  | "dot4"
  | "dot5"
  | "dot6"
  | "dot8";

/**
 * Represents the type of the position of dots based on the types of braille.
 */
export type DotPositionType =
  | SixDotBrailleDotPositionType
  | EightDotBrailleDotPositionType;

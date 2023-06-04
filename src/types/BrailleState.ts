/**
 * The default state of braille
 */
export const defaultBrailleStateValue = {
  Dot1: false,
  Dot2: false,
  Dot3: false,
  Dot7: false,
  Dot4: false,
  Dot5: false,
  Dot6: false,
  Dot8: false,
};

/**
 * The type of the state of braille
 */
export type BrailleState = typeof defaultBrailleStateValue;

/**
 * The type of the available dots
 */
type AvailableDot = keyof BrailleState;

/**
 * The array of the available dots
 * @example
 * const availableDots = ["Dot1", "Dot2", "Dot3", "Dot7", "Dot4", "Dot5", "Dot6", "Dot8"];
 */
export const availableDots = Object.keys(
  defaultBrailleStateValue
) as AvailableDot[];

/**
 * The default state of 6-dot braille
 */
export const defaultSixDotBrailleStateValue = {
  Dot1: false,
  Dot2: false,
  Dot3: false,
  Dot4: false,
  Dot5: false,
  Dot6: false,
};

/**
 * The type of the state of 6-dot braille
 */
export type SixDotBrailleState = typeof defaultSixDotBrailleStateValue;

/**
 * The type of the available dots of 6-dot braille
 */
type SixDotBrailleAvailableDot = keyof SixDotBrailleState;

/**
 * The array of the available dots of 6-dot braille
 * @example
 * const sixDotBrailleAvailableDots = ["Dot1", "Dot2", "Dot3", "Dot4", "Dot5", "Dot6"];
 */
export const sixDotBrailleAvailableDots = Object.keys(
  defaultSixDotBrailleStateValue
) as SixDotBrailleAvailableDot[];

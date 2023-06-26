/**
 * The default state of six-dot braille
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
 * The type of the state of six-dot braille
 */
export type SixDotBrailleState = typeof defaultSixDotBrailleStateValue;

/**
 * The type of the available dots
 */
type SixDotBrailleAvailableDot = keyof SixDotBrailleState;

/**
 * The array of the available dots
 * @example
 * const availableDots = ["Dot1", "Dot2", "Dot3", "Dot4", "Dot5", "Dot6"];
 */
export const sixDotBrailleAvailableDots = Object.keys(
  defaultSixDotBrailleStateValue
) as SixDotBrailleAvailableDot[];

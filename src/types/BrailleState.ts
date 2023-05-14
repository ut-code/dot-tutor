/**
 * The default state of braille
 */
export const defaultBrailleStateValue = {
  Dot1: false,
  Dot2: false,
  Dot3: false,
  Dot4: false,
  Dot5: false,
  Dot6: false,
  Dot7: false,
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
 * const availableDots = ["Dot1", "Dot2", "Dot3", "Dot4", "Dot5", "Dot6"];
 */
export const availableDots = Object.keys(
  defaultBrailleStateValue
) as AvailableDot[];

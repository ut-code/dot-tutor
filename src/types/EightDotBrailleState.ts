import {
  defaultBrailleStateValue,
  type BrailleState,
  type AvailableDot,
  availableDots,
} from "./BrailleState";

/**
 * The default state of eight-dot braille
 */
export const defaultEightDotBrailleStateValue = defaultBrailleStateValue;

/**
 * The type of the state of eight-dot braille
 */
export type EightDotBrailleState = BrailleState;

/**
 * The type of the available dots
 */
type EightDotBrailleAvailableDot = AvailableDot;

/**
 * The array of the available dots
 * @example
 * const availableDots = ["Dot1", "Dot2", "Dot3", "Dot7", "Dot4", "Dot5", "Dot6", "Dot8"];
 */
export const EightDotBrailleAvailableDots: EightDotBrailleAvailableDot[] =
  availableDots;

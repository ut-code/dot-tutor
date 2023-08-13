import AbstractBrailleDots from "./AbstractBrailleDots";
import { EightDotPosition, EightDotsType } from "./types";

/**
 * A class representing the information of the eight braille dots.
 */
export default class EightDots extends AbstractBrailleDots<
  EightDotsType,
  EightDotPosition
> {}

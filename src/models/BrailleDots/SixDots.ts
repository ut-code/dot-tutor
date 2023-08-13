import AbstractBrailleDots from "./AbstractBrailleDots";
import { SixDotPosition, SixDotsType } from "./types";

/**
 * A class representing the information of the six braille dots.
 */
export default class SixDots extends AbstractBrailleDots<
  SixDotsType,
  SixDotPosition
> {}

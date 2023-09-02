import AbstractBrailleDots from "./AbstractBrailleDots";
import { EightDotsType, EightDotPosition } from "./types";
import convertDotsToUnicode from "./utils/convertDotsToUnicode";

/**
 * A class representing the information of the eight-dot braille dots.
 */
export default class EightDots extends AbstractBrailleDots<
  EightDotsType,
  EightDotPosition
> {
  getUnicode(): string {
    return convertDotsToUnicode(this.dots);
  }

  toggleDot(dotPosition: EightDotPosition): EightDots {
    const toggledDots: EightDotsType = [...this.dots];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new EightDots(toggledDots);
  }

  getDot(dotPosition: EightDotPosition): boolean {
    return this.dots[dotPosition - 1];
  }
}

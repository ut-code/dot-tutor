import AbstractBrailleDots from "./AbstractBrailleDots";
import { SixDotsType, SixDotPosition } from "./types";
import convertDotsToUnicode from "./utils/convertDotsToUnicode";

/**
 * A class representing the information of the six-dot braille dots.
 */
export default class SixDots extends AbstractBrailleDots<
  SixDotsType,
  SixDotPosition
> {
  getUnicode(): string {
    return convertDotsToUnicode(this.dots);
  }

  toggleDot(dotPosition: SixDotPosition): SixDots {
    const toggledDots: SixDotsType = [...this.dots];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new SixDots(toggledDots);
  }

  getDot(dotPosition: SixDotPosition): boolean {
    return this.dots[dotPosition - 1];
  }
}

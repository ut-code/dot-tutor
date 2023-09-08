import BrailleError from "@/errors/BrailleError";
import AbstractBrailleDots from "./AbstractBrailleDots";
import { SixDotsType, SixDotPosition } from "./types";
import { convertSixDotsToUnicode } from "./utils/convertDotsToUnicode";
import BrailleCharacter from "../BrailleCharacter/BrailleCharacter";

/**
 * A class representing the information of the six-dot braille dots.
 */
export default class SixDots extends AbstractBrailleDots<
  SixDotsType,
  SixDotPosition
> {
  /**
   * Constructs a new instance with the given braille dots.
   * @param dots the braille dots
   */
  constructor(dots: SixDotsType) {
    if (dots.length !== 6) {
      throw new BrailleError(
        "Invalid number of dots! The number of dots must be 6.",
      );
    }
    if (!dots.every((dot) => typeof dot === "boolean")) {
      throw new BrailleError(
        "Invalid type of dots! The type of dots must be boolean.",
      );
    }
    super(dots);
  }

  getCharacter(): BrailleCharacter {
    return convertSixDotsToUnicode(this.dots);
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

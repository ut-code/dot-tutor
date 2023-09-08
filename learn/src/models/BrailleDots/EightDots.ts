import BrailleError from "@/errors/BrailleError";
import AbstractBrailleDots from "./AbstractBrailleDots";
import { EightDotsType, EightDotPosition } from "./types";
import { convertEightDotsToUnicode } from "./utils/convertDotsToUnicode";
import BrailleCharacter from "../BrailleCharacter/BrailleCharacter";

/**
 * A class representing the information of an eight-dot braille dots.
 */
export default class EightDots extends AbstractBrailleDots<
  EightDotsType,
  EightDotPosition
> {
  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: EightDotsType) {
    if (dots.length !== 8) {
      throw new BrailleError(
        "Invalid number of dots! The number of dots must be 8.",
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
    return convertEightDotsToUnicode(this.dots);
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

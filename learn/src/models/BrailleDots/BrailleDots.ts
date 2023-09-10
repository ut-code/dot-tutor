import BrailleBase from "../BrailleBase/BrailleBase";
import { DotsType } from "./types";
import convertBrailleToDots from "./utils/convertBrailleToDots";
import convertDotsToBraille from "./utils/convertDotsToBraille";
import Validator from "./validations/Validator";

/**
 * A class representing the information of braille dots.
 */
export default class BrailleDots {
  private readonly braille: BrailleBase;

  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: DotsType);
  constructor(braille: BrailleBase);
  constructor(dotsOrBraille: DotsType | BrailleBase) {
    if (Array.isArray(dotsOrBraille)) {
      Validator.validateDots(dotsOrBraille);
      this.braille = convertDotsToBraille(dotsOrBraille);
    } else {
      Validator.validateBrailleBase(dotsOrBraille);
      this.braille = dotsOrBraille;
    }
  }

  /**
   * Gets the braille dots.
   * @returns the braille dots
   */
  getDots(): DotsType {
    return convertBrailleToDots(this.braille);
  }

  /**
   * Gets the braille corresponding to the braille dots.
   * @returns the braille corresponding to the braille dots
   */
  getBraille(): BrailleBase {
    return this.braille;
  }

  /**
   * Checks if the braille dots are equal to the other.
   * @param other the other braille dots
   * @returns true if the braille dots are equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.braille.equals(other.braille);
  }

  /**
   * Converts the braille dots to a string.
   * @returns a string representation of the braille dots
   */
  toString(): string {
    return this.getDots()
      .map((dot) => (dot ? "1" : "0"))
      .join("");
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(dotPosition: number): BrailleDots {
    const toggledDots: DotsType = [...this.getDots()];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new BrailleDots(toggledDots);
  }

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: number): boolean {
    return this.getDots()[dotPosition - 1];
  }
}

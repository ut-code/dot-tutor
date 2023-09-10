import BrailleBase from "../BrailleBase/BrailleBase";
import BrailleValue from "../BrailleValue/BrailleValue";
import { DotsType } from "./types";
import convertBrailleToDots from "./utils/convertBrailleToDots";
import convertDotsToBraille from "./utils/convertDotsToBraille";
import Validator from "./validations/Validator";

/**
 * Represents braille dots.
 */
export default class BrailleDots extends BrailleBase {
  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: DotsType);
  /**
   * Constructs a new instance with the given braille.
   * @param braille a braille
   */
  constructor(braille: BrailleValue);
  constructor(dotsOrBraille: DotsType | BrailleValue) {
    if (Array.isArray(dotsOrBraille)) {
      Validator.validateDots(dotsOrBraille);
      super(convertDotsToBraille(dotsOrBraille));
    } else {
      super(dotsOrBraille);
    }
  }

  /**
   * Gets the braille dots.
   * @returns the braille dots
   */
  getDots(): boolean[] {
    return convertBrailleToDots(this.getBraille());
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(dotPosition: number): BrailleDots {
    const toggledDots = [...this.getDots()];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new BrailleDots(toggledDots as DotsType);
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

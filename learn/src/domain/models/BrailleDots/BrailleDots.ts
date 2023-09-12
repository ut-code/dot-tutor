import BrailleBase from "../BrailleBase/BrailleBase";
import BrailleValue from "../BrailleValue/BrailleValue";
import { DotsObjectType, DotsArrayType } from "./types";
import {
  convertBrailleToDotsArray,
  convertBrailleToDotsObject,
} from "./utils/convertBrailleToDotsArray";
import {
  convertDotsArrayToBraille,
  convertDotsObjectToBraille,
} from "./utils/convertDotsArrayToBraille";
import Validator from "./validations/Validator";

/**
 * Represents braille dots.
 */
export default class BrailleDots extends BrailleBase {
  /**
   * Constructs a new instance with the given braille dots.
   * @param dots an array of braille dots with values as booleans
   */
  constructor(dots: DotsArrayType);
  /**
   * Constructs a new instance with the given braille dots.
   * @param dots an object of braille dots with keys as dot positions and values as booleans
   */
  constructor(dots: DotsObjectType);
  /**
   * Constructs a new instance with the given braille.
   * @param braille a braille
   */
  constructor(braille: BrailleValue);
  constructor(dotsOrBraille: DotsArrayType | DotsObjectType | BrailleValue) {
    if (Array.isArray(dotsOrBraille)) {
      Validator.validateDotsArray(dotsOrBraille);
      super(convertDotsArrayToBraille(dotsOrBraille));
    } else if (typeof dotsOrBraille === "object") {
      Validator.validateDotsObject(dotsOrBraille as DotsObjectType);
      super(convertDotsObjectToBraille(dotsOrBraille as DotsObjectType));
    } else {
      super(dotsOrBraille);
    }
  }

  /**
   * Gets the array of braille dots.
   * @returns the array of braille dots
   */
  getDotsArray(): boolean[] {
    return convertBrailleToDotsArray(this.getBraille());
  }

  /**
   * Gets the object of braille dots.
   * @returns the object of braille dots
   */
  getDotsObject(): DotsObjectType {
    return convertBrailleToDotsObject(this.getBraille());
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(dotPosition: number): BrailleDots {
    const toggledDots = [...this.getDotsArray()];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new BrailleDots(toggledDots as DotsArrayType);
  }

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: number): boolean {
    return this.getDotsArray()[dotPosition - 1];
  }
}

import BrailleArrayBase from "../BrailleArrayBase/BrailleArrayBase";
import BrailleValue from "../BrailleValue/BrailleValue";
import BrailleDots from "../BrailleDots/BrailleDots";
import { DotsType } from "../BrailleDots/types";

/**
 * Represents an array of braille dots.
 */
export default class BrailleDotsArray extends BrailleArrayBase {
  /**
   * Constructs a new instance with the given array of braille dots.
   * @param dotsArray an array of braille dots
   */
  constructor(dotsArray: DotsType[]);
  /**
   * Constructs a new instance with the given array of braille.
   * @param brailleArray an array of braille
   */
  constructor(brailleArray: BrailleValue[]);
  constructor(dotsArrayOrBrailleArray: DotsType[] | BrailleValue[]) {
    if (dotsArrayOrBrailleArray.length === 0) {
      super([]);
      return;
    }
    if (
      Array.isArray(dotsArrayOrBrailleArray) &&
      typeof dotsArrayOrBrailleArray[0] === "number"
    ) {
      super(
        dotsArrayOrBrailleArray.map((dots) =>
          new BrailleDots(dots as DotsType).getBraille(),
        ),
      );
    } else {
      super(dotsArrayOrBrailleArray as BrailleValue[]);
    }
  }
}

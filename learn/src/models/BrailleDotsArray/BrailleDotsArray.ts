import BrailleArrayBase from "../BrailleArrayBase/BrailleArrayBase";
import BrailleBase from "../BrailleBase/BrailleBase";
import BrailleDots from "../BrailleDots/BrailleDots";
import { DotsType } from "../BrailleDots/types";

/**
 * Represents an array of braille dots.
 */
export default class BrailleDotsArray {
  private readonly brailleArray: BrailleArrayBase;

  /**
   * Constructs a new instance with the given array of braille dots.
   * @param dotsArray an array of braille dots
   */
  constructor(dotsArray: DotsType[]);
  /**
   * Constructs a new instance with the given array of braille.
   * @param brailleArray an array of braille
   */
  constructor(brailleArray: BrailleBase[]);
  constructor(dotsArrayOrBrailleArray: DotsType[] | BrailleBase[]) {
    if (dotsArrayOrBrailleArray.length === 0) {
      this.brailleArray = new BrailleArrayBase([]);
      return;
    }
    if (
      Array.isArray(dotsArrayOrBrailleArray) &&
      typeof dotsArrayOrBrailleArray[0] === "number"
    ) {
      this.brailleArray = new BrailleArrayBase(
        dotsArrayOrBrailleArray.map((dots) =>
          new BrailleDots(dots as DotsType).getBraille(),
        ),
      );
    } else {
      this.brailleArray = new BrailleArrayBase(
        dotsArrayOrBrailleArray as BrailleBase[],
      );
    }
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.brailleArray.getDotCount();
  }

  /**
   * Gets the array of braille.
   * @returns the array of braille
   */
  getBrailleArray(): BrailleBase[] {
    return this.brailleArray.getBrailleArray();
  }

  /**
   * Checks if the array of braille is equal to the other.
   * @param other the other array of braille
   * @returns true if the array of braille is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.brailleArray.equals(other.brailleArray);
  }
}

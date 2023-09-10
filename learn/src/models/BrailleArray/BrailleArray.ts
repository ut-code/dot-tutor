import { DotsType } from "../BrailleDots/types";
import Braille from "../Braille/Braille";
import Validator from "./validations/Validator";
import {
  EightDotBrailleCharacterType,
  EightDotBrailleDotCountType,
  SixDotBrailleCharacterType,
  SixDotBrailleDotCountType,
} from "../BrailleValue/types";

/**
 * A class representing the information of an array of braille.
 */
export default class BrailleArray extends Array<Braille> {
  /**
   * Constructs a new instance with the given braille text.
   * @param text braille text
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(text: string, dotCount: number);
  /**
   * Constructs a new instance with the given array of braille dots.
   * @param dotsArray an array of braille dots
   */
  constructor(dots: DotsType[]);
  constructor(textOrDotsArray: string | DotsType[], dotCount?: number) {
    const brailleArray = ((textOrDotsArray) => {
      if (typeof textOrDotsArray === "string") {
        if (dotCount === undefined) {
          throw new Error("The dotCount is undefined.");
        }
        if (dotCount === 6) {
          return Array.from(textOrDotsArray).map(
            (character) =>
              new Braille(
                character as SixDotBrailleCharacterType,
                dotCount as SixDotBrailleDotCountType,
              ),
          );
        }
        return Array.from(textOrDotsArray).map(
          (character) =>
            new Braille(
              character as EightDotBrailleCharacterType,
              dotCount as EightDotBrailleDotCountType,
            ),
        );
      }
      return textOrDotsArray.map((dots) => new Braille(dots));
    })(textOrDotsArray);
    Validator.validateBrailleArray(brailleArray);
    super(...brailleArray);
  }

  /**
   * Gets the braille text.
   * @returns the braille text
   */
  getText(): string {
    return this.map((braille) => braille.getCharacter()).join("");
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    if (this.length === 0) {
      throw new Error("The array of braille is empty.");
    }
    return this[0].getDotCount();
  }

  /**
   * Checks if the braille array is equal to the other.
   * @param other the other braille array
   * @returns true if the braille array is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.every((braille, index) => braille.equals(other[index]));
  }
}

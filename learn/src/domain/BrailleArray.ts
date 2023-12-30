import { CharacterType } from "./types/CharacterType";
import { DotCountType } from "./types/DotCountType";
import { DotsArrayType } from "./types/DotsArrayType";
import Braille from "./Braille";
import BrailleArrayValidator from "./validators/array/Validator";

/**
 * Represents an array of instances of Braille.
 */
export default class BrailleArray extends Array<Braille> {
  /**
   * Constructs a new instance with the given braille text.
   * @param text braille text
   * @param dotCount the number of dots based on the types of braille
   */
  constructor(text: string, dotCount: DotCountType);
  /**
   * Constructs a new instance with the given array of braille dots.
   * @param dotsArray an array of braille dots
   */
  constructor(dots: DotsArrayType[]);
  /**
   * Constructs a new instance with the given array of braille.
   * @param brailleArray an array of braille
   */
  constructor(brailleArray: Braille[]);
  constructor(
    textOrDotsArrayOrBrailleArray: string | DotsArrayType[] | Braille[],
    dotCount?: DotCountType,
  ) {
    const brailleArray = ((textOrDotsArrayOrBrailleArray) => {
      if (typeof textOrDotsArrayOrBrailleArray === "string") {
        return Array.from(textOrDotsArrayOrBrailleArray).map(
          (character) => new Braille(character as CharacterType, dotCount),
        );
      }
      if (Array.isArray(textOrDotsArrayOrBrailleArray[0])) {
        return textOrDotsArrayOrBrailleArray.map(
          (dots) => new Braille(dots as DotsArrayType),
        );
      }
      return textOrDotsArrayOrBrailleArray as Braille[];
    })(textOrDotsArrayOrBrailleArray);
    BrailleArrayValidator.validateBrailleArray(brailleArray);
    super(...brailleArray);
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the types of braille
   */
  getDotCount(): DotCountType {
    if (this.length === 0) {
      throw new Error("The array of braille is empty.");
    }
    return this[0].getDotCount();
  }

  /**
   * Gets the braille text.
   * @returns the braille text
   */
  getText(): string {
    return this.map((braille) => braille.getCharacter()).join("");
  }

  /**
   * Gets the array of braille dots.
   * @returns the array of braille dots
   */
  getDotsArray(): DotsArrayType[] {
    return this.map((braille) => braille.getDotsArray());
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

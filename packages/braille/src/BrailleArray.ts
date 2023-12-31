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
   * Constructs a new instance with the given length of the array.
   * @param arrayLength the length of the array
   */
  constructor(arrayLength: number);
  /**
   * Constructs a new instance with the given braille text.
   * @param text braille text
   * @param dotCount the number of dots based on the types of braille
   */
  constructor(text: string, dotCount?: DotCountType);
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
    arrayLengthOrTextOrDotsArrayOrBrailleArray:
      | number
      | string
      | DotsArrayType[]
      | Braille[],
    dotCount?: DotCountType,
  ) {
    if (typeof arrayLengthOrTextOrDotsArrayOrBrailleArray === "number") {
      super(arrayLengthOrTextOrDotsArrayOrBrailleArray);
    } else if (typeof arrayLengthOrTextOrDotsArrayOrBrailleArray === "string") {
      const brailleArray = Array.from(
        arrayLengthOrTextOrDotsArrayOrBrailleArray,
      ).map((character) => new Braille(character as CharacterType, dotCount));
      BrailleArrayValidator.validateBrailleArray(brailleArray);
      super(...brailleArray);
    } else if (Array.isArray(arrayLengthOrTextOrDotsArrayOrBrailleArray[0])) {
      const brailleArray = arrayLengthOrTextOrDotsArrayOrBrailleArray.map(
        (dots) => new Braille(dots as DotsArrayType),
      );
      BrailleArrayValidator.validateBrailleArray(brailleArray);
      super(...brailleArray);
    } else {
      const brailleArray =
        arrayLengthOrTextOrDotsArrayOrBrailleArray as Braille[];
      BrailleArrayValidator.validateBrailleArray(brailleArray);
      super(...brailleArray);
    }
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
    return [...this.map((braille) => braille.getDotsArray())];
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

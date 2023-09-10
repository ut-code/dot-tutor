import BrailleBase from "../BrailleBase/BrailleBase";
import { CharacterType, DotCountType } from "../BrailleBase/types";
import Validator from "./validations/Validator";

/**
 * A class representing the information of braille text.
 */
export default class BrailleString {
  private readonly brailleArray: BrailleBase[];

  /**
   * Constructs a new instance with the given braille text.
   * @param text braille text
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(text: string, dotCount: number);
  /**
   * Constructs a new instance with the given braille array.
   * @param brailleArray braille array
   */
  constructor(brailleArray: BrailleBase[]);
  constructor(textOrBrailleArray: string | BrailleBase[], dotCount?: number) {
    if (typeof textOrBrailleArray === "string") {
      if (dotCount === undefined) {
        throw new Error("The dot count is undefined.");
      }
      Validator.validateDotCount(dotCount);
      Validator.validateText(textOrBrailleArray, dotCount);
      this.brailleArray = Array.from(textOrBrailleArray).map(
        (character) => new BrailleBase(character, dotCount),
      );
    } else {
      Validator.validateBrailleArray(textOrBrailleArray);
      this.brailleArray = textOrBrailleArray;
    }
  }

  /**
   * Gets the Unicode text.
   * @returns the Unicode text
   */
  toString(): string {
    return this.brailleArray.map((braille) => braille.getUnicode()).join("");
  }

  /**
   * Gets the number of dots based on the type of braille.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.brailleArray[0].getDotCount();
  }

  /**
   * Checks if the braille character is equal to the other.
   * @param other the other braille character
   * @returns true if the braille character is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.brailleArray.every((braille, index) =>
      braille.equals(other.brailleArray[index]),
    );
  }

  /**
   * Gets the braille at the specified index.
   * @param index the index
   * @returns the braille at the specified index
   */
  get(index: number): BrailleString {
    if (index < 0 || this.brailleArray.length <= index) {
      throw new Error("Index out of range.");
    }
    return new BrailleString([this.brailleArray[index]]);
  }

  /**
   * Sets the braille at the specified index and returns a new instance with the braille at the specified index set.
   * @param index the index
   * @param braille the braille to set
   * @returns a new instance with the braille at the specified index set
   */
  set(index: number, braille: BrailleBase): BrailleString {
    return new BrailleString(
      this.brailleArray.map((brailleCharacter, i) =>
        i === index ? braille : brailleCharacter,
      ),
    );
  }

  /**
   * Pushes a braille to the end of the braille array and returns a new instance with the braille pushed.
   * @param braille the braille to push
   * @returns a new instance with the braille pushed
   */
  push(braille: BrailleBase): BrailleString {
    return new BrailleString([...this.brailleArray, braille]);
  }

  /**
   * The length of the braille array.
   */
  get length(): number {
    return this.brailleArray.length;
  }

  /**
   * Returns an iterator for the braille array.
   * @returns an iterator for the braille array
   */
  [Symbol.iterator]() {
    return this.brailleArray[Symbol.iterator]();
  }
}

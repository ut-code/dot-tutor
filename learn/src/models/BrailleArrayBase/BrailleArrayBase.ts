import BrailleBase from "../BrailleBase/BrailleBase";
import Validator from "./validations/Validator";

/**
 * Represents a base information of braille array.
 */
export default class BrailleArrayBase {
  private readonly brailleArray: BrailleBase[];

  /**
   * Constructs a new instance.
   * @param brailleArray braille array
   */
  constructor(brailleArray: BrailleBase[]) {
    Validator.validateBrailleArray(brailleArray);
    this.brailleArray = brailleArray;
  }

  /**
   * Gets the braille array.
   * @returns the braille array
   */
  getBrailleArray(): BrailleBase[] {
    return this.brailleArray;
  }

  /**
   * Checks if the braille array is equal to the other.
   * @param other the other braille array
   * @returns true if the braille array is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.brailleArray.every((braille, index) =>
      braille.equals(other.brailleArray[index]),
    );
  }
}

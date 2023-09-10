import BrailleValue from "../BrailleValue/BrailleValue";
import Validator from "./validations/Validator";

/**
 * Represents a base information of braille array.
 */
export default class BrailleArrayBase {
  private readonly brailleArray: BrailleValue[];

  /**
   * Constructs a new instance.
   * @param brailleArray braille array
   */
  constructor(brailleArray: BrailleValue[]) {
    Validator.validateBrailleArray(brailleArray);
    this.brailleArray = brailleArray;
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    if (this.brailleArray.length === 0) {
      throw new Error("The array of braille is empty.");
    }
    return this.brailleArray[0].getDotCount();
  }

  /**
   * Gets the braille array.
   * @returns the braille array
   */
  getBrailleArray(): BrailleValue[] {
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

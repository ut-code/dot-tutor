import BrailleValue from "../BrailleValue/BrailleValue";
import Validator from "./validations/Validator";

/**
 * Represents a base information of a braille.
 */
export default class BrailleBase {
  private readonly braille: BrailleValue;

  /**
   * Constructs a new instance with the given braille.
   * @param braille a braille
   */
  constructor(braille: BrailleValue) {
    Validator.validateBrailleValue(braille);
    this.braille = braille;
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.braille.getDotCount();
  }

  /**
   * Gets the braille.
   * @returns the braille
   */
  getBraille(): BrailleValue {
    return this.braille;
  }

  /**
   * Checks if the braille is equal to the other.
   * @param other the other braille
   * @returns true if the braille is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.braille.equals(other.braille);
  }
}

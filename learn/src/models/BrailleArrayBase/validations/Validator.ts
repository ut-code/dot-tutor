import BrailleBase from "../../BrailleBase/BrailleBase";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Contains static methods that validate the input of the BrailleArrayBase class.
 */
export default class Validator {
  /**
   * Checks if an instance of BrailleBase is valid.
   * @param braille an instance of BrailleBase
   */
  static validateBrailleBase(braille: BrailleBase) {
    if (braille instanceof BrailleBase === false) {
      throw new ValidationError(validationMessages.INVALID_BRAILLE_BASE);
    }
  }

  /**
   * Checks if braille array is valid.
   * @param brailleArray braille array
   */
  static validateBrailleArray(brailleArray: BrailleBase[]) {
    // Check if the input is an array
    if (Array.isArray(brailleArray) === false) {
      throw new ValidationError(validationMessages.INVALID_ARRAY);
    }
    // Check if all instances of BrailleBase are valid
    for (const braille of brailleArray) {
      Validator.validateBrailleBase(braille);
    }
    // Check if all instances of BrailleBase have the same number of dots
    if (
      brailleArray.length > 0 &&
      !brailleArray.every(
        (braille) => braille.getDotCount() === brailleArray[0].getDotCount(),
      )
    ) {
      throw new ValidationError(validationMessages.INCONSISTENT_DOT_COUNT);
    }
  }
}

import BrailleValue from "@/models/BrailleValue/BrailleValue";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";
import BrailleBaseValidator from "../../BrailleBase/validations/Validator";

/**
 * Contains static methods that validate the input of the BrailleArrayBase class.
 */
export default class Validator {
  /**
   * Checks if an instance of BrailleValue is valid.
   * @param braille an instance of BrailleValue
   */
  static validateBrailleValue(braille: BrailleValue) {
    BrailleBaseValidator.validateBrailleValue(braille);
  }

  /**
   * Checks if array of braille is valid.
   * @param brailleArray array of braille
   */
  static validateBrailleArray(brailleArray: BrailleValue[]) {
    // Check if the input is an array
    if (Array.isArray(brailleArray) === false) {
      throw new ValidationError(validationMessages.INVALID_ARRAY);
    }
    // Check if all instances of BrailleValue are valid
    for (const braille of brailleArray) {
      Validator.validateBrailleValue(braille);
    }
    // Check if all instances of BrailleValue have the same number of dots
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

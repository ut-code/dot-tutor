import BrailleValue from "@/models/BrailleValue/BrailleValue";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Contains static methods that validate the input of the BrailleBase class.
 */
export default class Validator {
  /**
   * Checks if an instance of BrailleValue is valid.
   * @param braille an instance of BrailleValue
   */
  static validateBrailleValue(braille: BrailleValue) {
    if (braille instanceof BrailleValue === false) {
      throw new ValidationError(validationMessages.INVALID_BRAILLE_Value);
    }
  }
}

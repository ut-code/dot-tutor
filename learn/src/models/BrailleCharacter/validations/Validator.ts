import BrailleBase from "@/models/BrailleBase/BrailleBase";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Contains static methods that validate the input of the BrailleCharacter class.
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
}

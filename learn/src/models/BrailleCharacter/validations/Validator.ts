import BrailleBase from "@/models/BrailleBase/BrailleBase";
import BrailleArrayBaseValidator from "@/models/BrailleArrayBase/validations/Validator";

/**
 * Contains static methods that validate the input of the BrailleCharacter class.
 */
export default class Validator {
  /**
   * Checks if an instance of BrailleBase is valid.
   * @param braille an instance of BrailleBase
   */
  static validateBrailleBase(braille: BrailleBase) {
    BrailleArrayBaseValidator.validateBrailleBase(braille);
  }
}

import BrailleBase from "@/models/BrailleBase/BrailleBase";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";
import BrailleBaseValidator from "../../BrailleBase/validations/Validator";
import BrailleDotsValidator from "../../BrailleDots/validations/Validator";

/**
 * A class that contains static methods for validating braille text.
 */
export default class Validator {
  /**
   * Checks if braille array is valid.
   * @param brailleArray braille array
   */
  static validateBrailleArray(brailleArray: BrailleBase[]) {
    // Check if all braille bases are valid
    for (const braille of brailleArray) {
      BrailleDotsValidator.validateBrailleBase(braille);
    }
    // Check if all braille bases have the same dot count
    if (
      !brailleArray.every(
        (braille) => braille.getDotCount() === brailleArray[0].getDotCount(),
      )
    ) {
      throw new ValidationError(validationMessages.INCONSISTENT_DOT_COUNT);
    }
  }
}

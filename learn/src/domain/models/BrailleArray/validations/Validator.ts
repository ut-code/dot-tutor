import Braille from "@/domain/models/Braille/Braille";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Contains static methods that validate the input of the BrailleArray class.
 */
export default class Validator {
  /**
   * Checks if array of braille is valid.
   * @param brailleArray array of braille
   */
  static validateBrailleArray(brailleArray: Braille[]) {
    // Check if the input is an array.
    if (Array.isArray(brailleArray) === false) {
      throw new ValidationError(validationMessages.INVALID_ARRAY);
    }
    // Check if all instances of Braille are valid.
    for (const braille of brailleArray) {
      if (braille instanceof Braille === false) {
        throw new ValidationError(validationMessages.INVALID_BRAILLE_INSTANCE);
      }
    }
    // Check if all instances of Braille have the same number of dots.
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

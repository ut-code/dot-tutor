import BrailleArrayValidationError from "./ValidationError";
import brailleArrayValidationMessages from "./validationMessages";
import Braille from "../../Braille";

/**
 * Contains static methods that validate arrays of instances of Braille.
 */
export default class BrailleArrayValidator {
  /**
   * Checks if an array of instances of Braille is valid.
   * @param brailleArray an array of instances of Braille
   */
  static validateBrailleArray(brailleArray: Braille[]): void {
    // Check if the input is an array.
    if (Array.isArray(brailleArray) === false) {
      throw new BrailleArrayValidationError(
        brailleArrayValidationMessages.INVALID_ARRAY,
      );
    }
    // Check if all instances of Braille are valid.
    for (const braille of brailleArray) {
      if (braille instanceof Braille === false) {
        throw new BrailleArrayValidationError(
          brailleArrayValidationMessages.INVALID_BRAILLE_INSTANCE,
        );
      }
    }
    // Check if all instances of Braille have the same number of dots.
    if (
      brailleArray.length > 0 &&
      !brailleArray.every(
        (braille) => braille.getDotCount() === brailleArray[0].getDotCount(),
      )
    ) {
      throw new BrailleArrayValidationError(
        brailleArrayValidationMessages.INCONSISTENT_DOT_COUNT,
      );
    }
  }
}

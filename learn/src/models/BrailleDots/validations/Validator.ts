import BrailleValueValidator from "@/models/BrailleValue/validations/Validator";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Contains static methods that validate the input of the BrailleDots class.
 */
export default class Validator {
  /**
   * Checks if braille dots are valid.
   * @param dots braille dots
   */
  static validateDots(dots: boolean[]) {
    BrailleValueValidator.validateDotCount(dots.length);
    if (!dots.every((dot) => typeof dot === "boolean")) {
      throw new ValidationError(validationMessages.INVALID_DOTS);
    }
  }
}

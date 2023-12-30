import { DotCountType } from "@/domain/types/DotCountType";
import BrailleDotCountValidationError from "./ValidationError";
import brailleDotCountValidationMessages from "./validationMessages";

/**
 * Contains static methods that validate the number of dots.
 */
export default class BrailleDotCountValidator {
  /**
   * Checks if the number of dots is valid.
   * @param dotCount the number of dots based on the types of braille
   */
  static validateDotCount(dotCount: DotCountType): void {
    if (dotCount !== 6 && dotCount !== 8) {
      throw new BrailleDotCountValidationError(
        brailleDotCountValidationMessages.INVALID_DOT_COUNT,
      );
    }
  }
}

import { DotsArrayType } from "../../types/DotsArrayType";
import { DotsObjectType } from "../../types/DotsObjectType";
import BrailleDotsValidationError from "./ValidationError";
import brailleDotsValidationMessages from "./validationMessages";

/**
 * Contains static methods that validate braille dots.
 */
export default class BrailleDotsValidator {
  /**
   * Checks if an array of braille dots is valid.
   * @param dots an array of braille dots
   */
  static validateDotsArray(dots: DotsArrayType): void {
    if (dots.length !== 6 && dots.length !== 8) {
      throw new BrailleDotsValidationError(
        brailleDotsValidationMessages.INVALID_DOTS_ARRAY,
      );
    }
    if (!dots.every((dot) => typeof dot === "boolean")) {
      throw new BrailleDotsValidationError(
        brailleDotsValidationMessages.INVALID_DOTS_ARRAY,
      );
    }
  }

  /**
   * Checks if an object of braille dots is valid.
   * @param dots an object of braille dots
   */
  static validateDotsObject(dots: DotsObjectType): void {
    const dotCount = Object.keys(dots).length;
    if (dotCount === 6) {
      if (
        !(
          "dot1" in dots &&
          "dot2" in dots &&
          "dot3" in dots &&
          "dot4" in dots &&
          "dot5" in dots &&
          "dot6" in dots
        )
      ) {
        throw new BrailleDotsValidationError(
          brailleDotsValidationMessages.INVALID_DOTS_OBJECT,
        );
      }
      if (
        !(
          typeof dots.dot1 === "boolean" &&
          typeof dots.dot2 === "boolean" &&
          typeof dots.dot3 === "boolean" &&
          typeof dots.dot4 === "boolean" &&
          typeof dots.dot5 === "boolean" &&
          typeof dots.dot6 === "boolean"
        )
      ) {
        throw new BrailleDotsValidationError(
          brailleDotsValidationMessages.INVALID_DOTS_OBJECT,
        );
      }
    } else if (dotCount === 8) {
      if (
        !(
          "dot1" in dots &&
          "dot2" in dots &&
          "dot3" in dots &&
          "dot7" in dots &&
          "dot4" in dots &&
          "dot5" in dots &&
          "dot6" in dots &&
          "dot8" in dots
        )
      ) {
        throw new BrailleDotsValidationError(
          brailleDotsValidationMessages.INVALID_DOTS_OBJECT,
        );
      }
      if (
        !(
          typeof dots.dot1 === "boolean" &&
          typeof dots.dot2 === "boolean" &&
          typeof dots.dot3 === "boolean" &&
          typeof dots.dot7 === "boolean" &&
          typeof dots.dot4 === "boolean" &&
          typeof dots.dot5 === "boolean" &&
          typeof dots.dot6 === "boolean" &&
          typeof dots.dot8 === "boolean"
        )
      ) {
        throw new BrailleDotsValidationError(
          brailleDotsValidationMessages.INVALID_DOTS_OBJECT,
        );
      }
    } else {
      throw new BrailleDotsValidationError(
        brailleDotsValidationMessages.INVALID_DOTS_OBJECT,
      );
    }
  }
}

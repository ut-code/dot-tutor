import BrailleValueValidator from "@/models/BrailleValue/validations/Validator";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";
import { DotsObjectType } from "../types";

/**
 * Contains static methods that validate the input of the BrailleDots class.
 */
export default class Validator {
  /**
   * Checks if an array of braille dots is valid.
   * @param dots an array of braille dots
   */
  static validateDotsArray(dots: boolean[]) {
    BrailleValueValidator.validateDotCount(dots.length);
    if (!dots.every((dot) => typeof dot === "boolean")) {
      throw new ValidationError(validationMessages.INVALID_DOTS);
    }
  }

  /**
   * Checks if an object of braille dots is valid.
   * @param dots an object of braille dots
   */
  static validateDotsObject(dots: DotsObjectType) {
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
        throw new ValidationError(validationMessages.INVALID_DOTS_OBJECT);
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
        throw new ValidationError(validationMessages.INVALID_DOTS_OBJECT);
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
        throw new ValidationError(validationMessages.INVALID_DOTS_OBJECT);
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
        throw new ValidationError(validationMessages.INVALID_DOTS_OBJECT);
      }
    } else {
      throw new ValidationError(validationMessages.INVALID_DOTS_OBJECT);
    }
  }
}

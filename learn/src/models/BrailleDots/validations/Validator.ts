import BrailleBase from "@/models/BrailleBase/BrailleBase";
import { CharacterType, DotCountType } from "@/models/BrailleBase/types";
import { DotsType } from "../types";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * A class that contains static methods for validating braille dots.
 */
export default class Validator {
  /**
   * Checks if braille dots are valid.
   * @param dots braille dots
   */
  static validateDots(dots: DotsType) {
    if (dots.length !== 6 && dots.length !== 8) {
      throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
    }
    if (!dots.every((dot) => typeof dot === "boolean")) {
      throw new ValidationError(validationMessages.NOT_BOOLEAN);
    }
  }

  /**
   * Checks if a braille base is valid.
   */
  static validateBrailleBase<
    Character extends CharacterType,
    DotCount extends DotCountType,
  >(braille: BrailleBase<Character, DotCount>) {
    if (braille instanceof BrailleBase === false) {
      throw new ValidationError(validationMessages.NOT_BRAILLE_BASE);
    }
  }
}

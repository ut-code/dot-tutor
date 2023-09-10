import BrailleBase from "@/models/BrailleBase/BrailleBase";
import BrailleBaseValidator from "@/models/BrailleBase/validations/Validator";
import BrailleCharacterValidator from "@/models/BrailleCharacter/validations/Validator";
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
    BrailleBaseValidator.validateDotCount(dots.length);
    if (!dots.every((dot) => typeof dot === "boolean")) {
      throw new ValidationError(validationMessages.INVALID_DOTS);
    }
  }

  /**
   * Checks if an instance of BrailleBase is valid.
   * @param braille an instance of BrailleBase
   */
  static validateBrailleBase(braille: BrailleBase) {
    BrailleCharacterValidator.validateBrailleBase(braille);
  }

  /**
   * Checks if a braille character is valid.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  static validateCharacter(character: string, dotCount: number) {
    BrailleBaseValidator.validateCharacter(character, dotCount);
  }
}

import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Checks if a braille character matches any character between ⠀ and ⠿
 * @param brailleCharacter a braille character
 * @returns true if a braille character is a valid six-dot braille character, false otherwise
 */
function isValidSixDotBrailleCharacter(brailleCharacter: string): boolean {
  return brailleCharacter.match(/[⠀-⠿]/) !== null;
}

/**
 * Checks if a braille character matches any character between ⠀ and ⣿
 * @param brailleCharacter a braille character
 * @returns true if a braille character is a valid eight-dot braille character, false otherwise
 */
function isValidEightDotBrailleCharacter(brailleCharacter: string): boolean {
  return brailleCharacter.match(/[⠀-⣿]/) !== null;
}

/**
 * A class that contains static methods for validating braille characters.
 */
export default class Validator {
  /**
   * Checks if a braille character is a valid six-dot braille character.
   * @param brailleCharacter a braille character
   */
  static validateSixDotBrailleCharacter(brailleCharacter: string) {
    if (!isValidSixDotBrailleCharacter(brailleCharacter)) {
      throw new ValidationError(validationMessages.NOT_SIX_DOT);
    }
  }

  /**
   * Checks if a braille character is a valid eight-dot braille character.
   * @param brailleCharacte a braille character
   */
  static validateEightDotBrailleCharacter(brailleCharacter: string) {
    if (!isValidEightDotBrailleCharacter(brailleCharacter)) {
      throw new ValidationError(validationMessages.NOT_EIGHT_DOT);
    }
  }

  /**
   * Checks if the number of dots is valid.
   * @param dotCount the number of dots
   */
  static validateDotCount(dotCount: number) {
    if (dotCount !== 6 && dotCount !== 8) {
      throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
    }
  }
}

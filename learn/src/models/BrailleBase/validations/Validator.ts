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
   * Checks if the number of dots is valid.
   * @param dotCount the number of dots
   */
  static validateDotCount(dotCount: number) {
    if (dotCount !== 6 && dotCount !== 8) {
      throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
    }
  }

  /**
   * Checks if a braille character is valid.
   * @param character a braille character
   */
  static validateBrailleCharacter(character: string, dotCount: number) {
    if (dotCount === 6) {
      if (!isValidSixDotBrailleCharacter(character)) {
        throw new ValidationError(validationMessages.NOT_SIX_DOT);
      }
    }
    if (dotCount === 8) {
      if (!isValidEightDotBrailleCharacter(character)) {
        throw new ValidationError(validationMessages.NOT_EIGHT_DOT);
      }
    }
    throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
  }
}

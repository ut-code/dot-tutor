import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";

/**
 * Checks if a braille character matches any character between ⠀ and ⠿
 * @param character a braille character
 * @returns true if a braille character is a valid six-dot braille character, false otherwise
 */
function isValidSixDotBrailleCharacter(character: string): boolean {
  return character.match(/[⠀-⠿]/) !== null;
}

/**
 * Checks if a braille character matches any character between ⠀ and ⣿
 * @param character a braille character
 * @returns true if a braille character is a valid eight-dot braille character, false otherwise
 */
function isValidEightDotBrailleCharacter(character: string): boolean {
  return character.match(/[⠀-⣿]/) !== null;
}

/**
 * Contains static methods that validate the input of the BrailleBase class.
 */
export default class Validator {
  /**
   * Checks if the number of dots is valid.
   * @param dotCount the number of dots based on the type of braille
   */
  static validateDotCount(dotCount: number) {
    if (dotCount !== 6 && dotCount !== 8) {
      throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
    }
  }

  /**
   * Checks if a braille character is valid.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  static validateCharacter(character: string, dotCount: number) {
    if (dotCount === 6) {
      if (!isValidSixDotBrailleCharacter(character)) {
        throw new ValidationError(validationMessages.INVALID_SIX_DOT_BRAILLE);
      }
    } else if (dotCount === 8) {
      if (!isValidEightDotBrailleCharacter(character)) {
        throw new ValidationError(validationMessages.INVALID_EIGHT_DOT_BRAILLE);
      }
    } else {
      throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
    }
  }
}

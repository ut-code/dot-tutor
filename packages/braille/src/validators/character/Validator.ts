import { CharacterType } from "../../types/CharacterType.js";
import { DotCountType } from "../../types/DotCountType.js";
import BrailleCharacterValidationError from "./ValidationError.js";
import brailleCharacterValidationMessages from "./validationMessages.js";
import brailleDotCountValidationMessages from "../dot-count/validationMessages.js";

/**
 * Checks if a braille character matches any character between ⠀ and ⠿.
 * @param character a braille character
 * @returns true if a braille character is a valid six-dot braille character, false otherwise
 */
function isValidSixDotBrailleCharacter(character: string): boolean {
  return character.match(/[⠀-⠿]/) !== null;
}

/**
 * Checks if a braille character matches any character between ⠀ and ⣿.
 * @param character a braille character
 * @returns true if a braille character is a valid eight-dot braille character, false otherwise
 */
function isValidEightDotBrailleCharacter(character: string): boolean {
  return character.match(/[⠀-⣿]/) !== null;
}

/**
 * Contains static methods that validate braille characters.
 */
export default class BrailleCharacterValidator {
  /**
   * Checks if a braille character is valid.
   * @param character a braille character
   * @param dotCount the number of dots based on the types of braille
   */
  static validateCharacter(
    character: CharacterType,
    dotCount: DotCountType,
  ): void {
    if (dotCount === 6) {
      if (!isValidSixDotBrailleCharacter(character)) {
        throw new BrailleCharacterValidationError(
          brailleCharacterValidationMessages.INVALID_SIX_DOT_BRAILLE,
        );
      }
    } else if (dotCount === 8) {
      if (!isValidEightDotBrailleCharacter(character)) {
        throw new BrailleCharacterValidationError(
          brailleCharacterValidationMessages.INVALID_EIGHT_DOT_BRAILLE,
        );
      }
    } else {
      throw new BrailleCharacterValidationError(
        brailleDotCountValidationMessages.INVALID_DOT_COUNT,
      );
    }
  }
}

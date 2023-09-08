import ValidationError from "./validations/ValidationError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { SixDotBrailleCharacterType } from "./types";
import { isValidSixDotBrailleCharacter } from "./utils/isValidBrailleCharacter";
import validationMessages from "./validations/validationMessages";

/**
 * A class representing the information of a six-dot braille character.
 */
export default class SixDotBrailleCharacter extends AbstractBrailleCharacter<SixDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter a braille character
   */
  constructor(brailleCharacter: SixDotBrailleCharacterType) {
    if (!isValidSixDotBrailleCharacter(brailleCharacter)) {
      throw new ValidationError(validationMessages.NOT_SIX_DOT);
    }
    super(brailleCharacter, 6);
  }
}

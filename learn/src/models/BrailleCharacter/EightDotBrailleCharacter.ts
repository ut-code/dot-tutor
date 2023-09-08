import ValidationError from "./validations/ValidationError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { EightDotBrailleCharacterType } from "./types";
import { isValidEightDotBrailleCharacter } from "./utils/isValidBrailleCharacter";
import validationMessages from "./validations/validationMessages";

/**
 * A class representing the information of an eight-dot braille character.
 */
export default class EightDotBrailleCharacter extends AbstractBrailleCharacter<EightDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter a braille character
   */
  constructor(brailleCharacter: EightDotBrailleCharacterType) {
    if (!isValidEightDotBrailleCharacter(brailleCharacter)) {
      throw new ValidationError(validationMessages.NOT_EIGHT_DOT);
    }
    super(brailleCharacter, 8);
  }
}

import ValidationError from "./validations/ValidationError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { EightDotBrailleCharacterType } from "./types";
import { isValidEightDotBrailleCharacter } from "./utils/isValidBrailleCharacter";

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
      throw new ValidationError(
        "Not a eight-dot braille character! The input must be a Unicode character of eight-dot braille.",
      );
    }
    super(brailleCharacter, 8);
  }
}

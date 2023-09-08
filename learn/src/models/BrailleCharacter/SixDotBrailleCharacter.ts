import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { SixDotBrailleCharacterType } from "./types";
import Validator from "./validations/Validator";

/**
 * A class representing the information of a six-dot braille character.
 */
export default class SixDotBrailleCharacter extends AbstractBrailleCharacter<SixDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter a braille character
   */
  constructor(brailleCharacter: SixDotBrailleCharacterType) {
    Validator.validateSixDotBrailleCharacter(brailleCharacter);
    super(brailleCharacter, 6);
  }
}

import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { EightDotBrailleCharacterType } from "./types";
import Validator from "./validations/Validator";

/**
 * A class representing the information of an eight-dot braille character.
 */
export default class EightDotBrailleCharacter extends AbstractBrailleCharacter<EightDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter a braille character
   */
  constructor(brailleCharacter: EightDotBrailleCharacterType) {
    Validator.validateEightDotBrailleCharacter(brailleCharacter);
    super(brailleCharacter, 8);
  }
}

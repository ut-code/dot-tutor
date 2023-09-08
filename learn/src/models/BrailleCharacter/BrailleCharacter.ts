import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import {
  EightDotBrailleCharacterType,
  SixDotBrailleCharacterType,
} from "./types";
import Validator from "./validations/Validator";

/**
 * A class representing the information of a braille character.
 */
export default class BrailleCharacter extends AbstractBrailleCharacter<
  SixDotBrailleCharacterType | EightDotBrailleCharacterType
> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter a braille character
   */
  constructor(brailleCharacter: SixDotBrailleCharacterType, dotCount: 6);
  constructor(brailleCharacter: EightDotBrailleCharacterType, dotCount: 8);
  constructor(
    brailleCharacter: SixDotBrailleCharacterType | EightDotBrailleCharacterType,
    dotCount: 6 | 8,
  ) {
    Validator.validateDotCount(dotCount);
    if (dotCount === 6) {
      Validator.validateSixDotBrailleCharacter(brailleCharacter);
    } else {
      Validator.validateEightDotBrailleCharacter(brailleCharacter);
    }
    super(brailleCharacter, dotCount);
  }
}

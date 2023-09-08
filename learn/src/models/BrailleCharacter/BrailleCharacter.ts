import ValidationError from "./validations/ValidationError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import {
  EightDotBrailleCharacterType,
  SixDotBrailleCharacterType,
} from "./types";
import {
  isValidEightDotBrailleCharacter,
  isValidSixDotBrailleCharacter,
} from "./utils/isValidBrailleCharacter";
import validationMessages from "./validations/validationMessages";

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
    if (dotCount === 6 && !isValidSixDotBrailleCharacter(brailleCharacter)) {
      throw new ValidationError(validationMessages.NOT_SIX_DOT);
    }
    if (dotCount === 8 && !isValidEightDotBrailleCharacter(brailleCharacter)) {
      throw new ValidationError(validationMessages.NOT_EIGHT_DOT);
    }
    if (dotCount !== 6 && dotCount !== 8) {
      throw new ValidationError(validationMessages.INVALID_DOT_COUNT);
    }
    super(brailleCharacter, dotCount);
  }
}

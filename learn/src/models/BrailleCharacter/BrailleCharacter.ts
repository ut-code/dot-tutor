import BrailleError from "@/errors/BrailleError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import {
  EightDotBrailleCharacterType,
  SixDotBrailleCharacterType,
} from "./types";
import {
  isValidEightDotBrailleCharacter,
  isValidSixDotBrailleCharacter,
} from "./utils/isValidBrailleCharacter";

/**
 * A class representing the information of the braille character.
 */
export default class BrailleCharacter extends AbstractBrailleCharacter<
  SixDotBrailleCharacterType | EightDotBrailleCharacterType
> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter the braille character
   */
  constructor(brailleCharacter: SixDotBrailleCharacterType, dotCount: 6);
  constructor(brailleCharacter: EightDotBrailleCharacterType, dotCount: 8);
  constructor(
    brailleCharacter: SixDotBrailleCharacterType | EightDotBrailleCharacterType,
    dotCount: 6 | 8,
  ) {
    if (dotCount === 6 && !isValidSixDotBrailleCharacter(brailleCharacter)) {
      throw new BrailleError(
        "Not a six-dot braille character! The input must be a Unicode character of six-dot braille.",
      );
    }
    if (dotCount === 8 && !isValidEightDotBrailleCharacter(brailleCharacter)) {
      throw new BrailleError(
        "Not a eight-dot braille character! The input must be a Unicode character of eight-dot braille.",
      );
    }
    if (dotCount !== 6 && dotCount !== 8) {
      throw new BrailleError(
        "Invalid number of dots! The number of dots must be either 6 or 8.",
      );
    }
    super(brailleCharacter, dotCount);
  }
}

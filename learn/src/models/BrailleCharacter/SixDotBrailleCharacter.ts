import BrailleError from "@/errors/BrailleError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { SixDotBrailleCharacterType } from "./types";
import { isValidSixDotBrailleCharacter } from "./utils/isValidBrailleCharacter";

/**
 * A class representing the information of the six-dot braille character.
 */
export default class SixDotBrailleCharacter extends AbstractBrailleCharacter<SixDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter the braille character
   */
  constructor(brailleCharacter: SixDotBrailleCharacterType) {
    if (!isValidSixDotBrailleCharacter(brailleCharacter)) {
      throw new BrailleError(
        "Not a six-dot braille character! The input must be a Unicode character of six-dot braille.",
      );
    }
    super(brailleCharacter, 6);
  }
}

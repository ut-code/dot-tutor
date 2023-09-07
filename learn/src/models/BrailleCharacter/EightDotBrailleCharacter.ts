import BrailleError from "@/errors/BrailleError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { EightDotBrailleCharacterType } from "./types";
import { isValidEightDotBrailleCharacter } from "./utils/isValidBrailleCharacter";

/**
 * A class representing the information of the eight-dot braille character.
 */
export default class EightDotBrailleCharacter extends AbstractBrailleCharacter<EightDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter the braille character
   */
  constructor(brailleCharacter: EightDotBrailleCharacterType) {
    if (!isValidEightDotBrailleCharacter(brailleCharacter)) {
      throw new BrailleError(
        "Not a eight-dot braille character! The input must be a Unicode character of eight-dot braille.",
      );
    }
    super(brailleCharacter, 8);
  }
}

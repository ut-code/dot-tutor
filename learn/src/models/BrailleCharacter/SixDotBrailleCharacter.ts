import BrailleError from "@/errors/BrailleError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { SixDotBrailleCharacterType } from "./types";

/**
 * A class representing the information of the six-dot braille character.
 */
export default class SixDotBrailleCharacter extends AbstractBrailleCharacter<SixDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter the braille character
   */
  constructor(brailleCharacter: SixDotBrailleCharacterType) {
    super(brailleCharacter, 6);
    if (!this.isValidSixDotBraille(brailleCharacter)) {
      throw new BrailleError(
        "Not a six-dot braille character! The input must be a Unicode character of six-dot braille.",
      );
    }
  }

  /**
   * Checks if the braille character matches any character between ⠀ and ⠿
   * @param brailleCharacter the braille character
   * @returns true if the braille character is a valid six-dot braille character, false otherwise
   */
  private isValidSixDotBraille(brailleCharacter: string): boolean {
    return brailleCharacter.match(/[⠀-⠿]/) !== null;
  }
}

import BrailleError from "@/errors/BrailleError";
import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import { EightDotBrailleCharacterType } from "./types";

/**
 * A class representing the information of the eight-dot braille character.
 */
export default class EightDotBrailleCharacter extends AbstractBrailleCharacter<EightDotBrailleCharacterType> {
  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter the braille character
   */
  constructor(brailleCharacter: EightDotBrailleCharacterType) {
    super(brailleCharacter, 8);
    if (!this.isValidEightDotBraille(brailleCharacter)) {
      throw new BrailleError(
        "Not a eight-dot braille character! The input must be a Unicode character of eight-dot braille.",
      );
    }
  }

  /**
   * Checks if the braille character matches any character between ⠀ and ⣿
   * @param brailleCharacter the braille character
   * @returns true if the braille character is a valid eight-dot braille character, false otherwise
   */
  private isValidEightDotBraille(brailleCharacter: string): boolean {
    return brailleCharacter.match(/[⠀-⣿]/) !== null;
  }
}

import { CharacterType, DotCountType } from "./types";
import Validator from "./validations/Validator";

/**
 * A class representing the base information of a braille.
 */
export default class BrailleBase<
  Character extends CharacterType,
  DotCount extends DotCountType,
> {
  private readonly character: Character;

  private readonly dotCount: DotCount;

  /**
   * Constructs a new instance.
   * @param braille a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(brailleCharacter: Character, dotCount: DotCount) {
    Validator.validateDotCount(dotCount);
    this.dotCount = dotCount;
    Validator.validateBrailleCharacter(brailleCharacter, dotCount);
    this.character = brailleCharacter;
  }

  /**
   * Gets the Unicode of the braille character.
   * @returns the Unicode of the braille character
   */
  getUnicode(): Character {
    return this.character;
  }

  /**
   * Gets the number of dots based on the type of braille.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): DotCount {
    return this.dotCount;
  }

  /**
   * Checks if the braille character is equal to the other.
   * @param other the other braille character
   * @returns true if the braille character is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.character === other.character;
  }
}

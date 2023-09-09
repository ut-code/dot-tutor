import BrailleBase from "../BrailleBase/BrailleBase";
import { CharacterType, DotCountType } from "../BrailleBase/types";

/**
 * A class representing the information of a braille character.
 */
export default abstract class AbstractBrailleCharacter<
  Character extends CharacterType,
  DotCount extends DotCountType,
> {
  private readonly braille: BrailleBase<Character, DotCount>;

  /**
   * Constructs a new instance with the given braille character.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(character: Character, dotCount: DotCount) {
    this.braille = new BrailleBase(character, dotCount);
  }

  /**
   * Gets the Unicode of the braille character.
   * @returns the Unicode of the braille character
   */
  getUnicode(): Character {
    return this.braille.getUnicode();
  }

  /**
   * Gets the number of dots based on the type of braille.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): DotCount {
    return this.braille.getDotCount();
  }

  /**
   * Checks if the braille character is equal to the other.
   * @param other the other braille character
   * @returns true if the braille character is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.braille.equals(other.braille);
  }
}

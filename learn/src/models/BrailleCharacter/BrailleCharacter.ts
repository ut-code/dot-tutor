import BrailleBase from "../BrailleBase/BrailleBase";
import {
  CharacterType,
  DotCountType,
  EightDotBrailleCharacterType,
  EightDotBrailleDotCountType,
  SixDotBrailleCharacterType,
  SixDotBrailleDotCountType,
} from "../BrailleBase/types";

/**
 * A class representing the information of a braille character.
 */
export default abstract class BrailleCharacter {
  private readonly braille: BrailleBase;

  /**
   * Constructs a new instance with the given braille character.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(
    character: SixDotBrailleCharacterType,
    dotCount: SixDotBrailleDotCountType,
  );
  constructor(
    character: EightDotBrailleCharacterType,
    dotCount: EightDotBrailleDotCountType,
  );
  constructor(character: CharacterType, dotCount: DotCountType) {
    this.braille = new BrailleBase(character, dotCount);
  }

  /**
   * Gets the Unicode of the braille character.
   * @returns the Unicode of the braille character
   */
  getUnicode(): string {
    return this.braille.getUnicode();
  }

  /**
   * Gets the number of dots based on the type of braille.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
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

/**
 * A class representing the information of a braille character.
 */
export default abstract class AbstractBrailleCharacter<
  BrailleCharacterType extends string,
> {
  private readonly brailleCharacter: BrailleCharacterType;

  private readonly dotCount: number;

  /**
   * Constructs a new instance with the given braille character.
   * @param brailleCharacter a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(brailleCharacter: BrailleCharacterType, dotCount: number) {
    this.brailleCharacter = brailleCharacter;
    this.dotCount = dotCount;
  }

  /**
   * Gets the Unicode of the braille character.
   * @returns the Unicode of the braille character
   */
  getUnicode(): BrailleCharacterType {
    return this.brailleCharacter;
  }

  /**
   * Gets the number of dots based on the type of braille.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.dotCount;
  }

  /**
   * Checks if the braille character is equal to the other.
   * @param other the other braille character
   * @returns true if the braille character is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.brailleCharacter === other.brailleCharacter;
  }
}

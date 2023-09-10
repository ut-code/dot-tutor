import Validator from "./validations/Validator";

/**
 * Represents a base information of a braille.
 */
export default class BrailleBase {
  private readonly character: string;

  private readonly dotCount: number;

  /**
   * Constructs a new instance.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(character: string, dotCount: number) {
    Validator.validateDotCount(dotCount);
    this.dotCount = dotCount;
    Validator.validateCharacter(character, dotCount);
    this.character = character;
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.dotCount;
  }

  /**
   * Gets the braille character.
   * @returns the braille character
   */
  getCharacter(): string {
    return this.character;
  }

  /**
   * Checks if the braille is equal to the other.
   * @param other the other braille
   * @returns true if the braille is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return (
      this.character === other.character && this.dotCount === other.dotCount
    );
  }
}

import BrailleArrayBase from "../BrailleArrayBase/BrailleArrayBase";
import BrailleBase from "../BrailleBase/BrailleBase";

/**
 * Represents a braille text.
 */
export default class BrailleString {
  private readonly brailleArray: BrailleArrayBase;

  /**
   * Constructs a new instance with the given braille text.
   * @param text braille text
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(text: string, dotCount: number);
  /**
   * Constructs a new instance with the given array of braille.
   * @param brailleArray an array of braille
   */
  constructor(brailleArray: BrailleBase[]);
  constructor(textOrBrailleArray: string | BrailleBase[], dotCount?: number) {
    if (typeof textOrBrailleArray === "string") {
      if (dotCount === undefined) {
        throw new Error("The dotCount is undefined.");
      }
      this.brailleArray = new BrailleArrayBase(
        Array.from(textOrBrailleArray).map(
          (character) => new BrailleBase(character, dotCount),
        ),
      );
    } else {
      this.brailleArray = new BrailleArrayBase(textOrBrailleArray);
    }
  }

  /**
   * Gets the braille text.
   * @returns the braille text
   */
  getText(): string {
    return this.brailleArray
      .getBrailleArray()
      .map((braille) => braille.getCharacter())
      .join("");
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.brailleArray.getDotCount();
  }

  /**
   * Gets the array of braille.
   * @returns the array of braille
   */
  getBrailleArray(): BrailleBase[] {
    return this.brailleArray.getBrailleArray();
  }

  /**
   * Checks if the array of braille is equal to the other.
   * @param other the other array of braille
   * @returns true if the array of braille is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.brailleArray.equals(other.brailleArray);
  }
}

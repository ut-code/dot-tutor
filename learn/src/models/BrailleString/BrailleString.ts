import BrailleArrayBase from "../BrailleArrayBase/BrailleArrayBase";
import BrailleValue from "../BrailleValue/BrailleValue";

/**
 * Represents a braille text.
 */
export default class BrailleString extends BrailleArrayBase {
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
  constructor(brailleArray: BrailleValue[]);
  constructor(textOrBrailleArray: string | BrailleValue[], dotCount?: number) {
    if (typeof textOrBrailleArray === "string") {
      if (dotCount === undefined) {
        throw new Error("The dotCount is undefined.");
      }
      super(
        Array.from(textOrBrailleArray).map(
          (character) => new BrailleValue(character, dotCount),
        ),
      );
    } else {
      super(textOrBrailleArray);
    }
  }

  /**
   * Gets the braille text.
   * @returns the braille text
   */
  getText(): string {
    return this.getBrailleArray()
      .map((braille) => braille.getCharacter())
      .join("");
  }
}

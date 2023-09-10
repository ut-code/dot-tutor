import BrailleValue from "./BrailleValue/BrailleValue";
import BrailleDots from "./BrailleDots/BrailleDots";
import { DotsType } from "./BrailleDots/types";
import BrailleString from "./BrailleString/BrailleString";
import BrailleArrayBase from "./BrailleArrayBase/BrailleArrayBase";
import BrailleDotsArray from "./BrailleDotsArray/BrailleDotsArray";

/**
 * A class representing the information of braille text.
 */
export default class BrailleArray extends BrailleArrayBase {
  /**
   * Constructs a new instance with the given braille text.
   * @param text braille text
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(text: string, dotCount: number);
  /**
   * Constructs a new instance with the given array of braille dots.
   * @param dotsArray an array of braille dots
   */
  constructor(dots: DotsType[]);
  constructor(textOrDots: string | DotsType[], dotCount?: number) {
    if (typeof textOrDots === "string") {
      if (dotCount === undefined) {
        throw new Error("The dotCount is undefined.");
      }
      super(new BrailleString(textOrDots, dotCount).getBrailleArray());
    } else {
      super(new BrailleDotsArray(textOrDots).getBrailleArray());
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

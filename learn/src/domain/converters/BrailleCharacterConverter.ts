import { CharacterType } from "../types/CharacterType";
import { DotCountType } from "../types/DotCountType";
import { DotsArrayType } from "../types/DotsArrayType";

/**
 * Contains static methods that convert a braille character to an array of braille dots and vice versa.
 */
export default class BrailleCharacterConverter {
  /**
   * Converts an array of braille dots to the braille character corresponding to the array of braille dots.
   * @param dots an array of braille dots
   * @returns the braille character corresponding to the array of braille dots
   */
  static fromDotsArray(dots: DotsArrayType): CharacterType {
    // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf.
    let codePoint = 0x2800;
    for (let i = 0; i < dots.length; i += 1) {
      // If a dot is true, add 2 ** i to codePoint.
      if (dots[i]) codePoint += 2 ** i;
    }
    return String.fromCodePoint(codePoint) as CharacterType;
  }

  /**
   * Converts a braille character to the array of braille dots corresponding to the braille character.
   * @param character a braille character
   * @param dotCount the number of dots based on the types of braille
   * @returns the array of braille dots corresponding to the braille character
   */
  static toDotsArray(
    character: CharacterType,
    dotCount: DotCountType,
  ): DotsArrayType {
    const codePoint = character.codePointAt(0);
    if (codePoint === undefined) {
      throw new Error("The code point of the character is undefined.");
    }
    const dots = [];
    // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf.
    for (let i = 0; i < dotCount; i += 1) {
      // If the i-th bit is 1, push true to dots.
      dots.push(Boolean((codePoint - 0x2800) & (2 ** i)));
    }
    return dots as DotsArrayType;
  }
}

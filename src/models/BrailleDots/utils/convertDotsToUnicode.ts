import BrailleError from "../../../errors/BrailleError";
import { SixDotsType, EightDotsType } from "../types";

/**
 * Convert 6-dot or 8-dot braille array to the corresponding Unicode character.
 * @param dots the dots of braille (6 or 8 dots)
 * @returns the Unicode character of braille
 */
export default function convertDotsToUnicode(
  dots: SixDotsType | EightDotsType,
): string {
  if (dots.length !== 6 && dots.length !== 8) {
    throw new BrailleError("Invalid Number of Dots! Must be 6 or 8.");
  }

  // See the Unicode table at https://www.unicode.org/charts/PDF/U2800.pdf
  let codePoint = 0x2800;
  // If the dot is true, add 2 ** i to codePoint.
  for (let i = 0; i < dots.length; i += 1) {
    if (dots[i]) codePoint += 2 ** i;
  }
  return String.fromCodePoint(codePoint);
}

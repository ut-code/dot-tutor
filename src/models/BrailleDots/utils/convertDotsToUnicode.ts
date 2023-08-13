import { SixDotsType, EightDotsType } from "../types";

/**
 * Converts 6-dot or 8-dot braille dots to the Unicode character corresponding to the braille dots.
 * @param dots the braille dots (6 or 8 dots)
 * @returns the Unicode character corresponding to the braille dots
 */
export default function convertDotsToUnicode(
  dots: SixDotsType | EightDotsType,
): string {
  // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf
  let codePoint = 0x2800;
  // If the dot is true, add 2 ** i to codePoint.
  for (let i = 0; i < dots.length; i += 1) {
    if (dots[i]) codePoint += 2 ** i;
  }
  return String.fromCodePoint(codePoint);
}

import BrailleBase from "@/models/BrailleBase/BrailleBase";
import Validator from "../validations/Validator";

/**
 * Converts braille dots to the braille character corresponding to the braille dots.
 * @param dots braille dots
 * @returns the braille character corresponding to the braille dots
 */
function convertDotsToCharacter(dots: boolean[]): string {
  // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf
  let codePoint = 0x2800;
  for (let i = 0; i < dots.length; i += 1) {
    // If a dot is true, add 2 ** i to codePoint.
    if (dots[i]) codePoint += 2 ** i;
  }
  return String.fromCodePoint(codePoint);
}

/**
 * Converts braille dots to the braille corresponding to the braille dots.
 * @param dots braille dots
 * @returns the braille corresponding to the braille dots
 */
export default function convertDotsToBraille(dots: boolean[]): BrailleBase {
  Validator.validateDots(dots);
  const unicode = convertDotsToCharacter(dots);
  return new BrailleBase(unicode, dots.length);
}

import BrailleBase from "@/models/BrailleBase/BrailleBase";
import { CharacterType, DotCountType } from "@/models/BrailleBase/types";
import { DotsType } from "../types";
import Validator from "../validations/Validator";

/**
 * Converts braille dots to the Unicode character corresponding to the braille dots.
 * @param dots braille dots
 * @returns the Unicode character corresponding to the braille dots
 */
function convertDotsToUnicode(dots: boolean[]): string {
  // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf
  let codePoint = 0x2800;
  // If a dot is true, add 2 ** i to codePoint.
  for (let i = 0; i < dots.length; i += 1) {
    if (dots[i]) codePoint += 2 ** i;
  }
  return String.fromCodePoint(codePoint);
}

/**
 * Converts braille dots to the braille corresponding to the braille dots.
 * @param dots braille dots
 * @returns the braille corresponding to the braille dots
 */
export default function convertDotsToBraille(dots: DotsType): BrailleBase {
  Validator.validateDots(dots);

  const unicode = convertDotsToUnicode(dots);

  return new BrailleBase(unicode, dots.length);
}

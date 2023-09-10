import BrailleValue from "@/models/BrailleValue/BrailleValue";
import Validator from "../validations/Validator";
import { DotsObjectType } from "../types";

/**
 * Converts an array of braille dots to the braille character corresponding to the braille dots.
 * @param dots an array of braille dots
 * @returns the braille character corresponding to the braille dots
 */
function convertDotsArrayToCharacter(dots: boolean[]): string {
  // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf
  let codePoint = 0x2800;
  for (let i = 0; i < dots.length; i += 1) {
    // If a dot is true, add 2 ** i to codePoint.
    if (dots[i]) codePoint += 2 ** i;
  }
  return String.fromCodePoint(codePoint);
}

/**
 * Converts an array of braille dots to the braille corresponding to the braille dots.
 * @param dots an array of braille dots
 * @returns the braille corresponding to the braille dots
 */
export function convertDotsArrayToBraille(dots: boolean[]): BrailleValue {
  Validator.validateDotsArray(dots);
  const unicode = convertDotsArrayToCharacter(dots);
  return new BrailleValue(unicode, dots.length);
}

/**
 * Converts an object of braille dots to the braille corresponding to the braille dots.
 * @param dots an object of braille dots
 * @returns the braille corresponding to the braille dots
 */
export function convertDotsObjectToBraille(dots: DotsObjectType): BrailleValue {
  Validator.validateDotsObject(dots);
  const dotsArray = Object.values(dots);
  return convertDotsArrayToBraille(dotsArray);
}

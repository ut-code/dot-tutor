import BrailleCharacter from "@/models/BrailleCharacter/BrailleCharacter";
import {
  EightDotBrailleCharacterType,
  SixDotBrailleCharacterType,
} from "@/models/BrailleCharacter/types";
import BrailleError from "@/errors/BrailleError";
import { SixDotsType, EightDotsType } from "../types";

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
 * Converts 6-dot braille dots to the Unicode character corresponding to the braille dots.
 * @param dots 6-dot braille dots
 * @returns the Unicode character corresponding to the braille dots
 */
export function convertSixDotsToUnicode(dots: SixDotsType): BrailleCharacter {
  if (dots.length !== 6) {
    throw new BrailleError(
      "Invalid number of dots! The number of dots must be 6.",
    );
  }
  if (!dots.every((dot) => typeof dot === "boolean")) {
    throw new BrailleError(
      "Invalid type of dots! The type of dots must be boolean.",
    );
  }
  const unicode = convertDotsToUnicode(dots);
  return new BrailleCharacter(unicode as SixDotBrailleCharacterType, 6);
}

/**
 * Converts 8-dot braille dots to the Unicode character corresponding to the braille dots.
 * @param dots 8-dot braille dots
 * @returns the Unicode character corresponding to the braille dots
 */
export function convertEightDotsToUnicode(
  dots: EightDotsType,
): BrailleCharacter {
  if (dots.length !== 8) {
    throw new BrailleError(
      "Invalid number of dots! The number of dots must be 8.",
    );
  }
  if (!dots.every((dot) => typeof dot === "boolean")) {
    throw new BrailleError(
      "Invalid type of dots! The type of dots must be boolean.",
    );
  }
  const unicode = convertDotsToUnicode(dots);
  return new BrailleCharacter(unicode as EightDotBrailleCharacterType, 8);
}

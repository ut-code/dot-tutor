import BrailleBase from "@/models/BrailleBase/BrailleBase";
import { DotsType } from "../types";

/**
 * Converts a braille to the braille dots corresponding to the braille.
 * @param character a braille
 * @returns the braille dots corresponding to the braille
 */
export default function convertBrailleToDots(braille: BrailleBase): DotsType {
  const codePoint = braille.getUnicode().codePointAt(0);
  if (codePoint === undefined) {
    throw new Error("The code point of the character is undefined.");
  }
  const dots = [];
  // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf
  for (let i = 0; i < braille.getDotCount(); i += 1) {
    // If the i-th bit is 1, push true to dots.
    dots.push(Boolean((codePoint - 0x2800) & (2 ** i)));
  }
  return dots as DotsType;
}

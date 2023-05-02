import {
  type BrailleChar,
  type BrailleState,
} from "../types/brailleDefinitions";

/**
 * convert the state of braille to braille character
 * @param brailleState the state of braille
 * @returns braille character
 */
export default function toBrailleChar(brailleState: BrailleState): BrailleChar {
  // See https://www.unicode.org/charts/PDF/U2800.pdf
  let codePoint = 0x2800;
  if (brailleState.Dot1) codePoint += 2 ** 0;
  if (brailleState.Dot2) codePoint += 2 ** 1;
  if (brailleState.Dot3) codePoint += 2 ** 2;
  if (brailleState.Dot4) codePoint += 2 ** 3;
  if (brailleState.Dot5) codePoint += 2 ** 4;
  if (brailleState.Dot6) codePoint += 2 ** 5;
  return String.fromCodePoint(codePoint) as BrailleChar;
}

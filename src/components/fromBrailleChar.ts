import {
  type BrailleChar,
  type BrailleState,
  defaultBrailleStateValue,
} from "./brailleDefinitions";

/**
 * convert braille character to the state of braille
 * @param brailleChar braille character
 * @returns the state of braille
 */
export default function fromBrailleChar(
  brailleChar: BrailleChar
): BrailleState {
  // See https://www.unicode.org/charts/PDF/U2800.pdf
  const brailleState = { ...defaultBrailleStateValue };
  const codePoint = brailleChar.codePointAt(0) as number;
  brailleState.Dot1 = Boolean((codePoint - 0x2800) & (2 ** 0));
  brailleState.Dot2 = Boolean((codePoint - 0x2800) & (2 ** 1));
  brailleState.Dot3 = Boolean((codePoint - 0x2800) & (2 ** 2));
  brailleState.Dot4 = Boolean((codePoint - 0x2800) & (2 ** 3));
  brailleState.Dot5 = Boolean((codePoint - 0x2800) & (2 ** 4));
  brailleState.Dot6 = Boolean((codePoint - 0x2800) & (2 ** 5));
  return { ...brailleState };
}

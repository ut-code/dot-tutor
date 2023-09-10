import BrailleBase from "@/models/BrailleBase/BrailleBase";
import Validator from "../validations/Validator";

/**
 * Converts a braille character to the braille dots corresponding to the braille character.
 * @param character a braille character
 * @param dotCount the number of dots based on the type of braille
 * @returns the braille dots corresponding to the braille character
 */
function convertCharacterToDots(
  character: string,
  dotCount: number,
): boolean[] {
  const codePoint = character.codePointAt(0);
  if (codePoint === undefined) {
    throw new Error("The code point of the character is undefined.");
  }
  const dots = [];
  // See the Unicode patterns at https://www.unicode.org/charts/PDF/U2800.pdf
  for (let i = 0; i < dotCount; i += 1) {
    // If the i-th bit is 1, push true to dots.
    dots.push(Boolean((codePoint - 0x2800) & (2 ** i)));
  }
  return dots;
}

/**
 * Converts a braille to the braille dots corresponding to the braille.
 * @param braille a braille
 * @returns the braille dots corresponding to the braille
 */
export default function convertBrailleToDots(braille: BrailleBase): boolean[] {
  const character = braille.getCharacter();
  const dotCount = braille.getDotCount();
  Validator.validateCharacter(character, dotCount);
  return convertCharacterToDots(character, dotCount);
}

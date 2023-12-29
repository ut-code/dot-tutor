import BrailleValue from "@/domain/models/BrailleValue/BrailleValue";
import { DotsObjectType } from "../types";

/**
 * Converts a braille character to the array of braille dots corresponding to the braille character.
 * @param character a braille character
 * @param dotCount the number of dots based on the type of braille
 * @returns the array of braille dots corresponding to the braille character
 */
function convertCharacterToDotsArray(
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
 * Converts a braille to the array of braille dots corresponding to the braille.
 * @param braille a braille
 * @returns the array of braille dots corresponding to the braille
 */
export function convertBrailleToDotsArray(braille: BrailleValue): boolean[] {
  return convertCharacterToDotsArray(
    braille.getCharacter(),
    braille.getDotCount(),
  );
}

/**
 * Converts a braille to the object of braille dots corresponding to the braille.
 * @param braille a braille
 * @returns the object of braille dots corresponding to the braille
 */
export function convertBrailleToDotsObject(
  braille: BrailleValue,
): DotsObjectType {
  const dotsArray = convertBrailleToDotsArray(braille);
  if (dotsArray.length === 6) {
    return {
      dot1: dotsArray[0],
      dot2: dotsArray[1],
      dot3: dotsArray[2],
      dot4: dotsArray[3],
      dot5: dotsArray[4],
      dot6: dotsArray[5],
    };
  }
  return {
    dot1: dotsArray[0],
    dot2: dotsArray[1],
    dot3: dotsArray[2],
    dot7: dotsArray[6],
    dot4: dotsArray[3],
    dot5: dotsArray[4],
    dot6: dotsArray[5],
    dot8: dotsArray[7],
  };
}

/**
 * Checks if a braille character matches any character between ⠀ and ⠿
 * @param brailleCharacter a braille character
 * @returns true if a braille character is a valid six-dot braille character, false otherwise
 */
export function isValidSixDotBrailleCharacter(
  brailleCharacter: string,
): boolean {
  return brailleCharacter.match(/[⠀-⠿]/) !== null;
}

/**
 * Checks if a braille character matches any character between ⠀ and ⣿
 * @param brailleCharacter a braille character
 * @returns true if a braille character is a valid eight-dot braille character, false otherwise
 */
export function isValidEightDotBrailleCharacter(
  brailleCharacter: string,
): boolean {
  return brailleCharacter.match(/[⠀-⣿]/) !== null;
}

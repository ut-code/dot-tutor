/**
 * Checks if the braille character matches any character between ⠀ and ⠿
 * @param brailleCharacter the braille character
 * @returns true if the braille character is a valid six-dot braille character, false otherwise
 */
export function isValidSixDotBrailleCharacter(
  brailleCharacter: string,
): boolean {
  return brailleCharacter.match(/[⠀-⠿]/) !== null;
}

/**
 * Checks if the braille character matches any character between ⠀ and ⣿
 * @param brailleCharacter the braille character
 * @returns true if the braille character is a valid eight-dot braille character, false otherwise
 */
export function isValidEightDotBrailleCharacter(
  brailleCharacter: string,
): boolean {
  return brailleCharacter.match(/[⠀-⣿]/) !== null;
}

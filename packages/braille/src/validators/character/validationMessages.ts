/**
 * A collection of validation messages that are used when validating braille characters.
 */
const brailleCharacterValidationMessages = {
  /**
   * A message that is displayed when a six-dot braille character is invalid.
   */
  INVALID_SIX_DOT_BRAILLE:
    "Invalid six-dot braille! The input must match any character between ⠀ and ⠿.",
  /**
   * A message that is displayed when an eight-dot braille character is invalid.
   */
  INVALID_EIGHT_DOT_BRAILLE:
    "Invalid eight-dot braille! The input must match any character between ⠀ and ⣿.",
};

export default brailleCharacterValidationMessages;

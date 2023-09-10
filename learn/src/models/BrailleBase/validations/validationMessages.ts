/**
 * A collection of validation messages that are used by the BrailleBase class.
 */
const validationMessages = {
  /**
   * A message that is displayed when the number of dots is invalid.
   */
  INVALID_DOT_COUNT:
    "Invalid number of dots! The number of dots must be either 6 or 8.",
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

export default validationMessages;

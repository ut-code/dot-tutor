/**
 * Validation messages for a braille character.
 */
const validationMessages = {
  /**
   * A message that is displayed when a braille character is not a six-dot braille character.
   */
  NOT_SIX_DOT:
    "Not a six-dot braille character! The input must be a Unicode character of six-dot braille.",
  /**
   * A message that is displayed when a braille character is not a eight-dot braille character.
   */
  NOT_EIGHT_DOT:
    "Not a eight-dot braille character! The input must be a Unicode character of eight-dot braille.",
  /**
   * A message that is displayed when the number of dots is invalid.
   */
  INVALID_DOT_COUNT:
    "Invalid number of dots! The number of dots must be either 6 or 8.",
};

export default validationMessages;

/**
 * Validation messages for braille dots.
 */
const validationMessages = {
  /**
   * A message that is displayed when the number of dots is invalid.
   */
  INVALID_DOT_COUNT:
    "Invalid number of dots! The number of dots must be either 6 or 8.",
  /**
   * A message that is displayed when a braille dot is not a boolean.
   */
  NOT_BOOLEAN: "Invalid type of dots! The type of dots must be boolean.",
  /**
   * A message that is displayed when a braille is not an instance of BrailleBase.
   */
  NOT_BRAILLE_BASE:
    "Invalid instance of braille! The braille must be an instance of BrailleBase.",
};

export default validationMessages;

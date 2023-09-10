/**
 * A collection of validation messages that are used by the BrailleArrayBase class.
 */
const validationMessages = {
  /**
   * A message that is displayed when an instance of BrailleBase is invalid.
   */
  INVALID_BRAILLE_BASE:
    "Invalid instance of BrailleBase! The instance must be an instance of BrailleBase.",
  /**
   * A message that is displayed when the number of dots is inconsistent.
   */
  INCONSISTENT_DOT_COUNT:
    "Inconsistent number of dots! The number of dots must be the same as the other braille.",
};

export default validationMessages;

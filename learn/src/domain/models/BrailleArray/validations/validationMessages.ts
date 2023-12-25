/**
 * A collection of validation messages that are used by the BrailleArray class.
 */
const validationMessages = {
  /**
   * A message that is displayed when an array is invalid.
   */
  INVALID_ARRAY: "Invalid array! The input must be an array.",
  /**
   * A message that is displayed when an instance of Braille is invalid.
   */
  INVALID_BRAILLE_INSTANCE:
    "Invalid braille instance! The input must be an instance of Braille.",
  /**
   * A message that is displayed when the number of dots is inconsistent.
   */
  INCONSISTENT_DOT_COUNT:
    "Inconsistent number of dots! The number of dots must be the same as the other braille.",
};

export default validationMessages;

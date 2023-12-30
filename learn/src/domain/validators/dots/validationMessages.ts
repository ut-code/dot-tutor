/**
 * A collection of validation messages that are used when validating braille dots.
 */
const brailleDotsValidationMessages = {
  /**
   * A message that is displayed when an array of braille dots is invalid.
   */
  INVALID_DOTS_ARRAY:
    "Invalid array of braille dots! The array must contain only booleans and must have a length of 6 or 8.",
  /**
   * A message that is displayed when an object of braille dots is invalid.
   */
  INVALID_DOTS_OBJECT:
    "Invalid object of braille dots! The object of braille dots must have keys as dot positions and values as booleans.",
};

export default brailleDotsValidationMessages;

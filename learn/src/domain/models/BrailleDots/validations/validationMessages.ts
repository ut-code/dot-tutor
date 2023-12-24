/**
 * A collection of validation messages that are used by the BrailleDots class.
 */
const validationMessages = {
  /**
   * A message that is displayed when a braille dot is not a boolean.
   */
  INVALID_DOTS: "Invalid braille dot! The braille dot must be a boolean.",
  /**
   * A message that is displayed when an object of braille dots is invalid.
   */
  INVALID_DOTS_OBJECT:
    "Invalid object of braille dots! The object of braille dots must have keys as dot positions and values as booleans.",
};

export default validationMessages;

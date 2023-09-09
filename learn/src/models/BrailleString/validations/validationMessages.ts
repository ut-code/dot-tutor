import brailleBaseValidationMessages from "../../BrailleBase/validations/validationMessages";

/**
 * Validation messages for braille text.
 */
const validationMessages = {
  ...brailleBaseValidationMessages,
  /**
   * A message that is displayed when a braille is not an instance of BrailleBase.
   */
  NOT_BRAILLE_BASE:
    "Invalid instance of braille! The braille must be an instance of BrailleBase.",
  /**
   * A message that is displayed when the number of dots is inconsistent.
   */
  INCONSISTENT_DOT_COUNT:
    "Inconsistent number of dots! The number of dots must be the same as the other braille.",
};

export default validationMessages;

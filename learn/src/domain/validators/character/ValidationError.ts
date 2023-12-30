/**
 * Represents an error that is thrown when a validation of braille characters fails.
 */
export default class BrailleCharacterValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleCharacterError";
  }
}

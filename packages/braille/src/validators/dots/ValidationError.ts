/**
 * Represents an error that is thrown when a validation of braille dots fails.
 */
export default class BrailleDotsValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleDotsError";
  }
}

/**
 * Represents an error that is thrown when a validation of arrays of braille fails.
 */
export default class BrailleArrayValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleArrayError";
  }
}

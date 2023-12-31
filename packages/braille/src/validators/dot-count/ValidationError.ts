/**
 * Represents an error that is thrown when a validation of number of dots fails.
 */
export default class BrailleDotCountValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleDotCountError";
  }
}

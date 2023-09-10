/**
 * Represents a validation error thrown by the BrailleArrayBase class.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleArrayBaseError";
  }
}

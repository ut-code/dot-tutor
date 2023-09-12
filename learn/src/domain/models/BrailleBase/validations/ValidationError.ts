/**
 * Represents a validation error thrown by the BrailleBase class.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleBaseError";
  }
}

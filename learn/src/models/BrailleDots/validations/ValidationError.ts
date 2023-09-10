/**
 * Represents a validation error thrown by the BrailleDots class.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleDotsError";
  }
}

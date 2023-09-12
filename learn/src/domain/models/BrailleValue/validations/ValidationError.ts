/**
 * Represents a validation error thrown by the BrailleValue class.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleValueError";
  }
}

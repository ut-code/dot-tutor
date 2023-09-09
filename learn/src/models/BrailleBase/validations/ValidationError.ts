/**
 * A class that represents a validation error for a braille.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleBaseError";
  }
}

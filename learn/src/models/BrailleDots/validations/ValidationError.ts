/**
 * A class that represents a validation error for braille dots.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleDotsError";
  }
}

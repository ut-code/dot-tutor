/**
 * Represents a validation error thrown by the BrailleCharacter class.
 */
export default class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleCharacterError";
  }
}

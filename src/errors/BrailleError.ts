export default class BrailleError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "BrailleError";
  }
}

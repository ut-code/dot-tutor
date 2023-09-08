import BrailleCharacter from "../BrailleCharacter/BrailleCharacter";

/**
 * A class representing the information of braille dots.
 */
export default abstract class AbstractBrailleDots<
  Dots extends boolean[],
  DotPosition extends number,
> {
  protected readonly dots: Dots;

  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: Dots) {
    this.dots = dots;
  }

  /**
   * Gets the braille dots.
   * @returns the braille dots
   */
  getDots(): Dots {
    return this.dots;
  }

  /**
   * Gets the braille character corresponding to the braille dots.
   * @returns the braille character corresponding to the braille dots
   */
  abstract getCharacter(): BrailleCharacter;

  /**
   * Checks if the braille dots are equal to the other.
   * @param other the other braille dots
   * @returns true if the braille dots are equal to the other, false otherwise
   */
  equals(other: AbstractBrailleDots<Dots, DotPosition>): boolean {
    return this.dots.every((dot, index) => dot === other.dots[index]);
  }

  /**
   * Converts the braille dots to a string.
   * @returns a string representation of the braille dots
   */
  toString(): string {
    return this.dots.map((dot) => (dot ? "1" : "0")).join("");
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  abstract toggleDot(
    dotPosition: DotPosition,
  ): AbstractBrailleDots<Dots, DotPosition>;

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  abstract getDot(dotPosition: DotPosition): boolean;
}

import {
  EightDotPosition,
  EightDotsType,
  SixDotPosition,
  SixDotsType,
} from "./types";
import convertDotsToUnicode from "./utils/convertDotsToUnicode";

/**
 * A class representing the information of the braille dots.
 */
export default class AbstractBrailleDots<
  Dots extends SixDotsType | EightDotsType,
  DotPosition extends Dots extends SixDotsType
    ? SixDotPosition
    : EightDotPosition,
> {
  private readonly dots: Dots;

  /**
   * Constructs a new instance with the given braille dots.
   * @param dots the braille dots
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
   * Gets the Unicode character corresponding to the braille dots.
   * @returns the Unicode character corresponding to the braille dots
   */
  getUnicode(): string {
    return convertDotsToUnicode(this.dots);
  }

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
  toggleDot(dotPosition: DotPosition): AbstractBrailleDots<Dots, DotPosition> {
    const toggledDots: Dots = [...this.dots];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new AbstractBrailleDots(toggledDots);
  }

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: DotPosition): boolean {
    return this.dots[dotPosition - 1];
  }
}

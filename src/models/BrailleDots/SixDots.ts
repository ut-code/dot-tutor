import { SixDotsType } from "./types";
import convertDotsToUnicode from "./utils/convertDotsToUnicode";

/**
 * A class representing the information of dots of a 6-dot braille.
 */
export default class SixDots {
  private readonly dots: SixDotsType;

  /**
   * @param dots the dots of braille
   */
  constructor(dots: SixDotsType) {
    this.dots = dots;
  }

  /**
   * Get the dots of braille.
   * @returns the dots of braille
   */
  getDots(): SixDotsType {
    return this.dots;
  }

  /**
   * Get the Unicode character of braille.
   * @returns the Unicode character of braille
   */
  getUnicode(): string {
    return convertDotsToUnicode(this.dots);
  }

  /**
   * Check if the dots of braille is equal to the other.
   * @param other the other dots of braille
   * @returns true if the dots of braille is equal to the other
   */
  equals(other: SixDots): boolean {
    return this.dots.every((dot, index) => dot === other.dots[index]);
  }

  /**
   * Convert the dots of braille to string.
   * @returns the string of dots of braille
   */
  toString(): string {
    return this.dots.map((dot) => (dot ? "1" : "0")).join("");
  }

  /**
   * Toggle the dot of braille.
   * @param dotNumber the number of the dot to toggle
   * @returns the new dots of braille
   */
  toggleDot(dotNumber: 1 | 2 | 3 | 4 | 5 | 6): SixDots {
    const newDots: SixDotsType = [...this.dots];
    newDots[dotNumber - 1] = !newDots[dotNumber - 1];
    return new SixDots(newDots);
  }

  /**
   * Get the dot of braille.
   * @param dotNumber the number of the dot to get
   * @returns the dot of braille
   */
  getDot(dotNumber: 1 | 2 | 3 | 4 | 5 | 6): boolean {
    return this.dots[dotNumber - 1];
  }
}

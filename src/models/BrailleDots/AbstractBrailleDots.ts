import IBrailleDots, { DotPosition, DotsType } from "./IBrailleDots";

import convertDotsToUnicode from "./utils/convertDotsToUnicode";

/**
 * A class representing the information of the braille dots.
 */
export default class AbstractBrailleDots<Dots extends DotsType>
  implements IBrailleDots<Dots>
{
  private readonly dots: Dots;

  /**
   * Constructs a new instance with the given braille dots.
   * @param dots the braille dots
   */
  constructor(dots: Dots) {
    this.dots = dots;
  }

  getDots(): Dots {
    return this.dots;
  }

  getUnicode(): string {
    return convertDotsToUnicode(this.dots);
  }

  equals(other: AbstractBrailleDots<Dots>): boolean {
    return this.dots.every((dot, index) => dot === other.dots[index]);
  }

  toString(): string {
    return this.dots.map((dot) => (dot ? "1" : "0")).join("");
  }

  toggleDot(dotPosition: DotPosition<Dots>): AbstractBrailleDots<Dots> {
    const toggledDots: Dots = [...this.dots];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new AbstractBrailleDots(toggledDots);
  }

  getDot(dotPosition: DotPosition<Dots>): boolean {
    return this.dots[dotPosition - 1];
  }
}

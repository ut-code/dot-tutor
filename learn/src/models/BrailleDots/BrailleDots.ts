import BrailleBase from "../BrailleBase/BrailleBase";
import { CharacterType, DotCountType } from "../BrailleBase/types";
import { DotPositionType, DotsType } from "./types";
import convertDotsToUnicode from "./utils/convertDotsToUnicode";
import Validator from "./validations/Validator";

/**
 * A class representing the information of braille dots.
 */
export default class BrailleDots<
  Dots extends DotsType,
  DotPosition extends DotPositionType,
  Character extends CharacterType,
  DotCount extends DotCountType,
> {
  protected readonly dots: Dots;

  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: Dots) {
    Validator.validateDots(dots);
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
  getBrailleBase(): BrailleBase<Character, DotCount> {
    const unicode = convertDotsToUnicode(this.dots);
    return new BrailleBase(unicode as Character, this.dots.length as DotCount);
  }

  /**
   * Checks if the braille dots are equal to the other.
   * @param other the other braille dots
   * @returns true if the braille dots are equal to the other, false otherwise
   */
  equals(other: this): boolean {
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
  toggleDot(
    dotPosition: DotPosition,
  ): BrailleDots<Dots, DotPosition, Character, DotCount> {
    const toggledDots: Dots = [...this.dots];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new BrailleDots(toggledDots);
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

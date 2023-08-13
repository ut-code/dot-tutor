import {
  EightDotPosition,
  EightDotsType,
  SixDotPosition,
  SixDotsType,
} from "./types";

export type DotsType = SixDotsType | EightDotsType;
export type DotPosition<Dots extends DotsType> = Dots extends SixDotsType
  ? SixDotPosition
  : EightDotPosition;

export default interface IBrailleDots<Dots extends DotsType> {
  /**
   * Gets the braille dots.
   * @returns the braille dots
   */
  getDots(): Dots;
  /**
   * Gets the Unicode character corresponding to the braille dots.
   * @returns the Unicode character corresponding to the braille dots
   */
  getUnicode(): string;
  /**
   * Checks if the braille dots are equal to the other.
   * @param other the other braille dots
   * @returns true if the braille dots are equal to the other, false otherwise
   */
  equals(other: IBrailleDots<Dots>): boolean;
  /**
   * Converts the braille dots to a string.
   * @returns a string representation of the braille dots
   */
  toString(): string;
  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(dotPosition: DotPosition<Dots>): IBrailleDots<Dots>;
  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: DotPosition<Dots>): boolean;
}

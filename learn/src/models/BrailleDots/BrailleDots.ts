import BrailleBase from "../BrailleBase/BrailleBase";
import { CharacterType, DotCountType } from "../BrailleBase/types";
import { DotPositionType, DotsType } from "./types";
import convertBrailleToDots from "./utils/convertBrailleToDots";
import convertDotsToBraille from "./utils/convertDotsToBraille";
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
  private readonly braille: BrailleBase<Character, DotCount>;

  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: Dots);
  constructor(braille: BrailleBase<Character, DotCount>);
  constructor(dotsOrBraille: Dots | BrailleBase<Character, DotCount>) {
    if (Array.isArray(dotsOrBraille)) {
      Validator.validateDots(dotsOrBraille);
      this.braille = convertDotsToBraille(dotsOrBraille);
    } else {
      Validator.validateBrailleBase(dotsOrBraille);
      this.braille = dotsOrBraille;
    }
  }

  /**
   * Gets the braille dots.
   * @returns the braille dots
   */
  getDots(): Dots {
    return convertBrailleToDots(this.braille);
  }

  /**
   * Gets the braille corresponding to the braille dots.
   * @returns the braille corresponding to the braille dots
   */
  getBraille(): BrailleBase<Character, DotCount> {
    return this.braille;
  }

  /**
   * Checks if the braille dots are equal to the other.
   * @param other the other braille dots
   * @returns true if the braille dots are equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.braille.equals(other.braille);
  }

  /**
   * Converts the braille dots to a string.
   * @returns a string representation of the braille dots
   */
  toString(): string {
    return this.getDots()
      .map((dot) => (dot ? "1" : "0"))
      .join("");
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(
    dotPosition: DotPosition,
  ): BrailleDots<Dots, DotPosition, Character, DotCount> {
    const toggledDots: Dots = [...this.getDots()];
    toggledDots[dotPosition - 1] = !toggledDots[dotPosition - 1];
    return new BrailleDots(toggledDots);
  }

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: DotPosition): boolean {
    return this.getDots()[dotPosition - 1];
  }
}

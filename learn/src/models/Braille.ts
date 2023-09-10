import BrailleBase from "./BrailleBase/BrailleBase";
import {
  CharacterType,
  DotCountType,
  EightDotBrailleCharacterType,
  EightDotBrailleDotCountType,
  SixDotBrailleCharacterType,
  SixDotBrailleDotCountType,
} from "./BrailleBase/types";
import BrailleCharacter from "./BrailleCharacter/BrailleCharacter";
import BrailleDots from "./BrailleDots/BrailleDots";
import { DotsType } from "./BrailleDots/types";

/**
 * Represents braille.
 */
export default class Braille {
  private readonly braille: BrailleBase;

  /**
   * Constructs a new instance with the given six-dot braille character.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille (only 6 is allowed)
   */
  constructor(
    character: SixDotBrailleCharacterType,
    dotCount: SixDotBrailleDotCountType,
  );
  /**
   * Constructs a new instance with the given eight-dot braille character.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille (only 8 is allowed)
   */
  constructor(
    character: EightDotBrailleCharacterType,
    dotCount: EightDotBrailleDotCountType,
  );
  /**
   * Constructs a new instance with the given braille dots.
   * @param dots braille dots
   */
  constructor(dots: DotsType);
  constructor(
    characterOrDots: CharacterType | DotsType,
    dotCount?: DotCountType,
  ) {
    if (dotCount === 6) {
      this.braille = new BrailleCharacter(
        characterOrDots as SixDotBrailleCharacterType,
        dotCount,
      ).getBraille();
    } else if (dotCount === 8) {
      this.braille = new BrailleCharacter(
        characterOrDots as EightDotBrailleCharacterType,
        dotCount,
      ).getBraille();
    } else {
      this.braille = new BrailleDots(characterOrDots as DotsType).getBraille();
    }
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.braille.getDotCount();
  }

  /**
   * Gets the braille character.
   * @returns the braille character
   */
  getCharacter(): string {
    return this.braille.getCharacter();
  }

  /**
   * Gets the braille dots.
   * @returns the braille dots
   */
  getDots(): boolean[] {
    return new BrailleDots(this.braille).getDots();
  }

  /**
   * Checks if the braille is equal to the other.
   * @param other the other braille
   * @returns true if the braille is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.braille.equals(other.braille);
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(dotPosition: number): Braille {
    return new Braille(
      new BrailleDots(this.braille)
        .toggleDot(dotPosition)
        .getDots() as DotsType,
    );
  }

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: number): boolean {
    return new BrailleDots(this.braille).getDot(dotPosition);
  }
}

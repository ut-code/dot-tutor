import BrailleBase from "../BrailleBase/BrailleBase";
import {
  CharacterType,
  DotCountType,
  EightDotBrailleCharacterType,
  EightDotBrailleDotCountType,
  SixDotBrailleCharacterType,
  SixDotBrailleDotCountType,
} from "../BrailleBase/types";
import Validator from "./validations/Validator";

/**
 * Represents a braille character.
 */
export default class BrailleCharacter {
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
   * Constructs a new instance with the given braille.
   * @param braille a braille
   */
  constructor(braille: BrailleBase);
  constructor(
    characterOrBraille: CharacterType | BrailleBase,
    dotCount?: DotCountType,
  ) {
    if (typeof characterOrBraille === "string") {
      if (dotCount === undefined) {
        throw new Error("The dotCount is undefined.");
      }
      this.braille = new BrailleBase(characterOrBraille, dotCount);
    } else {
      Validator.validateBrailleBase(characterOrBraille);
      this.braille = characterOrBraille;
    }
  }

  /**
   * Gets the braille character.
   * @returns the braille character
   */
  getCharacter(): string {
    return this.braille.getCharacter();
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the type of braille
   */
  getDotCount(): number {
    return this.braille.getDotCount();
  }

  /**
   * Gets the braille.
   * @returns the braille
   */
  getBraille(): BrailleBase {
    return this.braille;
  }

  /**
   * Checks if the braille character is equal to the other.
   * @param other the other braille character
   * @returns true if the braille character is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return this.braille.equals(other.braille);
  }
}

import BrailleBase from "../BrailleBase/BrailleBase";
import BrailleValue from "../BrailleValue/BrailleValue";
import {
  CharacterType,
  DotCountType,
  EightDotBrailleCharacterType,
  EightDotBrailleDotCountType,
  SixDotBrailleCharacterType,
  SixDotBrailleDotCountType,
} from "../BrailleValue/types";

/**
 * Represents a braille character.
 */
export default class BrailleCharacter extends BrailleBase {
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
  constructor(braille: BrailleValue);
  constructor(
    characterOrBraille: CharacterType | BrailleValue,
    dotCount?: DotCountType,
  ) {
    if (typeof characterOrBraille === "string") {
      if (dotCount === undefined) {
        throw new Error("The dotCount is undefined.");
      }
      super(new BrailleValue(characterOrBraille, dotCount));
    } else {
      super(characterOrBraille);
    }
  }

  /**
   * Gets the braille character.
   * @returns the braille character
   */
  getCharacter(): string {
    return this.getBraille().getCharacter();
  }
}

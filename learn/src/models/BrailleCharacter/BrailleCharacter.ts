import AbstractBrailleCharacter from "./AbstractBrailleCharacter";
import {
  CharacterType,
  DotCountType,
  EightDotBrailleCharacterType,
  EightDotBrailleDotCountType,
  SixDotBrailleCharacterType,
  SixDotBrailleDotCountType,
} from "../BrailleBase/types";
import Validator from "../BrailleBase/validations/Validator";

/**
 * A class representing the information of a braille character.
 */
export default class BrailleCharacter<
  Character extends CharacterType,
  DotCount extends DotCountType,
> extends AbstractBrailleCharacter<Character, DotCount> {
  /**
   * Constructs a new instance with the given braille character.
   * @param character a braille character
   * @param dotCount the number of dots based on the type of braille
   */
  constructor(
    character: SixDotBrailleCharacterType,
    dotCount: SixDotBrailleDotCountType,
  );
  constructor(
    character: EightDotBrailleCharacterType,
    dotCount: EightDotBrailleDotCountType,
  );
  constructor(character: Character, dotCount: DotCount) {
    Validator.validateDotCount(dotCount);
    Validator.validateBrailleCharacter(character, dotCount);
    super(character, dotCount);
  }
}

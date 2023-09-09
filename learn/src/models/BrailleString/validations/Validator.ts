import { CharacterType, DotCountType } from "@/models/BrailleBase/types";
import BrailleBase from "@/models/BrailleBase/BrailleBase";
import ValidationError from "./ValidationError";
import validationMessages from "./validationMessages";
import BrailleBaseValidator from "../../BrailleBase/validations/Validator";
import BrailleDotsValidator from "../../BrailleDots/validations/Validator";

/**
 * A class that contains static methods for validating braille text.
 */
export default class Validator {
  /**
   * Checks if the number of dots is valid.
   * @param dotCount the number of dots
   */
  static validateDotCount(dotCount: number) {
    BrailleBaseValidator.validateDotCount(dotCount);
  }

  /**
   * Checks if braille text is valid.
   * @param text braille text
   * @param dotCount the number of dots based on the type of braille
   */
  static validateText(text: string, dotCount: number) {
    // Check if all characters are valid braille characters
    Array.from(text).forEach((character) => {
      BrailleBaseValidator.validateBrailleCharacter(character, dotCount);
    });
  }

  /**
   * Checks if braille array is valid.
   * @param brailleArray braille array
   */
  static validateBrailleArray<
    Character extends CharacterType,
    DotCount extends DotCountType,
  >(brailleArray: BrailleBase<Character, DotCount>[]) {
    // Check if all braille bases are valid
    brailleArray.forEach((braille) => {
      BrailleDotsValidator.validateBrailleBase(braille);
    });
    // Check if all braille bases have the same dot count
    if (
      brailleArray.every(
        (braille) => braille.getDotCount() === brailleArray[0].getDotCount(),
      )
    ) {
      throw new ValidationError(validationMessages.INCONSISTENT_DOT_COUNT);
    }
  }
}

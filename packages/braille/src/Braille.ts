import { CharacterType } from "./types/CharacterType";
import { DotCountType } from "./types/DotCountType";
import { DotPositionType } from "./types/DotPositionType";
import { DotsArrayType } from "./types/DotsArrayType";
import { DotsObjectType } from "./types/DotsObjectType";
import BrailleCharacterConverter from "./converters/BrailleCharacterConverter";
import BrailleDotsObjectConverter from "./converters/BrailleDotsObjectConverter";
import BrailleCharacterValidator from "./validators/character/Validator";
import BrailleDotCountValidator from "./validators/dot-count/Validator";
import BrailleDotsValidator from "./validators/dots/Validator";
import convertDotPositionToIndex from "./utils/convertDotPositionToIndex";

/**
 * Represents an information of a braille.
 */
export default class Braille {
  private readonly dots: DotsArrayType;

  /**
   * Constructs a new instance with the given braille character and the number of dots.
   * @param character a braille character
   * @param dotCount the number of dots based on the types of braille
   */
  constructor(character: CharacterType, dotCount?: DotCountType);
  /**
   * Constructs a new instance with the given array of braille dots.
   * @param dots an array of braille dots with values as booleans
   */
  constructor(dots: DotsArrayType);
  /**
   * Constructs a new instance with the given object of braille dots.
   * @param dots an object of braille dots with keys as dot positions and values as booleans
   */
  constructor(dots: DotsObjectType);
  constructor(
    characterOrDots: CharacterType | DotsArrayType | DotsObjectType,
    dotCount?: DotCountType,
  ) {
    if (typeof characterOrDots === "string") {
      BrailleDotCountValidator.validateDotCount(dotCount ?? 6);
      BrailleCharacterValidator.validateCharacter(
        characterOrDots,
        dotCount ?? 6,
      );
      this.dots = BrailleCharacterConverter.toDotsArray(
        characterOrDots,
        dotCount ?? 6,
      );
    } else if (Array.isArray(characterOrDots)) {
      BrailleDotsValidator.validateDotsArray(characterOrDots);
      this.dots = characterOrDots;
    } else {
      BrailleDotsValidator.validateDotsObject(characterOrDots);
      this.dots = BrailleDotsObjectConverter.toDotsArray(characterOrDots);
    }
  }

  /**
   * Gets the number of dots.
   * @returns the number of dots based on the types of braille
   */
  getDotCount(): DotCountType {
    return this.dots.length;
  }

  /**
   * Gets the braille character.
   * @returns the braille character
   */
  getCharacter(): CharacterType {
    return BrailleCharacterConverter.fromDotsArray(this.dots);
  }

  /**
   * Gets the array of braille dots.
   * @returns the array of braille dots
   */
  getDotsArray(): DotsArrayType {
    return this.dots;
  }

  /**
   * Gets the object of braille dots.
   * @returns the object of braille dots
   */
  getDotsObject(): DotsObjectType {
    return BrailleDotsObjectConverter.fromDotsArray(this.dots);
  }

  /**
   * Checks if the braille is equal to the other.
   * @param other the other braille
   * @returns true if the braille is equal to the other, false otherwise
   */
  equals(other: this): boolean {
    return (
      this.dots.every((dot, index) => dot === other.dots[index]) &&
      this.dots.length === other.dots.length
    );
  }

  /**
   * Toggles a braille dot and returns a new instance with the dot at the specified position toggled.
   * @param dotPosition the position of the dot to toggle
   * @returns a new instance with the dot at the specified position toggled
   */
  toggleDot(dotPosition: DotPositionType): Braille {
    const dotPositionIndex = convertDotPositionToIndex(dotPosition);
    const toggledDots = [...this.dots];
    toggledDots[dotPositionIndex] = !toggledDots[dotPositionIndex];
    return new Braille(toggledDots as DotsArrayType);
  }

  /**
   * Gets a specific braille dot.
   * @param dotPosition the position of the dot to get
   * @returns the state of the dot at the specified position
   */
  getDot(dotPosition: DotPositionType): boolean {
    const dotPositionIndex = convertDotPositionToIndex(dotPosition);
    return this.dots[dotPositionIndex];
  }

  /**
   * Gets the available dot positions.
   * @returns the available dot positions
   */
  getAvailableDotPositions(): DotPositionType[] {
    if (this.dots.length === 6) {
      return ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6"];
    }
    return ["dot1", "dot2", "dot3", "dot7", "dot4", "dot5", "dot6", "dot8"];
  }
}

import { DotsArrayType } from "../types/DotsArrayType.js";
import { DotsObjectType } from "../types/DotsObjectType.js";

/**
 * Contains static methods that convert an object of braille dots to an array of braille dots and vice versa.
 */
export default class BrailleDotsObjectConverter {
  /**
   * Converts an array of braille dots to the object of braille dots corresponding to the array of braille dots.
   * @param dots an array of braille dots
   * @returns the object of braille dots corresponding to the array of braille dots
   */
  static fromDotsArray(dots: DotsArrayType): DotsObjectType {
    if (dots.length === 6) {
      return {
        dot1: dots[0],
        dot2: dots[1],
        dot3: dots[2],
        dot4: dots[3],
        dot5: dots[4],
        dot6: dots[5],
      };
    }
    return {
      dot1: dots[0],
      dot2: dots[1],
      dot3: dots[2],
      dot7: dots[6],
      dot4: dots[3],
      dot5: dots[4],
      dot6: dots[5],
      dot8: dots[7],
    };
  }

  /**
   * Converts an object of braille dots to the array of braille dots corresponding to the object of braille dots.
   * @param dots an object of braille dots
   * @returns the array of braille dots corresponding to the object of braille dots
   */
  static toDotsArray(dots: DotsObjectType): DotsArrayType {
    const dotsArray = Object.values(dots);
    return dotsArray as DotsArrayType;
  }
}

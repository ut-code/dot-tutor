import { Braille, SixDotBraille } from "@/models/BrailleCharacter";

/**
 * BrailleString class
 * @class
 * @classdesc BrailleString class
 * @property {string} unicodeBrailleString - unicode string of braille
 * @property {Braille[]} brailleArray - array of braille
 * @constructor
 * @param {string} type - type of braille ("unicode" or "braille array")
 * @param {string | Braille[]} brailleString - unicode string of braille or array of braille
 * @throws {Error} - Invalid Type of Braille Set!
 * @example
 * const brailleString = new BrailleString("unicode", "⠁⠂⠃⠄");
 * const brailleArray = brailleString.brailleArray;
 * @example
 * const brailleString = new BrailleString("braille array", [
 *  new Braille("unicode", "⠁"),
 *  new Braille("unicode", "⠂"),
 *  new Braille("unicode", "⠃"),
 *  new Braille("unicode", "⠄"),
 * ]);
 * const unicodeBrailleString = brailleString.unicodeBrailleString;
 */
class BrailleString {
  private readonly brailleString: Braille[];

  public get unicodeBrailleString(): string {
    return this.brailleString.map((braille) => braille.unicodeBraille).join("");
  }

  public get brailleArray(): Braille[] {
    return this.brailleString;
  }

  constructor(type: "unicode", brailleString: string);
  constructor(type: "braille array", brailleString: Braille[]);
  constructor(
    type: "unicode" | "braille array",
    brailleString: string | Braille[]
  ) {
    if (type === "unicode") {
      this.brailleString = Array.from(brailleString as string).map(
        (brailleCharacter) => new Braille("unicode", brailleCharacter)
      );
    } else if (type === "braille array") {
      this.brailleString = brailleString as Braille[];
    } else {
      throw new Error("Invalid Type of Braille Set!");
    }
  }
}

/**
 * SixDotBrailleString class
 * @class
 * @classdesc SixDotBrailleString class
 * @property {string} unicodeBrailleString - six-dot unicode string of braille
 * @property {SixDotBraille[]} brailleArray - array of braille
 * @constructor
 * @param {string} type - type of braille ("unicode" or "braille array")
 * @param {string | SixDotBraille[]} brailleString - unicode string of braille or array of braille
 * @throws {Error} - Invalid Type of Braille Set!
 * @example
 * const brailleString = new SixDotBrailleString("unicode", "⠁⠂⠃⠄");
 * const brailleArray = brailleString.brailleArray;
 * @example
 * const brailleString = new SixDotBrailleString("braille array", [
 *  new SixDotBraille("unicode", "⠁"),
 *  new SixDotBraille("unicode", "⠂"),
 *  new SixDotBraille("unicode", "⠃"),
 *  new SixDotBraille("unicode", "⠄"),
 * ]);
 * const unicodeBrailleString = brailleString.unicodeBrailleString;
 */
export class SixDotBrailleString {
  private readonly brailleString: SixDotBraille[];

  public get unicodeBrailleString(): string {
    return this.brailleString.map((braille) => braille.unicodeBraille).join("");
  }

  public get brailleArray(): SixDotBraille[] {
    return this.brailleString;
  }

  constructor(type: "unicode", brailleString: string);
  constructor(type: "braille array", brailleString: SixDotBraille[]);
  constructor(
    type: "unicode" | "braille array",
    brailleString: string | SixDotBraille[]
  ) {
    if (type === "unicode") {
      this.brailleString = Array.from(brailleString as string).map(
        (brailleCharacter) => new SixDotBraille("unicode", brailleCharacter)
      );
    } else if (type === "braille array") {
      this.brailleString = brailleString as SixDotBraille[];
    } else {
      throw new Error("Invalid Type of Braille Set!");
    }
  }
}

/**
 * EightDotBrailleString class
 * @class
 * @classdesc EightDotBrailleString class
 * @extends BrailleString
 */
export class EightDotBrailleString extends BrailleString {}

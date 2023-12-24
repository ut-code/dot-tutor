import { Braille } from "@/domain/BrailleCharacter";

/**
 * BrailleString class
 * @class
 * @classdesc BrailleString class
 * @property {string} unicodeBrailleString - unicode string of braille
 * @property {Braille[]} brailleArray - array of braille
 * @property {6 | 8} brailleDotCount - the number of dots of braille
 * @constructor
 * @param {string} type - type of braille ("unicode" or "braille array")
 * @param {string | Braille[]} brailleString - unicode string of braille or array of braille
 * @throws {Error} - Invalid Type of Braille Set!
 * @throws {Error} - The Braille String is not a Six-dot Braille String!
 * @throws {Error} - The Braille String is not a Eight-dot Braille String!
 * @example
 * const brailleString = new BrailleString("unicode", "⠁⠂⠃⠄", 6);
 * const brailleArray = brailleString.brailleArray;
 * @example
 * const brailleString = new BrailleString(
 *   "braille array",
 *   [
 *     new Braille("unicode", "⠁"),
 *     new Braille("unicode", "⠂"),
 *     new Braille("unicode", "⠃"),
 *     new Braille("unicode", "⠄"),
 *   ],
 *   6
 * );
 * const unicodeBrailleString = brailleString.unicodeBrailleString;
 */
export class BrailleString {
  private readonly brailleString: Braille[];

  private readonly brailleDotCount: 6 | 8;

  public get unicodeBrailleString(): string {
    return this.brailleString.map((braille) => braille.unicodeBraille).join("");
  }

  public get brailleArray(): Braille[] {
    return this.brailleString;
  }

  constructor(type: "unicode", brailleString: string, brailleDotCount: 6 | 8);
  constructor(
    type: "braille array",
    brailleString: Braille[],
    brailleDotCount: 6 | 8,
  );
  constructor(
    type: "unicode" | "braille array",
    brailleString: string | Braille[],
    brailleDotCount: 6 | 8,
  ) {
    this.brailleDotCount = brailleDotCount;

    if (type === "unicode") {
      this.brailleString = Array.from(brailleString as string).map(
        (brailleCharacter) =>
          new Braille("unicode", brailleCharacter, brailleDotCount),
      );
    } else if (type === "braille array") {
      this.brailleString = brailleString as Braille[];
    } else {
      throw new Error("Invalid Type of Braille Set!");
    }

    if (
      this.brailleDotCount === 6 &&
      !this.isSixDotBrailleString(this.brailleString)
    ) {
      throw new Error("The Braille String is not a Six-dot Braille String!");
    }
    if (
      this.brailleDotCount === 8 &&
      !this.isEightDotBrailleString(this.brailleString)
    ) {
      throw new Error("The Braille String is not a Eight-dot Braille String!");
    }
  }

  private isSixDotBrailleString(brailleString: Braille[]): boolean {
    return brailleString.every((braille) => braille.brailleDotCount === 6);
  }

  private isEightDotBrailleString(brailleString: Braille[]): boolean {
    return brailleString.every((braille) => braille.brailleDotCount === 8);
  }
}

/**
 * SixDotBrailleString class
 * @class
 * @classdesc SixDotBrailleString class
 * @extends BrailleString
 * @constructor
 * @param {string} type - type of braille ("unicode" or "braille array")
 * @param {string | Braille[]} brailleString - unicode string of braille or array of braille
 * @throws {Error} - Invalid Type of Braille Set!
 * @example
 * const brailleString = new BrailleString("unicode", "⠁⠂⠃⠄");
 * const brailleArray = brailleString.brailleArray;
 * @example
 * const brailleString = new BrailleString("braille array", [
 *   new Braille("unicode", "⠁"),
 *   new Braille("unicode", "⠂"),
 *   new Braille("unicode", "⠃"),
 *   new Braille("unicode", "⠄"),
 * ]);
 * const unicodeBrailleString = brailleString.unicodeBrailleString;
 */
export class SixDotBrailleString extends BrailleString {
  constructor(type: "unicode", brailleString: string);
  constructor(type: "braille array", brailleString: Braille[]);
  constructor(
    type: "unicode" | "braille array",
    brailleString: string | Braille[],
  ) {
    if (type === "unicode") {
      super(type, brailleString as string, 6);
    } else if (type === "braille array") {
      super(type, brailleString as Braille[], 6);
    } else {
      throw new Error("Invalid Type of Braille Set!");
    }
  }
}

/**
 * EightDotBrailleString class
 */
export class EightDotBrailleString extends BrailleString {
  constructor(type: "unicode", brailleString: string);
  constructor(type: "braille array", brailleString: Braille[]);
  constructor(
    type: "unicode" | "braille array",
    brailleString: string | Braille[],
  ) {
    if (type === "unicode") {
      super(type, brailleString as string, 8);
    } else if (type === "braille array") {
      super(type, brailleString as Braille[], 8);
    } else {
      throw new Error("Invalid Type of Braille Set!");
    }
  }
}

import { BrailleState } from "./BrailleState";

/**
 * Braille class
 * @class
 * @classdesc Braille class
 * @property {string} unicodeBraille - unicode character of braille
 * @property {BrailleState} brailleState - the state of braille
 * @property {6 | 8} brailleDotCount - the number of dots of braille
 * @constructor
 * @param {string} type - type of braille ("unicode" or "braille state")
 * @param {string | BrailleState} braille - unicode character of braille or the state of braille
 * @throws {Error} - Invalid Type of Braille Set!
 * @example
 * const braille = new Braille("unicode", "⠁", 6);
 * const brailleState = braille.brailleState;
 * @example
 * const braille = new Braille(
 *   "braille state",
 *   {
 *     dot1: true,
 *     dot2: false,
 *     dot3: false,
 *     dot4: false,
 *     dot5: false,
 *     dot6: false,
 *   },
 *   6
 * );
 * const unicodeBraille = braille.unicodeBraille;
 */
export class Braille {
  private readonly braille: string;

  private readonly _brailleDotCount: 6 | 8;

  public get unicodeBraille(): string {
    return this.braille;
  }

  public get brailleState(): BrailleState {
    return this.convertUnicodeToBrailleState(this.braille);
  }

  public get brailleDotCount(): 6 | 8 {
    return this._brailleDotCount;
  }

  constructor(type: "unicode", braille: string, brailleDotCount: 6 | 8);
  constructor(
    type: "braille state",
    braille: BrailleState,
    brailleDotCount: 6 | 8,
  );
  constructor(
    type: "unicode" | "braille state",
    braille: string | BrailleState,
    brailleDotCount: 6 | 8,
  ) {
    this._brailleDotCount = brailleDotCount;

    if (type === "unicode") {
      this.braille = braille as string;
    } else if (type === "braille state") {
      this.braille = this.convertBrailleStateToUnicode(braille as BrailleState);
    } else {
      throw new Error("Invalid Braille Type!");
    }

    if (!this.isValidBraille(this.braille)) {
      throw new Error("Not a Braille Character!");
    }
    if (this.brailleDotCount === 6) {
      if (!this.isValidSixDotBraille(this.braille)) {
        throw new Error("Not a six-dot Braille Character!");
      }
    }
  }

  /**
   * check if unicode character of braille matches any character between ⠀ and ⣿
   * @param braille unicode character of braille
   * @returns boolean
   */
  private isValidBraille(braille: string): boolean {
    return braille.match(/[⠀-⣿]/) !== null;
  }

  /**
   * check if unicode character of braille matches any character between ⠀ and ⠿
   * @param braille unicode character of braille
   * @returns boolean
   */
  private isValidSixDotBraille(braille: string): boolean {
    return braille.match(/[⠀-⠿]/) !== null;
  }

  /**
   * convert the state of braille to unicode character of braille
   * @param brailleState the state of braille
   * @returns braille character
   */
  private convertBrailleStateToUnicode(brailleState: BrailleState): string {
    // See https://www.unicode.org/charts/PDF/U2800.pdf
    let codePoint = 0x2800;
    if (brailleState.dot1) codePoint += 2 ** 0;
    if (brailleState.dot2) codePoint += 2 ** 1;
    if (brailleState.dot3) codePoint += 2 ** 2;
    if (brailleState.dot4) codePoint += 2 ** 3;
    if (brailleState.dot5) codePoint += 2 ** 4;
    if (brailleState.dot6) codePoint += 2 ** 5;
    if (brailleState.dot7) codePoint += 2 ** 6;
    if (brailleState.dot8) codePoint += 2 ** 7;
    const unicodeBraille = String.fromCodePoint(codePoint);
    return new Braille("unicode", unicodeBraille, brailleState.brailleDotCount)
      .braille;
  }

  /**
   * convert unicode character of braille to the state of braille
   * @param braille unicode character of braille
   * @returns the state of braille
   */
  private convertUnicodeToBrailleState(braille: string): BrailleState {
    // See https://www.unicode.org/charts/PDF/U2800.pdf
    const codePoint = braille.codePointAt(0) as number;
    const brailleState = new BrailleState(
      {
        dot1: Boolean((codePoint - 0x2800) & (2 ** 0)),
        dot2: Boolean((codePoint - 0x2800) & (2 ** 1)),
        dot3: Boolean((codePoint - 0x2800) & (2 ** 2)),
        dot4: Boolean((codePoint - 0x2800) & (2 ** 3)),
        dot5: Boolean((codePoint - 0x2800) & (2 ** 4)),
        dot6: Boolean((codePoint - 0x2800) & (2 ** 5)),
        dot7: Boolean((codePoint - 0x2800) & (2 ** 6)),
        dot8: Boolean((codePoint - 0x2800) & (2 ** 7)),
      },
      8,
    );
    return brailleState;
  }
}

/**
 * six-dot braille class
 * @extends Braille
 * @constructor
 * @param {string} type - type of braille
 * @param {string | BrailleState} braille - unicode character of braille or the state of braille
 * @throws {Error} - Invalid Type of Braille Set!
 * @example
 * const braille = new SixDotBraille("unicode", "⠁");
 * const brailleState = braille.brailleState;
 * @example
 * const braille = new SixDotBraille("braille state", {
 *   dot1: true,
 *   dot2: false,
 *   dot3: false,
 *   dot4: false,
 *   dot5: false,
 *   dot6: false,
 * });
 * const unicodeBraille = braille.unicodeBraille;
 */
export class SixDotBraille extends Braille {
  constructor(type: "unicode", braille: string);
  constructor(type: "braille state", braille: BrailleState);
  constructor(
    type: "unicode" | "braille state",
    braille: string | BrailleState,
  ) {
    if (type === "unicode") {
      super(type, braille as string, 6);
    } else if (type === "braille state") {
      super(type, braille as BrailleState, 6);
    } else {
      throw new Error("Invalid Braille Type!");
    }
  }
}

/**
 * eight-dot braille class
 */
export class EightDotBraille extends Braille {
  constructor(type: "unicode", braille: string);
  constructor(type: "braille state", braille: BrailleState);
  constructor(
    type: "unicode" | "braille state",
    braille: string | BrailleState,
  ) {
    if (type === "unicode") {
      super(type, braille as string, 8);
    } else if (type === "braille state") {
      super(type, braille as BrailleState, 8);
    } else {
      throw new Error("Invalid Braille Type!");
    }
  }
}

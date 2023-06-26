import { BrailleState } from "@/models/BrailleState";

/**
 * Braille class
 * @class
 * @classdesc Braille class
 * @property {string} unicodeBraille - unicode character of braille
 * @property {BrailleState} brailleState - the state of braille
 * @constructor
 * @param {string} type - type of braille (unicode or braille state)
 * @param {string | BrailleState} braille - unicode character of braille or the state of braille
 * @throws {Error} - Not a Braille Character!
 * @throws {Error} - Invalid Braille Type!
 * @example
 * const braille = new Braille("unicode", "⠁");
 * const brailleState = braille.brailleState;
 * @example
 * const braille = new Braille("braille state", {
 *  Dot1: true,
 *  Dot2: false,
 *  Dot3: false,
 *  Dot7: false,
 *  Dot4: false,
 *  Dot5: false,
 *  Dot6: false,
 *  Dot8: false,
 * });
 * const unicodeBraille = braille.unicodeBraille;
 */
export class Braille {
  private readonly braille: string;

  public get unicodeBraille(): string {
    return this.braille;
  }

  public get brailleState(): BrailleState {
    return this.convertUnicodeToBrailleState(this.braille);
  }

  constructor(type: "unicode", braille: string);
  constructor(type: "braille state", braille: BrailleState);
  constructor(
    type: "unicode" | "braille state",
    braille: string | BrailleState
  ) {
    if (type === "unicode") {
      if (!this.isValid(braille as string)) {
        throw new Error("Not a Braille Character!");
      }
      this.braille = braille as string;
    } else if (type === "braille state") {
      this.braille = this.convertBrailleStateToUnicode(braille as BrailleState);
    } else {
      throw new Error("Invalid Braille Type!");
    }
  }

  /**
   * check if unicode character of braille matches any character between ⠀ and ⣿
   * @param braille unicode character of braille
   * @returns boolean
   */
  private isValid(braille: string): boolean {
    return braille.match(/[⠀-⣿]/) !== null;
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
    return new Braille("unicode", unicodeBraille).braille;
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
      8
    );
    return brailleState;
  }
}

/**
 * SixDotBraille class
 * @class
 * @classdesc SixDotBraille class
 * @extends Braille
 * @property {string} unicodeBraille - unicode character of braille
 * @property {SixDotBrailleState} brailleState - the state of braille
 * @constructor
 * @param {string} type - type of braille (unicode or braille state)
 * @param {string | SixDotBrailleState} braille - unicode character of braille or the state of braille
 * @throws {Error} - Not a Braille Character!
 * @throws {Error} - Invalid Braille Type!
 * @throws {Error} - Not a six-dot Braille Character!
 * @example
 * const braille = new SixDotBraille("unicode", "⠁");
 * const brailleState = braille.brailleState;
 * @example
 * const braille = new SixDotBraille("braille state", {
 *  Dot1: true,
 *  Dot2: false,
 *  Dot3: false,
 *  Dot7: false,
 *  Dot4: false,
 *  Dot5: false,
 *  Dot6: false,
 *  Dot8: false,
 * });
 * const unicodeBraille = braille.unicodeBraille;
 */
export class SixDotBraille extends Braille {
  constructor(type: "unicode", braille: string);
  constructor(type: "braille state", braille: BrailleState);
  constructor(
    type: "unicode" | "braille state",
    braille: string | BrailleState
  ) {
    if (type === "unicode") {
      super("unicode", braille as string);
    } else if (type === "braille state") {
      super("braille state", braille as BrailleState);
    } else {
      throw new Error("Invalid Braille Type!");
    }
    if (!this.isSixDotBraille(this.unicodeBraille)) {
      throw new Error("Not a six-dot Braille Character!");
    }
  }

  /**
   * check if unicode character of braille matches any character between ⠀ and ⠿
   * @param braille unicode character of braille
   * @returns boolean
   */
  private isSixDotBraille(braille: string): boolean {
    return braille.match(/[⠀-⠿]/) !== null;
  }
}

/**
 * EightDotBraille class
 * @class
 * @classdesc EightDotBraille class
 * @extends Braille
 * @property {string} unicodeBraille - unicode character of braille
 * @property {EightDotBrailleState} brailleState - the state of braille
 * @constructor
 * @param {string} type - type of braille (unicode or braille state)
 * @param {string | EightDotBrailleState} braille - unicode character of braille or the state of braille
 * @throws {Error} - Not a Braille Character!
 * @throws {Error} - Invalid Braille Type!
 * @example
 * const braille = new EightDotBraille("unicode", "⠡");
 * const brailleState = braille.brailleState;
 * @example
 * const braille = new EightDotBraille("braille state", {
 *  Dot1: true,
 *  Dot2: false,
 *  Dot3: false,
 *  Dot7: false,
 *  Dot4: false,
 *  Dot5: false,
 *  Dot6: false,
 *  Dot8: true,
 * });
 * const unicodeBraille = braille.unicodeBraille;
 */
export class EightDotBraille extends Braille {
  constructor(type: "unicode", braille: string);
  constructor(type: "braille state", braille: BrailleState);
  constructor(
    type: "unicode" | "braille state",
    braille: string | BrailleState
  ) {
    if (type === "unicode") {
      super("unicode", braille as string);
    } else if (type === "braille state") {
      super("braille state", braille as BrailleState);
    } else {
      throw new Error("Invalid Braille Type!");
    }
  }
}

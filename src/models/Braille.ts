import {
  type BrailleState,
  defaultBrailleStateValue,
} from "@/types/BrailleState";

/**
 * Braille class
 * @class
 * @classdesc Braille class
 * @property {string} unicodeBraille - unicode character of braille
 * @property {BrailleState} brailleState - the state of braille
 * @constructor
 * @param {string} type - type of braille (unicode or braille state)
 * @param {string | BrailleState} braille - unicode character of braille or the state of braille
 * @throws {Error} - Invalid Braille Character!
 * @throws {Error} - Invalid Braille Type!
 * @example
 * const braille = new Braille("unicode", "⠁");
 * const brailleState = braille.brailleState;
 * @example
 * const braille = new Braille("braille state", {
 *  Dot1: true,
 *  Dot2: false,
 *  Dot3: false,
 *  Dot4: false,
 *  Dot5: false,
 *  Dot6: false,
 *  Dot7: false,
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
        throw new Error("Invalid Braille Character!");
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
    if (brailleState.Dot1) codePoint += 2 ** 0;
    if (brailleState.Dot2) codePoint += 2 ** 1;
    if (brailleState.Dot3) codePoint += 2 ** 2;
    if (brailleState.Dot4) codePoint += 2 ** 3;
    if (brailleState.Dot5) codePoint += 2 ** 4;
    if (brailleState.Dot6) codePoint += 2 ** 5;
    if (brailleState.Dot7) codePoint += 2 ** 6;
    if (brailleState.Dot8) codePoint += 2 ** 7;
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
    const brailleState = { ...defaultBrailleStateValue };
    const codePoint = braille.codePointAt(0) as number;
    brailleState.Dot1 = Boolean((codePoint - 0x2800) & (2 ** 0));
    brailleState.Dot2 = Boolean((codePoint - 0x2800) & (2 ** 1));
    brailleState.Dot3 = Boolean((codePoint - 0x2800) & (2 ** 2));
    brailleState.Dot4 = Boolean((codePoint - 0x2800) & (2 ** 3));
    brailleState.Dot5 = Boolean((codePoint - 0x2800) & (2 ** 4));
    brailleState.Dot6 = Boolean((codePoint - 0x2800) & (2 ** 5));
    brailleState.Dot7 = Boolean((codePoint - 0x2800) & (2 ** 6));
    brailleState.Dot8 = Boolean((codePoint - 0x2800) & (2 ** 7));
    return { ...brailleState };
  }
}

/**
 * SixDotBraille class
 * @class
 * @classdesc SixDotBraille class
 * @extends Braille
 * @throws {Error} - Invalid Braille Character!
 * @throws {Error} - Invalid Braille Type!
 * @throws {Error} - Not a 6-dot Braille Character!
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
    if (!this.isSixDotBraille(braille as string)) {
      throw new Error("Not a 6-dot Braille Character!");
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
 * BrailleString class
 * @class
 * @classdesc BrailleString class
 * @property {string} unicodeBrailleString - unicode string of braille
 * @property {Braille[]} brailleArray - array of braille
 * @constructor
 * @param {string} type - type of braille ("unicode" or "braille array")
 * @param {string | Braille[]} brailleString - unicode string of braille or array of braille
 * @throws {Error} - Invalid Braille Type!
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
export class BrailleString {
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
      throw new Error("Invalid Braille Type!");
    }
  }
}

import SixDots from "./SixDots";
import EightDots from "./EightDots";
import { EightDotsType, SixDotsType } from "./types";

export default interface IBrailleDots<DotsType, Dots, DotNumber> {
  getDots(): DotsType;
  getUnicode(): string;
  equals(other: Dots): boolean;
  toString(): string;
  toggleDot(dotNumber: DotNumber): Dots;
  getDot(dotNumber: DotNumber): boolean;
}

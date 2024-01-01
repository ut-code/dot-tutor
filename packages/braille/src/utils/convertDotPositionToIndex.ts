import { DotPositionType } from "../types/DotPositionType";

export default function convertDotPositionToIndex(
  dotPosition: DotPositionType,
): number {
  switch (dotPosition) {
    case "dot1":
      return 0;
    case "dot2":
      return 1;
    case "dot3":
      return 2;
    case "dot7":
      return 6;
    case "dot4":
      return 3;
    case "dot5":
      return 4;
    case "dot6":
      return 5;
    case "dot8":
      return 7;
    default:
      throw new Error("Invalid dot position!");
  }
}

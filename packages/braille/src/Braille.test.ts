import { describe, expect, it } from "vitest";
import Braille from "./Braille";

describe("Braille class", () => {
  describe("constructor", () => {
    it("constructs from a character and a dot count", () => {
      expect(new Braille("⠁", 6).getDotsArray()).toStrictEqual([
        true,
        false,
        false,
        false,
        false,
        false,
      ]);
    });
    it("constructs from an array of braille dots", () => {
      expect(
        new Braille([false, true, false, false, false, false]).getDotsArray(),
      ).toStrictEqual([false, true, false, false, false, false]);
    });
    it("constructs from an object of braille dots", () => {
      expect(
        new Braille({
          dot1: true,
          dot2: true,
          dot3: false,
          dot4: false,
          dot5: false,
          dot6: false,
        }).getDotsArray(),
      ).toStrictEqual([true, true, false, false, false, false]);
    });
  });
  describe("methods", () => {
    describe("getDotCount", () => {
      it("returns the number of dots for a six-dot braille", () => {
        expect(new Braille("⠁", 6).getDotCount()).toBe(6);
      });
      it("returns the number of dots for an eight-dot braille", () => {
        expect(new Braille("⠁", 8).getDotCount()).toBe(8);
      });
      it("returns the number of dots for a six-dot braille if the dot count is not specified", () => {
        expect(new Braille("⠁").getDotCount()).toBe(6);
      });
    });
    describe("getCharacter", () => {
      it("returns the braille character", () => {
        expect(new Braille("⠁", 6).getCharacter()).toBe("⠁");
      });
    });
    describe("getDotsArray", () => {
      it("returns the array of braille dots for a six-dot braille", () => {
        expect(new Braille("⠁", 6).getDotsArray()).toStrictEqual([
          true,
          false,
          false,
          false,
          false,
          false,
        ]);
      });
      it("returns the array of braille dots for an eight-dot braille", () => {
        expect(new Braille("⠁", 8).getDotsArray()).toStrictEqual([
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]);
      });
    });
    describe("getDotsObject", () => {
      it("returns the object of braille dots for a six-dot braille", () => {
        expect(new Braille("⠁", 6).getDotsObject()).toStrictEqual({
          dot1: true,
          dot2: false,
          dot3: false,
          dot4: false,
          dot5: false,
          dot6: false,
        });
      });
      it("returns the object of braille dots for an eight-dot braille", () => {
        expect(new Braille("⠁", 8).getDotsObject()).toStrictEqual({
          dot1: true,
          dot2: false,
          dot3: false,
          dot7: false,
          dot4: false,
          dot5: false,
          dot6: false,
          dot8: false,
        });
      });
    });
    describe("equals", () => {
      it("returns true if the braille is equal to the other", () => {
        expect(new Braille("⠁", 6).equals(new Braille("⠁", 6))).toBe(true);
      });
      it("returns false if the braille is different", () => {
        expect(new Braille("⠁", 6).equals(new Braille("⠂", 6))).toBe(false);
      });
      it("returns false if the dot count is different", () => {
        expect(new Braille("⠁", 6).equals(new Braille("⠁", 8))).toBe(false);
      });
    });
    describe("toggleDot", () => {
      it("toggles dot 1", () => {
        expect(new Braille("⠁").toggleDot("dot1").getDotsArray()).toStrictEqual(
          [false, false, false, false, false, false],
        );
      });
      it("toggles dot 2", () => {
        expect(new Braille("⠁").toggleDot("dot2").getDotsArray()).toStrictEqual(
          [true, true, false, false, false, false],
        );
      });
      it("toggles dot 3", () => {
        expect(new Braille("⠁").toggleDot("dot3").getDotsArray()).toStrictEqual(
          [true, false, true, false, false, false],
        );
      });
      it("toggles dot 4", () => {
        expect(new Braille("⠁").toggleDot("dot4").getDotsArray()).toStrictEqual(
          [true, false, false, true, false, false],
        );
      });
      it("toggles dot 5", () => {
        expect(new Braille("⠁").toggleDot("dot5").getDotsArray()).toStrictEqual(
          [true, false, false, false, true, false],
        );
      });
      it("toggles dot 6", () => {
        expect(new Braille("⠁").toggleDot("dot6").getDotsArray()).toStrictEqual(
          [true, false, false, false, false, true],
        );
      });
    });
    describe("getDot", () => {
      it("gets dot 1", () => {
        expect(new Braille("⠁").getDot("dot1")).toBe(true);
      });
      it("gets dot 2", () => {
        expect(new Braille("⠁").getDot("dot2")).toBe(false);
      });
      it("gets dot 3", () => {
        expect(new Braille("⠁").getDot("dot3")).toBe(false);
      });
      it("gets dot 4", () => {
        expect(new Braille("⠁").getDot("dot4")).toBe(false);
      });
      it("gets dot 5", () => {
        expect(new Braille("⠁").getDot("dot5")).toBe(false);
      });
      it("gets dot 6", () => {
        expect(new Braille("⠁").getDot("dot6")).toBe(false);
      });
    });
    describe("getAvailableDotPositions", () => {
      it("gets available dot positions of a six-dot braille", () => {
        expect(new Braille("⠁").getAvailableDotPositions()).toStrictEqual([
          "dot1",
          "dot2",
          "dot3",
          "dot4",
          "dot5",
          "dot6",
        ]);
      });
      it("gets available dot positions of an eight-dot braille", () => {
        expect(new Braille("⠁", 8).getAvailableDotPositions()).toStrictEqual([
          "dot1",
          "dot2",
          "dot3",
          "dot7",
          "dot4",
          "dot5",
          "dot6",
          "dot8",
        ]);
      });
    });
  });
});

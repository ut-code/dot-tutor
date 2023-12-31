import { describe, expect, it } from "vitest";
import BrailleArray from "./BrailleArray";
import Braille from "./Braille";

describe("BrailleArray class", () => {
  describe("constructor", () => {
    it("constructs from a length of the array", () => {
      expect(new BrailleArray(2).getDotsArray()).toStrictEqual([
        undefined,
        undefined,
      ]);
    });
    it("constructs from a text and a dot count", () => {
      expect(new BrailleArray("⠁⠂", 6).getDotsArray()).toStrictEqual([
        [true, false, false, false, false, false],
        [false, true, false, false, false, false],
      ]);
    });
    it("constructs from an array of braille dots", () => {
      expect(
        new BrailleArray([
          [true, false, false, false, false, false],
          [false, true, false, false, false, false],
        ]).getDotsArray(),
      ).toStrictEqual([
        [true, false, false, false, false, false],
        [false, true, false, false, false, false],
      ]);
    });
    it("constructs from an array of braille", () => {
      expect(
        new BrailleArray([new Braille("⠁"), new Braille("⠂")]).getDotsArray(),
      ).toStrictEqual([
        [true, false, false, false, false, false],
        [false, true, false, false, false, false],
      ]);
    });
  });
  describe("methods", () => {
    describe("getDotCount", () => {
      it("returns the number of dots for a six-dot braille", () => {
        expect(new BrailleArray("⠁⠂", 6).getDotCount()).toBe(6);
      });
      it("returns the number of dots for an eight-dot braille", () => {
        expect(new BrailleArray("⠁⠂", 8).getDotCount()).toBe(8);
      });
      it("returns the number of dots for a six-dot braille if the dot count is not specified", () => {
        expect(new BrailleArray("⠁⠂").getDotCount()).toBe(6);
      });
    });
    describe("getText", () => {
      it("returns the braille text", () => {
        expect(new BrailleArray("⠁⠂", 6).getText()).toBe("⠁⠂");
      });
    });
    describe("getDotsArray", () => {
      it("returns the array of braille dots for a six-dot braille", () => {
        expect(new BrailleArray("⠁⠂", 6).getDotsArray()).toStrictEqual([
          [true, false, false, false, false, false],
          [false, true, false, false, false, false],
        ]);
      });
      it("returns the array of braille dots for an eight-dot braille", () => {
        expect(new BrailleArray("⠁⠂", 8).getDotsArray()).toStrictEqual([
          [true, false, false, false, false, false, false, false],
          [false, true, false, false, false, false, false, false],
        ]);
      });
    });
    describe("equals", () => {
      it("returns true if the braille array is equal to the other", () => {
        expect(
          new BrailleArray("⠁⠂", 6).equals(new BrailleArray("⠁⠂", 6)),
        ).toBe(true);
      });
      it("returns false if the braille array is not equal to the other", () => {
        expect(
          new BrailleArray("⠁⠂", 6).equals(new BrailleArray("⠁⠂", 8)),
        ).toBe(false);
      });
    });
  });
});

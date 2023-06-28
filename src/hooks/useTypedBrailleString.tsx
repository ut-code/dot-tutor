import { useState, useEffect, type KeyboardEvent } from "react";
import { BrailleState } from "@/models/BrailleState";
import { SixDotBraille, EightDotBraille } from "@/models/BrailleCharacter";

/**
 * The default state of keyboard
 */
const defaultKeyboardValues = {
  KeyF: false,
  KeyD: false,
  KeyS: false,
  KeyA: false,
  KeyJ: false,
  KeyK: false,
  KeyL: false,
  Semicolon: false,
  Space: false,
  Backspace: false,
};

/**
 * The type of the state of keyboard
 */
type KeyboardState = typeof defaultKeyboardValues;

/**
 * The type of the available keys
 */
type AvailableKey = keyof KeyboardState;

/**
 * The array of the available keys
 * @example
 * const availableKeys = ["KeyF", "KeyD", "KeyS", "KeyA", "KeyJ", "KeyK", "KeyL", "Semicolon", "Space", "Backspace"];
 */
const availableKeys = Object.keys(defaultKeyboardValues);

/**
 * Store whether F, D, S, A, J, K, L, Semicolon, Space, Backspace keys are being pressed or not.
 * @returns [the state of F, D, S, A, J, K, L, Semicolon, Space, Backspace keys, the function to update the state of F, D, S, A, J, K, L, Semicolon, Space, Backspace keys]
 * @example
 * const [keyboardState, updateKeyboardState] = useKeyboardState();
 *
 * <input
 *   type="text"
 *   onKeyDown={(e) => {
 *     updateKeyboardState(e);
 *   }}
 *   onKeyUp={(e) => {
 *     updateKeyboardState(e);
 *   }}
 * />
 * {JSON.stringify(keyboardState)}
 */
function useKeyboardState(): [
  keyboardState: KeyboardState,
  updateKeyboardState: (e: KeyboardEvent) => void
] {
  const [keyboardState, setKeyboardState] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });

  // function to update the state of keyboard
  const updateKeyboardState = (e: KeyboardEvent): void => {
    // Set state `true` when key is pressed.
    function pressed(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKey;
        const tmp = { ...keyboardState };
        tmp[key] = true;
        setKeyboardState(tmp);
      }
    }

    // Set state `false` when key is released.
    function released(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKey;
        const tmp = { ...keyboardState };
        tmp[key] = false;
        setKeyboardState(tmp);
      }
    }

    if (e.type === "keydown") {
      pressed(e);
    } else if (e.type === "keyup") {
      released(e);
    }
  };
  return [keyboardState, updateKeyboardState];
}

/**
 * Store the state of the object of typed keys. It considers any key that has been pressed at least once from the moment a key is first pressed until all keys are released, as "typed".
 * @returns [the state of the object of typed keys, the function to update the state of the object of typed keys]
 * @example
 * const [typedKeys, updateTypedKeys] = useTypedKeys();
 *
 * <input
 *   type="text"
 *   onKeyDown={(e) => {
 *     updateTypedKeys(e);
 *   }}
 *   onKeyUp={(e) => {
 *     updateTypedKeys(e);
 *   }}
 * />
 * {JSON.stringify(typedKeys)}
 */
function useTypedKeys(): [
  typedKey: KeyboardState,
  updateTypedKeys: (e: KeyboardEvent) => void
] {
  const [keyboardState, setKeyboardState] = useKeyboardState();
  const [pressedKeys, setPressedKeys] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });
  const [typedKeys, setTypedKeys] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });

  // function to update the state of typed keys
  const updateTypedKeys = (e: KeyboardEvent): void => {
    setKeyboardState(e);
  };

  useEffect(() => {
    // If all of the keys are released, store the state of the object of typed keys to the state of the object of pressed keys and reset the state of the object of typed keys.
    if (Object.values(keyboardState).every((value: boolean) => !value)) {
      setTypedKeys({ ...pressedKeys });
      setPressedKeys({ ...defaultKeyboardValues });
    }
    // If any of the keys are pressed, set the state of the key to `true` in the state of the object of pressed keys.
    else {
      const newPressedKeys = Object.fromEntries(
        Object.entries(pressedKeys).map(([key, value]) =>
          keyboardState[key as AvailableKey] ? [key, true] : [key, value]
        )
      ) as KeyboardState;
      setPressedKeys(newPressedKeys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardState]);

  return [typedKeys, updateTypedKeys];
}

/**
 * Convert the state of keyboard to the state of braille.
 * @param keyboardState the state of keyboard
 * @param dotNumber the number of braille dots (6 or 8)
 * @returns the state of braille
 * @example
 * const keyboardState = {
 *  KeyF: true,
 *  KeyD: true,
 *  KeyS: false,
 *  KeyA: false,
 *  KeyJ: false,
 *  KeyK: false,
 *  KeyL: false,
 *  Semicolon: false,
 *  Space: false,
 *  Backspace: false,
 * };
 * const brailleState = convertKeyboardStateToBrailleState(keyboardState, 8);
 * brailleState = new BrailleState(
 *   {
 *     dot1: true,
 *     dot2: true,
 *     dot3: false,
 *     dot7: false,
 *     dot4: false,
 *     dot5: false,
 *     dot6: false,
 *     dot8: false,
 *   },
 *   8
 * );
 */
function convertKeyboardStateToBrailleState(
  keyboardState: KeyboardState,
  brailleDotCount: 6 | 8
): BrailleState {
  if (brailleDotCount === 6) {
    const brailleState: BrailleState = new BrailleState(
      {
        dot1: keyboardState.KeyF,
        dot2: keyboardState.KeyD,
        dot3: keyboardState.KeyS,
        dot4: keyboardState.KeyJ,
        dot5: keyboardState.KeyK,
        dot6: keyboardState.KeyL,
      },
      6
    );
    return brailleState;
  } else if (brailleDotCount === 8) {
    const brailleState: BrailleState = new BrailleState(
      {
        dot1: keyboardState.KeyF,
        dot2: keyboardState.KeyD,
        dot3: keyboardState.KeyS,
        dot7: keyboardState.KeyA,
        dot4: keyboardState.KeyJ,
        dot5: keyboardState.KeyK,
        dot6: keyboardState.KeyL,
        dot8: keyboardState.Semicolon,
      },
      8
    );
    return brailleState;
  } else {
    throw new Error("The Number of Braille Dots Must Be 6 or 8.");
  }
}

/**
 * Convert the state of keyboard to the unicode character of braille.
 * @param keyboardState the state of keyboard
 * @param dotNumber the number of braille dots (6 or 8)
 * @returns the unicode character of braille
 * @example
 * const keyboardState = {
 *  KeyF: true,
 *  KeyD: true,
 *  KeyS: false,
 *  KeyA: false,
 *  KeyJ: false,
 *  KeyK: false,
 *  KeyL: false,
 *  Semicolon: false,
 *  Space: false,
 *  Backspace: false,
 * };
 * const braille = convertKeyboardStateToBraille(keyboardState);
 * // braille = "⠃"
 */
function convertKeyboardStateToBraille(
  keyboardState: KeyboardState,
  brailleDotCount: 6 | 8
): string {
  if (keyboardState.Backspace) {
    return "\b"; // Return backspace character.
  } else {
    const brailleState = convertKeyboardStateToBrailleState(
      keyboardState,
      brailleDotCount
    );
    if (brailleDotCount === 6) {
      const braille = new SixDotBraille("braille state", brailleState);
      return braille.unicodeBraille;
    } else if (brailleDotCount === 8) {
      const braille = new EightDotBraille("braille state", brailleState);
      return braille.unicodeBraille;
    } else {
      throw new Error("The Number of Braille Dots Must Be 6 or 8.");
    }
  }
}

/**
 * Store the string of typed braille.
 * @param brailleDotCount the number of braille dots (6 or 8)
 * @returns [the string of typed braille, the function to update the state]
 * @example
 * const [typedBrailleString, updateTypedBrailleString] = useTypedBrailleString(6);
 * <input
 *   type="text"
 *   value={typedBrailleString}
 *   onKeyDown={(e) => {
 *     updateTypedBrailleString(e);
 *   }}
 *   onKeyUp={(e) => {
 *     updateTypedBrailleString(e);
 *   }}
 * />
 * {typedBrailleString}
 */
export default function useTypedBrailleString(
  brailleDotCount: 6 | 8
): [
  typedBrailleString: string,
  updateTypedBrailleString: (e: KeyboardEvent) => void,
  setTypedBrailleStringFromString: (value: string) => void
] {
  const [typedKeys, setTypedKeys] = useTypedKeys();
  const [typedBrailleString, setTypedBrailleString] = useState<string>("");

  // Update the state of typed keys.
  const updateTypedBrailleString = (e: KeyboardEvent): void => {
    setTypedKeys(e);
  };

  useEffect(() => {
    // If the `typedKeys` is not empty, convert the `typedKeys` to the unicode character of braille and add it to the `typedBrailleString`.
    if (!Object.values(typedKeys).every((value: boolean) => !value)) {
      const typedBraille = convertKeyboardStateToBraille(
        typedKeys,
        brailleDotCount
      );
      if (typedBraille === "\b" && typedBrailleString.length !== 0) {
        // If the typed braille is backspace and the `typedBrailleString` is not empty, remove the last character.
        setTypedBrailleString((typedBrailleString) =>
          typedBrailleString.slice(0, -1)
        );
      } else if (typedBraille === "\b") {
        // If the `typedBrailleString` is empty, do nothing.
      } else {
        // If the typed braille is not backspace, add it.
        setTypedBrailleString(
          (typedBrailleString) => `${typedBrailleString}${typedBraille}`
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedKeys, setTypedBrailleString]);
  return [typedBrailleString, updateTypedBrailleString, setTypedBrailleString];
}

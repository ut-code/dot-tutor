import { useState, useEffect, type KeyboardEvent } from "react";
import { type BrailleState } from "../types/brailleDefinitions";
import { Braille } from "../models/Braille";

/**
 * The default state of keyboard
 */
const defaultKeyboardValues = {
  KeyF: false,
  KeyD: false,
  KeyS: false,
  KeyJ: false,
  KeyK: false,
  KeyL: false,
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
type AvailableKeys = keyof KeyboardState;

/**
 * The array of the available keys
 * @example
 * const availableKeys = ["KeyF", "KeyD", "KeyS", "KeyJ", "KeyK", "KeyL", "Space", "Backspace"];
 */
const availableKeys = Object.keys(defaultKeyboardValues);

/**
 * Update the state of F, D, S, J, K, L, Space, Backspace keys
 * @returns [the state of keyboard, the function to update the state of keyboard]
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
        const key = e.code as AvailableKeys;
        const tmp = { ...keyboardState };
        tmp[key] = true;
        setKeyboardState(tmp);
      }
    }

    // Set state `false` when key is released.
    function released(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKeys;
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
 * Store the state of the object of typed keys
 * @returns [the state of the object of typed keys, the function to update the state]
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

  // Update the state of keyboard.
  const updateTypedKeys = (e: KeyboardEvent): void => {
    setKeyboardState(e);
  };

  useEffect(() => {
    // If all of the keys are released, store the state to `typedKey` and reset the state.
    if (Object.values(keyboardState).every((value: boolean) => !value)) {
      setTypedKeys({ ...pressedKeys });
      setPressedKeys({ ...defaultKeyboardValues });
    }
    // If any of the keys are pressed, set the state to `true`.
    else {
      const newPressedKeys = Object.fromEntries(
        Object.entries(pressedKeys).map(([key, value]) =>
          keyboardState[key as AvailableKeys] ? [key, true] : [key, value]
        )
      ) as KeyboardState;
      setPressedKeys(newPressedKeys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardState]);

  return [typedKeys, updateTypedKeys];
}

/**
 * convert the state of keyboard to the state of braille
 * @param keyboardState the state of keyboard
 * @returns the state of braille
 * @example
 * const keyboardState = {
 *  KeyF: true,
 *  KeyD: true,
 *  KeyS: false,
 *  KeyJ: false,
 *  KeyK: false,
 *  KeyL: false,
 *  Space: false,
 *  Backspace: false,
 * };
 * const brailleState = convertKeyboardStateToBrailleState(keyboardState);
 * // brailleState = {
 * //   Dot1: true,
 * //   Dot2: true,
 * //   Dot3: false,
 * //   Dot4: false,
 * //   Dot5: false,
 * //   Dot6: false,
 * // };
 */
function convertKeyboardStateToBrailleState(
  keyboardState: KeyboardState
): BrailleState {
  const brailleState: BrailleState = {
    Dot1: keyboardState.KeyF,
    Dot2: keyboardState.KeyD,
    Dot3: keyboardState.KeyS,
    Dot4: keyboardState.KeyJ,
    Dot5: keyboardState.KeyK,
    Dot6: keyboardState.KeyL,
  };
  return brailleState;
}

/**
 * convert the state of keyboard to the unicode character of braille
 * @param keyboardState the state of keyboard
 * @returns the unicode character of braille
 * @example
 * const keyboardState = {
 *  KeyF: true,
 *  KeyD: true,
 *  KeyS: false,
 *  KeyJ: false,
 *  KeyK: false,
 *  KeyL: false,
 *  Space: false,
 *  Backspace: false,
 * };
 * const braille = convertKeyboardStateToBraille(keyboardState);
 * // braille = "⠃"
 */
function convertKeyboardStateToBraille(keyboardState: KeyboardState): string {
  if (keyboardState.Backspace) {
    return "\b"; // Return backspace character.
  } else {
    const brailleState = convertKeyboardStateToBrailleState(keyboardState);
    const braille = new Braille("braille state", brailleState);
    return braille.unicodeBraille;
  }
}

/**
 * Store the state of typed braille strings
 * @returns [the state of typed braille strings, the function to update the state]
 */
export default function useTypedBrailleStrings(): [
  typedBrailleStrings: string,
  updateTypedBrailleStrings: (e: KeyboardEvent) => void
] {
  const [typedKeys, setTypedKeys] = useTypedKeys();
  const [typedBrailleStrings, setTypedBrailleStrings] = useState<string>("");

  // Update the state of typed key.
  const updateTypedBrailleStrings = (e: KeyboardEvent): void => {
    setTypedKeys(e);
  };

  useEffect(() => {
    // If the typed key is not empty, convert the typed key to braille and add it to the typed braille strings.
    if (!Object.values(typedKeys).every((value: boolean) => !value)) {
      const typedBraille = convertKeyboardStateToBraille(typedKeys);
      if (typedBraille === "\b" && typedBrailleStrings.length !== 0) {
        // If the typed braille is backspace and the typed braille strings is not empty, remove the last character.
        setTypedBrailleStrings((typedBrailleStrings) =>
          typedBrailleStrings.slice(0, -1)
        );
      } else if (typedBraille === "\b") {
        // If the typed braille strings is empty, do nothing.
      } else {
        // If the typed braille is not backspace, add it.
        setTypedBrailleStrings(
          (typedBrailleStrings) => `${typedBrailleStrings}${typedBraille}`
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedKeys, setTypedBrailleStrings]);
  return [typedBrailleStrings, updateTypedBrailleStrings];
}

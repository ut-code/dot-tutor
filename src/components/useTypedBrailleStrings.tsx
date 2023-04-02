import { useState, useEffect, type KeyboardEvent } from "react";

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

type KeyboardState = typeof defaultKeyboardValues;

type AvailableKeys = keyof KeyboardState;
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
function useTypedKey(): [
  typedKey: KeyboardState,
  updateTypedKey: (e: KeyboardEvent) => void
] {
  const [keyboardState, setKeyboardState] = useKeyboardState();
  const [pressedKeys, setPressedKeys] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });
  const [typedKey, setTypedKey] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });

  // Update the state of keyboard.
  const updateTypedKey = (e: KeyboardEvent): void => {
    setKeyboardState(e);
  };

  useEffect(() => {
    // Set state `true` when key is newly pressed.
    setPressedKeys(
      Object.fromEntries(
        Object.entries(pressedKeys).map(([key, value]) =>
          keyboardState[key as AvailableKeys] ? [key, true] : [key, value]
        )
      ) as KeyboardState
    );

    // Store the state to `typedKey` and reset the state, if all of the keys are released.
    if (Object.values(keyboardState).every((value: boolean) => !value)) {
      setTypedKey({ ...pressedKeys });
      setPressedKeys({ ...defaultKeyboardValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardState]);

  return [typedKey, updateTypedKey];
}

/**
 * convert the state of keyboard to a code point of braille
 * @param keyboardState the state of keyboard
 * @returns the code point of braille
 */
function toCodePoint(keyboardState: KeyboardState): number {
  if (keyboardState.Backspace) {
    return 0x0008; // Return the code point of backspace.
  } else {
    // See https://www.unicode.org/charts/PDF/U2800.pdf.
    let codePoint = 0x2800;
    if (keyboardState.KeyF) codePoint += 2 ** 0;
    if (keyboardState.KeyD) codePoint += 2 ** 1;
    if (keyboardState.KeyS) codePoint += 2 ** 2;
    if (keyboardState.KeyJ) codePoint += 2 ** 3;
    if (keyboardState.KeyK) codePoint += 2 ** 4;
    if (keyboardState.KeyL) codePoint += 2 ** 5;
    return codePoint;
  }
}

/**
 * convert the state of keyboard to a braille
 * @param keyboardState the state of keyboard
 * @returns the braille
 */
function toBraille(keyboardState: KeyboardState): string {
  return String.fromCodePoint(toCodePoint(keyboardState));
}

/**
 * Store the state of typed braille strings
 * @returns [the state of typed braille strings, the function to update the state]
 */
export default function useTypedBrailleStrings(): [
  typedBrailleStrings: string,
  setTypedBrailleStrings: (e: KeyboardEvent) => void
] {
  const [typedKey, setTypedKey] = useTypedKey();
  const [typedBrailleStrings, setTypedBrailleStringsDirectly] =
    useState<string>("");

  // Update the state of typed key.
  const setTypedBrailleStrings = (e: KeyboardEvent): void => {
    setTypedKey(e);
  };

  useEffect(() => {
    // If the typed key is not empty, convert the typed key to braille and add it to the typed braille strings.
    if (!Object.values(typedKey).every((value: boolean) => !value)) {
      const typedBraille = toBraille(typedKey);
      if (typedBraille === "\b" && typedBrailleStrings.length !== 0) {
        // If the typed braille is backspace and the typed braille strings is not empty, remove the last character.
        setTypedBrailleStringsDirectly(typedBrailleStrings.slice(0, -1));
      } else if (typedBraille === "\b") {
        // If the typed braille strings is empty, do nothing.
        setTypedBrailleStringsDirectly(typedBrailleStrings);
      } else {
        // If the typed braille is not backspace, add it.
        setTypedBrailleStringsDirectly(`${typedBrailleStrings}${typedBraille}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedKey]);
  return [typedBrailleStrings, setTypedBrailleStrings];
}

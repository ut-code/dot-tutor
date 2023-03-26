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
 * @returns [the state of F, D, S, J, K, L, Space, Backspace keys, the function to update the state]
 */
function useKeyboardState(): [
  keyboardState: KeyboardState,
  setKeyboardState: (e: KeyboardEvent) => void
] {
  const [keyboardState, setKeyboardStateDirectly] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });
  const setKeyboardState = (e: KeyboardEvent): void => {
    // Set state `true` when key is pressed.
    function pressed(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKeys;
        const tmp = { ...keyboardState };
        tmp[key] = true;
        setKeyboardStateDirectly(tmp);
      }
    }

    // Set state `false` when key is released.
    function released(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKeys;
        const tmp = { ...keyboardState };
        tmp[key] = false;
        setKeyboardStateDirectly(tmp);
      }
    }

    if (e.type === "keydown") {
      pressed(e);
    } else if (e.type === "keyup") {
      released(e);
    }
  };
  return [keyboardState, setKeyboardState];
}

/**
 * Store the state of the object of typed keys
 * @returns [the state of the object of typed keys, the function to update the state]
 */
function useTypedKey(): [
  typedKey: KeyboardState,
  setTypedKey: (e: KeyboardEvent) => void
] {
  const [keyboardState, setKeyboardState] = useKeyboardState();
  const [pressedKeys, setPressedKeys] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });
  const [typedKey, setTypedKeyDirectly] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });

  const setTypedKey = (e: KeyboardEvent): void => {
    setKeyboardState(e);
  };

  useEffect(() => {
    // Set state `true` when key is newly pressed.
    Object.keys(keyboardState).forEach((key) => {
      if (keyboardState[key as AvailableKeys]) {
        const tmp = { ...pressedKeys };
        tmp[key as AvailableKeys] = true;
        setPressedKeys(tmp);
      }
    });

    // Store the state to `typedKey` and reset the state.
    if (Object.values(keyboardState).every((value: boolean) => !value)) {
      setTypedKeyDirectly({ ...pressedKeys });
      setPressedKeys({ ...defaultKeyboardValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardState]);

  return [typedKey, setTypedKey];
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

  const setTypedBrailleStrings = (e: KeyboardEvent): void => {
    setTypedKey(e);
  };

  useEffect(() => {
    if (!typedKey.Backspace) {
      // See https://www.unicode.org/charts/PDF/U2800.pdf
      let codePoint = 0x2800;
      if (typedKey.KeyF) codePoint += 2 ** 0;
      if (typedKey.KeyD) codePoint += 2 ** 1;
      if (typedKey.KeyS) codePoint += 2 ** 2;
      if (typedKey.KeyJ) codePoint += 2 ** 3;
      if (typedKey.KeyK) codePoint += 2 ** 4;
      if (typedKey.KeyL) codePoint += 2 ** 5;
      setTypedBrailleStringsDirectly(
        `${typedBrailleStrings}${String.fromCodePoint(codePoint)}`
      );
    } else {
      if (typedBrailleStrings.length !== 0) {
        setTypedBrailleStringsDirectly(typedBrailleStrings.slice(0, -1));
      } else {
        setTypedBrailleStringsDirectly(typedBrailleStrings);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedKey]);
  return [typedBrailleStrings, setTypedBrailleStrings];
}

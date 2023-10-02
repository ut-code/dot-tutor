import { useRef, type KeyboardEvent } from "react";
import {
  AvailableKey,
  convertKeyboardStateToBraille,
  defaultKeyboardValues,
} from "@/hooks/useTypedBrailleString";

export default function TenjiInput(props: {
  brailleDotCount: 6 | 8;
  inputRef: React.MutableRefObject<HTMLInputElement>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const { brailleDotCount, inputRef, setValue } = props;
  const keys = ["a", "s", "d", "f", "j", "k", "l", ";", " "];
  const shouldHandleKeyboardEvent = (e: KeyboardEvent) =>
    !e.ctrlKey && !e.altKey && !e.metaKey && keys.includes(e.key.toLowerCase());
  const pressedKeysRef = useRef(new Set<string>());
  const oncePressedKeysRef = useRef(new Set<string>());
  return (
    <input
      ref={inputRef}
      onChange={(e) =>
        setValue((e.target.value.match(/[⠀-⣿]/g) ?? [""]).join(""))
      }
      onKeyDown={(e) => {
        if (!shouldHandleKeyboardEvent(e)) return;
        const pressedKey = e.code;
        pressedKeysRef.current.add(pressedKey);
        oncePressedKeysRef.current.add(pressedKey);
        e.preventDefault();
      }}
      onKeyUp={(e) => {
        if (!shouldHandleKeyboardEvent(e)) return;
        const pressedKey = e.code;
        pressedKeysRef.current.delete(pressedKey);

        if (pressedKeysRef.current.size === 0) {
          const tmpTypedKeys = { ...defaultKeyboardValues };
          // eslint-disable-next-line no-restricted-syntax
          for (const key of Object.keys(tmpTypedKeys)) {
            const KEY = key as AvailableKey;
            if (Object.hasOwn(tmpTypedKeys, KEY)) {
              if (Array.from(oncePressedKeysRef.current).includes(KEY)) {
                tmpTypedKeys[KEY] = true;
              }
            }
          }
          const typedBraille = convertKeyboardStateToBraille(
            tmpTypedKeys,
            brailleDotCount,
          );
          const { selectionStart, selectionEnd } = e.currentTarget;
          if (
            typedBraille &&
            selectionStart !== null &&
            selectionEnd !== null
          ) {
            e.currentTarget.value = (
              [
                e.currentTarget.value.slice(0, selectionStart),
                typedBraille,
                e.currentTarget.value.slice(selectionEnd),
              ]
                .join("")
                .match(/[⠀-⣿]/g) ?? [""]
            ).join("");
            e.currentTarget.setSelectionRange(
              selectionStart + 1,
              selectionStart + 1,
            );
          }
          oncePressedKeysRef.current.clear();
        }
        setValue(e.currentTarget.value);
        e.preventDefault();
      }}
      style={{
        width: "100%",
        fontSize: "150%",
        lineHeight: "2em",
        borderRadius: "5px",
        borderColor: "whitesmoke",
      }}
    />
  );
}

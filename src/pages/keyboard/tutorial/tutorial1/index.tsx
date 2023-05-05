import useTypedBrailleString from "../../../../hooks/useTypedBrailleStrings";
import { TextField, Typography } from "@mui/material";
import { BrailleString } from "@/models/Braille";
import translateBraille from "../../../../utils/translateBraille";

export default function Tutorial1(): JSX.Element {
  const [typedBrailleString, setTypedBrailleString] = useTypedBrailleString();
  return (
    <>
      <TextField
        variant="outlined"
        value={typedBrailleString}
        onKeyDown={(e) => {
          setTypedBrailleString(e);
        }}
        onKeyUp={(e) => {
          setTypedBrailleString(e);
        }}
        style={{ width: "100%" }}
      />
      <Typography style={{ color: "gray", fontSize: "75%" }}>
        {translateBraille(new BrailleString("unicode", typedBrailleString))}
      </Typography>
    </>
  );
}

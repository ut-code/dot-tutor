import useTypedBrailleStrings from "../../../../hooks/useTypedBrailleStrings";
import { TextField, Typography } from "@mui/material";
import { type BrailleChar } from "../../../../types/brailleDefinitions";
import translateBraille from "../../../../components/translateBraille";

export default function Tutorial1(): JSX.Element {
  const [typedBrailleStrings, setTypedBrailleStrings] =
    useTypedBrailleStrings();
  return (
    <>
      <TextField
        variant="outlined"
        value={typedBrailleStrings}
        onKeyDown={(e) => {
          setTypedBrailleStrings(e);
        }}
        onKeyUp={(e) => {
          setTypedBrailleStrings(e);
        }}
        style={{ width: "100%" }}
      />
      <Typography style={{ color: "gray", fontSize: "75%" }}>
        {translateBraille(Array.from(typedBrailleStrings) as BrailleChar[])}
      </Typography>
    </>
  );
}

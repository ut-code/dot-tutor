import useTypedBrailleStrings from "../../../../components/useTypedBrailleStrings";
import { TextField } from "@mui/material";

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
      />
    </>
  );
}

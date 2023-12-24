import { useState } from "react";
import { Toolbar, Box, ThemeProvider } from "@mui/material";
import { type TutorialSteps } from "@/types/Tutorial";
import TopBar from "@/components/TopBar";
import BottomStepper from "@/components/BottomStepper";
import HiraganaTableDialog from "./HiraganaTableDialog";
import AlphabetTableDialog from "./AlphabetTableDialog";
import MuiTheme from "./MuiTheme";

export default function Tutorial({
  tutorialSteps,
}: {
  tutorialSteps: TutorialSteps;
}): JSX.Element {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  return (
    <ThemeProvider theme={MuiTheme}>
      <TopBar tutorialDialogSteps={tutorialSteps[selectedStep].dialog} />
      <Toolbar />
      <Box m={2} sx={{ overflow: "auto" }}>
        <main>{tutorialSteps[selectedStep].content}</main>
        {tutorialSteps[selectedStep].hasHintHiraganaTable && (
          <HiraganaTableDialog />
        )}
        {tutorialSteps[selectedStep].hasHintAlphabetTable && (
          <AlphabetTableDialog />
        )}
      </Box>
      <BottomStepper
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
        length={tutorialSteps.length}
      />
    </ThemeProvider>
  );
}

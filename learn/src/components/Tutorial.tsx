import { useState } from "react";
import { Toolbar, Box } from "@mui/material";
import { type TutorialSteps } from "@/types/Tutorial";
import TopBar from "@/components/TopBar";
import BottomStepper from "@/components/BottomStepper";
import HiraganaTableDialog from "./HiraganaTableDialog";
import AlphabetTableDialog from "./AlphabetTableDialog";

export default function Tutorial({
  tutorialSteps,
}: {
  tutorialSteps: TutorialSteps;
}): JSX.Element {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  return (
    <>
      <TopBar tutorialDialogSteps={tutorialSteps[selectedStep].dialog} />
      <Toolbar />
      <Box m={2}>
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
    </>
  );
}
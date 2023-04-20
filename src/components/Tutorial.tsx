import { useState } from "react";
import { Toolbar, Box } from "@mui/material";
import { type TutorialSteps } from "./tutorialDefinitions";
import TopBar from "./TopBar";
import BottomStepper from "./BottomStepper";

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
      </Box>
      <BottomStepper
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
        length={tutorialSteps.length}
      />
    </>
  );
}

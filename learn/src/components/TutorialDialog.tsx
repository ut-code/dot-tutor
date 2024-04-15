import { useState, type Dispatch, type SetStateAction } from "react";
import { type TutorialDialogSteps } from "@/types/Tutorial";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CommonButton from "./CommonButton";

export default function TutorialDialog({
  open,
  setOpen,
  tutorialDialogSteps,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tutorialDialogSteps: TutorialDialogSteps;
}): JSX.Element {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  function closeDialog(): void {
    setOpen(false);
    setSelectedStep(0);
  }
  return (
    <Dialog
      open={open}
      onClose={() => {
        closeDialog();
      }}
      scroll="paper"
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          height: "100%",
        },
      }}
    >
      <DialogTitle m={0} p={2}>
        <Typography
          variant="h4"
          component="div"
          color="inherit"
          sx={{ fontWeight: "bold" }}
        >
          {tutorialDialogSteps[selectedStep].title}
        </Typography>
        <IconButton
          sx={{ position: "absolute", right: 8, top: 8 }}
          onClick={() => {
            closeDialog();
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {tutorialDialogSteps[selectedStep].content}
      </DialogContent>
      <DialogActions>
        <CommonButton
          variant="outlined"
          disabled={selectedStep === 0}
          onClick={() => {
            if (selectedStep > 0) {
              setSelectedStep(selectedStep - 1);
            }
          }}
        >
          前へ
        </CommonButton>
        <CommonButton
          variant="outlined"
          disabled={selectedStep === tutorialDialogSteps.length - 1}
          onClick={() => {
            if (selectedStep < tutorialDialogSteps.length - 1) {
              setSelectedStep(selectedStep + 1);
            }
          }}
        >
          次へ
        </CommonButton>
        {selectedStep === tutorialDialogSteps.length - 1 && (
          <CommonButton
            variant="contained"
            onClick={() => {
              closeDialog();
            }}
          >
            はじめる
          </CommonButton>
        )}
      </DialogActions>
    </Dialog>
  );
}

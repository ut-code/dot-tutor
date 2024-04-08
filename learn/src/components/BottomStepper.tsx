import { type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, Button, MobileStepper } from "@mui/material";
import CommonButton from "./CommonButton";

export default function BottomStepper({
  selectedStep,
  setSelectedStep,
  length,
}: {
  selectedStep: number;
  setSelectedStep: Dispatch<SetStateAction<number>>;
  length: number;
}): JSX.Element {
  const router = useRouter();
  return (
    <BottomNavigation>
      <MobileStepper
        variant="progress"
        steps={length}
        position="bottom"
        activeStep={selectedStep}
        backButton={
          <CommonButton
            disabled={selectedStep === 0}
            onClick={() => {
              if (selectedStep > 0) {
                setSelectedStep(selectedStep - 1);
              }
            }}
          >
            前へ
          </CommonButton>
        }
        nextButton={
          selectedStep !== length - 1 ? (
            <CommonButton
              disabled={selectedStep === length - 1}
              onClick={() => {
                if (selectedStep < length - 1) {
                  setSelectedStep(selectedStep + 1);
                }
              }}
            >
              次へ
            </CommonButton>
          ) : (
            <CommonButton
              variant="contained"
              onClick={async () => {
                await router.push("/");
              }}
            >
              終了
            </CommonButton>
          )
        }
      />
    </BottomNavigation>
  );
}

interface TutorialDialogStep {
  title: string;
  content: JSX.Element;
}

export type TutorialDialogSteps = TutorialDialogStep[];

interface TutorialStep {
  dialog: TutorialDialogSteps;
  content: JSX.Element;
}

export type TutorialSteps = TutorialStep[];

/**
 * the type of the dialog of tutorial
 */
interface TutorialDialogStep {
  title: string;
  content: JSX.Element;
}

/**
 * the type of the dialogs of tutorial
 */
export type TutorialDialogSteps = TutorialDialogStep[];

/**
 * the type of the step of tutorial
 */
interface TutorialStep {
  dialog: TutorialDialogSteps;
  content: JSX.Element;
  hasHintHiraganaTable: boolean;
  hasHintAlphabetTable: boolean;
}

/**
 * the type of the steps of tutorial
 */
export type TutorialSteps = TutorialStep[];

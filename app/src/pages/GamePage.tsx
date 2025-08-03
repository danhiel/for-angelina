import { useState } from "react";
import "./GamePage.scss";
import { FirstDialogue } from "./FirstDialogue";
import { SecondDialogue } from "./SecondDialogue";
import { ThirdDialogue } from "./ThirdDialogue";
import { FourthDialogue } from "./FourthDialogue";

export const GamePage = () => {
  const [hideDialogue, setHideDialogue] = useState(true);
  const [dialogueCount, setDialogueCount] = useState(0);
  const [activity, setActivity] = useState("");

  const incrementDialogueCount = () => {
    setDialogueCount(dialogueCount + 1);
  };

  return (
    <div
      className="game-page-container blur"
      onClick={() => {
        if (hideDialogue) {
          setHideDialogue(false);
        }
      }}
    >
      <div className="fadeIn" />

      {!hideDialogue && dialogueCount == 0 && (
        <FirstDialogue onClick={incrementDialogueCount} />
      )}
      {!hideDialogue && dialogueCount == 1 && (
        <SecondDialogue
          onClick={(theActivity: string) => {
            setActivity(theActivity);
            incrementDialogueCount();
          }}
        />
      )}
      {!hideDialogue && dialogueCount == 2 && (
        <ThirdDialogue
          activity={activity}
          onClick={() => {
            incrementDialogueCount();
          }}
        />
      )}
      {!hideDialogue && dialogueCount == 3 && (
        <FourthDialogue
          onClick={() => {
            incrementDialogueCount();
          }}
        />
      )}
    </div>
  );
};

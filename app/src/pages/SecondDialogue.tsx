import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const SecondDialogue = (props: any) => {
  const [hideResponse, setHideResponse] = useState(true);

  return (
    <div className="dialogue-container fade">
      <span>Danhiel:</span>
      <hr />
      <TypeAnimation
        sequence={[
          "Okay so i'll pick you up August 3rd, 1 PM at your place! We can start off the day with an activity -- is there one you prefer?",
          () => {
            setHideResponse(false);
          },
        ]}
        style={{ fontSize: "18px", color: "white" }}
        speed={50}
        omitDeletionAnimation
      />
      {!hideResponse && (
        <div className="response-container">
          <hr />
          <button onClick={() => props.onClick("pottery painting")}>
            pottery painting
          </button>
          <button onClick={() => props.onClick("candle making")}>
            candle making
          </button>
        </div>
      )}
    </div>
  );
};

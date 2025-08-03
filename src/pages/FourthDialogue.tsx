import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const FourthDialogue = (props: any) => {
  const [hideResponse, setHideResponse] = useState(true);

  return (
    <div className="dialogue-container fade">
      <span>Danhiel:</span>
      <hr />
      <TypeAnimation
        sequence={[
          "Perfect! See you soon :))",
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
          <button onClick={() => props.onClick()}>End</button>
        </div>
      )}
    </div>
  );
};

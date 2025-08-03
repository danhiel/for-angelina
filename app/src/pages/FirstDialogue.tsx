import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const FirstDialogue = (props: any) => {
  const [hideResponse, setHideResponse] = useState(true);

  return (
    <div className="dialogue-container fade">
      <span>Danhiel:</span>
      <hr />
      <TypeAnimation
        sequence={[
          "hellooo!! i really do think you're cute, pretty, have an amazing personality, and have immaculate vibez. i know we only started talking recently...",
          2000,
          "...but im excited for our future adventures, starting off with making our first date just a tiny bit more special :)",
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
          <button onClick={() => props.onClick()}>Next</button>
        </div>
      )}
    </div>
  );
};

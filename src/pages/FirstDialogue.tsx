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
          "hellooo good morning!! the way I asked you out on a date was pretty lame... so I created this app to help make it a tiny bit more special :)",
          3000,
          "i really do think you're cute, pretty, have an amazing personality, and have immaculate vibez. i know we only started talking recently...",
          3000,
          "...but im excited for our future adventures, starting off with this first date!",
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

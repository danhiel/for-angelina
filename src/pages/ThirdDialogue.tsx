import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import FileRose from "../assets/MYROSE.png";

export const ThirdDialogue = (props: any) => {
  const [hideResponse, setHideResponse] = useState(true);

  return (
    <div className="dialogue-container fade">
      <span>Danhiel:</span>
      <hr />
      <TypeAnimation
        sequence={[
          `Okay lets do ${props.activity}! we can then be spontaneous about it after the activity! ok final thing -- I have a small gift for you!`,
          3000,
          "other peoples first dates they give roses, but hopefully this app + gift is more special :)",
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
          <a
            href={FileRose}
            download="Rose"
            target="_blank"
            onClick={() => props.onClick()}
          >
            Receive Gift
          </a>
          <button onClick={() => props.onSkip()}>Skip gift</button>
        </div>
      )}
    </div>
  );
};

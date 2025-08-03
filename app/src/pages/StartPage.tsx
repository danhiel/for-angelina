import { TypeAnimation } from "react-type-animation";
import "./StartPage.scss";
import { useEffect, useState } from "react";

export const StartPage = (props: any) => {
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsContinueDisabled(false);
    }, 12000);
  }, []);

  const handleClick = () => {
    if (!isContinueDisabled) {
      props.startGame();
    }
  };

  return (
    <div id="main-container" onClick={handleClick}>
      <TypeAnimation
        sequence={[
          "hi angelina",
          2000,
          "for our first date ever 💕...",
          2000,
          "press anywhere to start",
        ]}
        style={{ fontSize: "24px", color: "white" }}
        speed={25}
      />
    </div>
  );
};

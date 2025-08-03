import { useState } from "react";
import "./App.scss";
import { StartPage } from "./pages/StartPage";
import { GamePage } from "./pages/GamePage";

function App() {
  const [hideGame, setHideGame] = useState(true);

  const StartGame = () => {
    console.log("game started");
    setHideGame(false);
  };

  return (
    <>
      {!hideGame && <StartPage startGame={() => StartGame()} />}
      {hideGame && <GamePage />}
    </>
  );
}

export default App;

import Scene from "./components/Scene";
import AudioController from "./components/AudioController";
import StartScreen from "./components/StartScreen";
import { useGame } from "./context/GameContext";

import CharacterSelectScreen from "./components/CharacterSelectScreen";

function GameContent() {
  const { gameState, playerGender } = useGame();

  if (gameState === "CHAR_SELECT") {
    return <CharacterSelectScreen />;
  }

  // Fallback for legacy check or direct Scene transition
  if (gameState === "GAME" || playerGender) {
    return <Scene />;
  }

  return <StartScreen />;
}

export default function App() {
  return (
    <>
      <AudioController />
      <GameContent />
    </>
  );
}

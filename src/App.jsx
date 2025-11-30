import Scene from "./components/Scene";
import AudioController from "./components/AudioController";
import StartScreen from "./components/StartScreen";
import { useGame } from "./context/GameContext";

function GameContent() {
  const { playerGender } = useGame();
  return playerGender ? <Scene /> : <StartScreen />;
}

export default function App() {
  return (
    <>
      <AudioController />
      <GameContent />
    </>
  );
}

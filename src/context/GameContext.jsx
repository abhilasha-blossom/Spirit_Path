import { createContext, useContext, useState } from "react";
import { scenes, virtues } from "../data/scenes";
import { audio } from "../data/audio";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [currentSceneId, setCurrentSceneId] = useState("intro_forest");

  const [virtueScores, setVirtueScores] = useState(
    virtues.reduce((acc, v) => ({ ...acc, [v]: 0 }), {})
  );

  function resetGame() {
    setCurrentSceneId("intro_forest");
    setVirtueScores(virtues.reduce((acc, v) => ({ ...acc, [v]: 0 }), {}));
  }

  function getTopVirtue(scores) {
    return Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
  }

  function goToScene(nextId, virtue) {
    let newScores = { ...virtueScores };

    if (virtue) {
      newScores = {
        ...newScores,
        [virtue]: newScores[virtue] + 1,
      };
      setVirtueScores(newScores);
    }

    if (nextId === "ending_demo") {
      const topVirtue = getTopVirtue(newScores);
      // You could store the result in a separate state if needed, 
      // or just pass it via the scene ID or a query param.
      // For now, let's just navigate to the ending scene.
      // We will handle the calculation display in the component.
    }

    setCurrentSceneId(nextId);
  }

  const currentScene = scenes[currentSceneId];

  const [isMuted, setIsMuted] = useState(true); // Start muted due to browser autoplay policy
  const [playerGender, setPlayerGender] = useState(null); // 'female' or 'male'
  const [travellerImage, setTravellerImage] = useState(null);

  function toggleMute() {
    setIsMuted((prev) => !prev);
  }

  function startGame(gender, imageSrc) {
    setPlayerGender(gender);
    setTravellerImage(imageSrc);
    playSfx("click");
    // Ensure we start at the intro
    setCurrentSceneId("intro_forest");
  }

  function playSfx(key) {
    if (isMuted || !audio.sfx[key]) return;
    const sound = new Audio(audio.sfx[key]);
    sound.volume = 0.6;
    sound.play().catch(e => console.log("SFX blocked:", e));
  }

  return (
    <GameContext.Provider
      value={{
        currentScene,
        virtueScores,
        goToScene,
        resetGame,
        isMuted,
        toggleMute,
        playSfx,
        playerGender,
        travellerImage,
        startGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

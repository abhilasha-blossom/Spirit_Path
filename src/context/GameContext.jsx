import { createContext, useContext, useState } from "react";
import { scenes, virtues } from "../data/scenes";

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

  function goToScene(nextId, virtue) {
    if (virtue) {
      setVirtueScores((prev) => ({
        ...prev,
        [virtue]: prev[virtue] + 1,
      }));
    }

    setCurrentSceneId(nextId);
  }

  const currentScene = scenes[currentSceneId];

  return (
    <GameContext.Provider
      value={{ currentScene, virtueScores, goToScene, resetGame }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

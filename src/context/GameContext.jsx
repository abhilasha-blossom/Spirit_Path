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
    setInventory([]);
    setPlayerGender(null);
    setTravellerImage(null);
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

    if (nextId === "calculate_ending") {
      const topVirtue = getTopVirtue(newScores);
      // Redirect to the specific ending scene
      nextId = `ending_${topVirtue}`;

      // Save ending to history
      const unlockedEndings = JSON.parse(localStorage.getItem("spiritPath_endings") || "[]");
      if (!unlockedEndings.includes(nextId)) {
        localStorage.setItem("spiritPath_endings", JSON.stringify([...unlockedEndings, nextId]));
      }
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

  // --- Inventory System ---
  const [inventory, setInventory] = useState([]);

  function addToInventory(item) {
    if (!inventory.includes(item)) {
      setInventory((prev) => [...prev, item]);
      playSfx("click"); // Reuse click sound for now, or add a specific pickup sound
    }
  }

  function removeFromInventory(item) {
    setInventory((prev) => prev.filter((i) => i !== item));
  }

  // --- Save/Load System ---
  // --- Save/Load System ---
  const [hasSavedGame, setHasSavedGame] = useState(() => {
    try {
      return !!localStorage.getItem("spiritPath_save");
    } catch {
      return false;
    }
  });

  function saveGame() {
    try {
      const gameState = {
        currentSceneId,
        virtueScores,
        inventory,
        playerGender,
        travellerImage,
        isMuted
      };
      localStorage.setItem("spiritPath_save", JSON.stringify(gameState));
      setHasSavedGame(true);
      playSfx("click");
      alert("Game Saved!");
    } catch (error) {
      console.error("Failed to save game:", error);
      alert("Failed to save game. Storage might be full or disabled.");
    }
  }

  function loadGame() {
    try {
      const savedData = localStorage.getItem("spiritPath_save");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setCurrentSceneId(parsed.currentSceneId);
        setVirtueScores(parsed.virtueScores);
        setInventory(parsed.inventory || []);
        setPlayerGender(parsed.playerGender);
        setTravellerImage(parsed.travellerImage);
        if (parsed.isMuted !== undefined) setIsMuted(parsed.isMuted);
        playSfx("click");
      } else {
        alert("No saved game found.");
        setHasSavedGame(false);
      }
    } catch (error) {
      console.error("Failed to load save:", error);
      alert("Failed to load save; data may be corrupted.");
    }
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
        startGame,
        // New Features
        inventory,
        addToInventory,
        removeFromInventory,
        saveGame,
        loadGame,
        hasSavedGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

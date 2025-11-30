import Fireflies from "./Fireflies";
import Sakura from "./Sakura";
import Fog from "./Fog";
import { useGame } from "../context/GameContext";
import { useState } from "react";
import Character from "./Character";
import SpiritReveal from "./SpiritReveal";

export default function Scene() {
  const { currentScene, goToScene, playSfx } = useGame();
  const [walking, setWalking] = useState(false);

  function handleChoice(choice) {
    playSfx("click");
    setWalking(true);
    setTimeout(() => {
      setWalking(false);
      goToScene(choice.next, choice.virtue);
    }, 650); // delay equal to walking animation.duration
  }

  if (currentScene.isEnding) {
    return <SpiritReveal />;
  }

  return (
    <div
      key={currentScene.id}
      className="scene-container"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${currentScene.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="text-box">
        <h1>{currentScene.title}</h1>
        <p className="scene-text">{currentScene.text}</p>
      </div>

      {/* Cinematic Overlays */}
      <div className="vignette" />
      <div className="lantern-glow" />

      {/* Fireflies magical effect */}
      <Fireflies />
      <Fog />
      <Sakura />

      {/* Character Removed as requested */}

      {/* Choice Buttons - Forced Visibility */}
      <div
        className="choices"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "90%",
          maxWidth: "500px"
        }}
      >
        {currentScene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice)}
            className="btn-choice"
            style={{
              padding: "16px 30px",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(211, 78, 78, 0.9)",
              color: "white",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              width: "100%"
            }}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

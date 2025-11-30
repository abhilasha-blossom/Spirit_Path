import Fireflies from "./Fireflies";
import Sakura from "./Sakura";
import Fog from "./Fog";
import { useGame } from "../context/GameContext";
import { useState } from "react";
import Character from "./Character";

export default function Scene() {
  const { currentScene, goToScene } = useGame();
  const [walking, setWalking] = useState(false);

  function handleChoice(choice) {
    setWalking(true);
    setTimeout(() => {
      setWalking(false);
      goToScene(choice.next, choice.virtue);
    }, 650); // delay equal to walking animation.duration
  }

  return (
    <div
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
      {/* Fireflies magical effect */}
      <Fireflies />
      <Fog />
      <Sakura />
      {/* Title + Text */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "12px",
          padding: "16px",
          maxWidth: "800px",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          {currentScene.title}
        </h1>
        <p style={{ fontSize: "18px", lineHeight: "1.5", whiteSpace: "pre-line" }}>
          {currentScene.text}
        </p>
      </div>

      {/* Character + Choice Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <Character walking={walking} />

        {currentScene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice)}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              color: "#1b113f",
              border: "none",
              padding: "14px",
              fontSize: "18px",
              borderRadius: "12px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

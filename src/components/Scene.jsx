import Fireflies from "./Fireflies";
import Fog from "./Fog";
import { useGame } from "../context/GameContext";
import { useState } from "react";
import Character from "./Character";
import SpiritReveal from "./SpiritReveal";

import Timer from "./Timer";
import Gallery from "./Gallery";
import VisualEffects from "./VisualEffects";
import Settings from "./Settings";
import GameOver from "./GameOver";
import PeekingCharacter from "./PeekingCharacter";

export default function Scene() {
    const { currentScene, goToScene, playSfx, inventory, addToInventory, saveGame } = useGame();
    const [walking, setWalking] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    function handleChoice(choice) {
        if (walking) return; // Prevent rapid clicks
        playSfx("click");
        if (choice.item) {
            addToInventory(choice.item);
        }
        setWalking(true);
        setTimeout(() => {
            setWalking(false);
            goToScene(choice.next, choice.virtue);
        }, 650); // delay equal to walking animation.duration
    }

    function handleTimeout() {
        setIsGameOver(true);
    }

    if (!currentScene) return <div style={{ color: "white", padding: 20 }}>Loading Scene...</div>;

    if (currentScene.isEnding) {
        return <SpiritReveal />;
    }

    if (isGameOver) {
        return <GameOver />;
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
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.6)", // Dark overlay
                    zIndex: 0
                }}
            />

            <div className="text-box">
                <h1>{currentScene.title}</h1>
                <p className="scene-text">{currentScene.text}</p>
                {/* Timer Display */}
                {currentScene.timer && (
                    <Timer
                        duration={currentScene.timer}
                        onTimeout={handleTimeout}
                    />
                )}
            </div>

            {/* UI Controls */}
            <div className="top-menu" style={{ position: "absolute", top: 20, right: 80, zIndex: 2000, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={saveGame} style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 10px", cursor: "pointer" }}>
                        💾 Save
                    </button>
                    <button onClick={() => setShowGallery(true)} style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 10px", cursor: "pointer" }}>
                        🏆 Gallery
                    </button>
                    <button onClick={() => setShowSettings(true)} style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 10px", cursor: "pointer" }}>
                        ⚙️ Settings
                    </button>
                </div>
                <div className="inventory-display" style={{ color: "white", textAlign: "right", maxWidth: "200px", wordWrap: "break-word" }}>
                    {inventory.length > 0 ? "🎒 " + inventory.join(", ") : ""}
                </div>
            </div>

            {/* Cinematic Overlays */}
            <div className="vignette" />
            <div className="lantern-glow" />

            {/* Dynamic Effects based on Scene */}
            {currentScene.id.includes("china") && <div className="blood-shatter" />}

            {/* Seoul: Glitch + Heartbeat */}
            {currentScene.id.includes("seoul") && (
                <>
                    <div className="glitch-intense" />
                    <div className="heartbeat-overlay" />
                </>
            )}

            {/* Kyoto: Shadow Fog + Fireflies */}
            {currentScene.id.includes("kyoto") && (
                <>
                    <div className="shadow-fog" />
                    <div className="fireflies" />
                </>
            )}

            {/* Fireflies magical effect */}
            <Fireflies />
            <Fog />

            {/* Choice Buttons */}
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
                {(currentScene.choices || []).map((choice, index) => (
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
                        }}
                    >
                        {choice.label}
                    </button>
                ))}
            </div>

            {/* Visual Effects Layer */}
            <PeekingCharacter />
            <VisualEffects />

            {/* Gallery Modal */}
            {showGallery && <Gallery onClose={() => setShowGallery(false)} />}

            {/* Settings Modal */}
            {showSettings && <Settings onClose={() => setShowSettings(false)} />}
        </div>
    );
}

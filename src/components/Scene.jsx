import Fireflies from "./Fireflies";
import Fog from "./Fog";
import { useGame } from "../context/GameContext";
import { useState, useEffect } from "react";
import Character from "./Character";
import SpiritReveal from "./SpiritReveal";


import Timer from "./Timer";
import Gallery from "./Gallery";
import VisualEffects from "./VisualEffects";
import Settings from "./Settings";
import GameOver from "./GameOver";
import PeekingCharacter from "./PeekingCharacter";
import Puzzle from "./Puzzle";
import SpiritLog from "./SpiritLog";

export default function Scene() {
    const {
        currentScene, goToScene, playSfx,
        inventory, addToInventory, saveGame,
        sanity, reduceSanity, collectedItems
    } = useGame();

    const [walking, setWalking] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showLog, setShowLog] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isNightmareHour, setIsNightmareHour] = useState(false);
    const [showPuzzle, setShowPuzzle] = useState(false);
    const [textOverride, setTextOverride] = useState(null);

    // Check for Nightmare Hour (0-3 AM)
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 3) {
            setIsNightmareHour(true);
        }
    }, []);

    // Check if scene has a puzzle
    useEffect(() => {
        if (currentScene?.puzzle) {
            setShowPuzzle(true);
        } else {
        }
        // Reset text override on scene change
        setTextOverride(null);
    }, [currentScene]);

    function handleChoice(choice) {
        if (walking) return; // Prevent rapid clicks

        // Check requirements
        if (choice.requiredItems) {
            const missing = choice.requiredItems.filter(i => !collectedItems.includes(i));
            if (missing.length > 0) {
                playSfx("error"); // Need to add/handle this
                alert(`Locked! Missing: ${missing.join(", ")}`);
                return;
            }
        }

        playSfx("click");

        if (choice.item) {
            addToInventory(choice.item);
        }

        if (choice.sanityCost) {
            reduceSanity(choice.sanityCost);
        }

        // Handle Text Override (Clues)
        if (choice.textOverride) {
            setTextOverride(choice.textOverride);
            return; // Don't change scene if it's just a clue/item pickup
        }

        setWalking(true);
        setTimeout(() => {
            setWalking(false);
            goToScene(choice.next, choice.virtue);
        }, 650); // delay equal to walking animation.duration
    }

    function handlePuzzleSolve(success) {
        setShowPuzzle(false);
        if (success) {
            goToScene(currentScene.puzzle.next);
        } else {
            // Failed or gave up
            goToScene(currentScene.puzzle.failNext);
        }
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

    // Sanity Filters
    const sanityFilter = sanity < 50 ? `grayscale(${100 - sanity}%) contrast(${100 + (100 - sanity)}%) hue-rotate(${100 - sanity}deg)` : "none";
    const nightmareFilter = isNightmareHour ? "sepia(0.5) hue-rotate(-50deg)" : "none";

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
                filter: `${sanityFilter} ${nightmareFilter}`
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
                <h1 className={sanity < 30 ? "glitch-text" : ""}>{currentScene.title}</h1>
                <p className="scene-text">
                    {textOverride ? textOverride : (currentScene.puzzle && showPuzzle ? "Enter the code..." : currentScene.text)}
                </p>
                {/* Timer Display */}
                {currentScene.timer && !showPuzzle && (
                    <Timer
                        duration={currentScene.timer}
                        onTimeout={handleTimeout}
                    />
                )}
            </div>

            {/* UI Controls */}
            <div className="top-menu" style={{ position: "absolute", top: 20, right: 80, zIndex: 2000, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ color: "white", border: "1px solid #555", padding: "5px 10px", background: "rgba(0,0,0,0.5)" }}>
                        🧠 {sanity}%
                    </div>
                    <button onClick={saveGame} style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 10px", cursor: "pointer" }}>
                        💾 Save
                    </button>
                    <button onClick={() => setShowLog(true)} style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 10px", cursor: "pointer" }}>
                        📖 Log
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

            {/* Puzzle or Choices */}
            {showPuzzle ? (
                <Puzzle puzzleData={currentScene.puzzle} onSolve={handlePuzzleSolve} />
            ) : (
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
                    {(currentScene.choices || []).map((choice, index) => {
                        const isLocked = choice.requiredItems && choice.requiredItems.some(i => !collectedItems.includes(i));
                        return (
                            <button
                                key={index}
                                onClick={() => handleChoice(choice)}
                                className="btn-choice"
                                style={{
                                    padding: "16px 30px",
                                    borderRadius: "50px",
                                    border: isLocked ? "1px solid #555" : "1px solid rgba(255,255,255,0.2)",
                                    background: isLocked ? "rgba(50, 50, 50, 0.9)" : "rgba(211, 78, 78, 0.9)",
                                    color: isLocked ? "#aaa" : "white",
                                    fontWeight: "600",
                                    fontSize: "1.1rem",
                                    cursor: isLocked ? "not-allowed" : "pointer",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                                    opacity: isLocked ? 0.7 : 1,
                                }}
                            >
                                {isLocked ? `🔒 ${choice.label}` : choice.label}
                                {choice.sanityCost && <span style={{ fontSize: "0.8em", marginLeft: "10px", color: "#ff9999" }}>(-{choice.sanityCost} 🧠)</span>}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Visual Effects Layer */}
            <PeekingCharacter />
            <VisualEffects />

            {/* Gallery Modal */}
            {showGallery && <Gallery onClose={() => setShowGallery(false)} />}

            {/* Settings Modal */}
            {showSettings && <Settings onClose={() => setShowSettings(false)} />}

            {/* Spirit Log Modal */}
            {showLog && <SpiritLog onClose={() => setShowLog(false)} />}
        </div>
    );
}

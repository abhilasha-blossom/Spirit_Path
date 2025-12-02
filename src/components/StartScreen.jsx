import { useGame } from "../context/GameContext";
import { useState } from "react";
import femaleSrc from "../assets/characters/female_v3.png";
import maleSrc from "../assets/characters/male_v3.png";
import Gallery from "./Gallery";
import Settings from "./Settings";

export default function StartScreen() {
    const { startGame, loadGame } = useGame();
    const [showGallery, setShowGallery] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    // Check storage directly to ensure button visibility is accurate
    const hasSavedGame = !!localStorage.getItem("spiritPath_save");

    return (
        <div className="start-screen-container">
            <h1 className="main-title">LOVE OR DEATH</h1>
            <p className="subtitle">Choose your obsession</p>

            <div className="character-selection">
                <div
                    className="char-card"
                    onClick={() => startGame("female", femaleSrc)}
                >
                    <div className="char-img-placeholder">🔪</div>
                    <h3>The Obsessive</h3>
                    <p style={{ fontSize: "0.9rem", width: "100%", whiteSpace: "normal", wordWrap: "break-word", textAlign: "center", lineHeight: "1.2", margin: "10px 0 0 0" }}>"I will never let you go..."</p>
                </div>

                <div
                    className="char-card"
                    onClick={() => startGame("male", maleSrc)}
                >
                    <div className="char-img-placeholder">⛓️</div>
                    <h3>The Possessive</h3>
                    <p style={{ fontSize: "0.9rem", width: "100%", whiteSpace: "normal", wordWrap: "break-word", textAlign: "center", lineHeight: "1.2", margin: "10px 0 0 0" }}>"You belong to me now."</p>
                </div>
            </div>

            {/* Load Game Button (Only if save exists) */}
            {hasSavedGame && (
                <div className="load-game-container" style={{ position: "absolute", bottom: "10%", zIndex: 100 }}>
                    <button
                        onClick={loadGame}
                        className="load-game-btn"
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid var(--accent-pink)",
                            color: "var(--accent-pink)",
                            padding: "12px 30px",
                            fontSize: "1.1rem",
                            cursor: "pointer",
                            fontFamily: "var(--font-main)",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            backdropFilter: "blur(5px)",
                            borderRadius: "5px",
                            boxShadow: "0 0 15px rgba(255, 20, 147, 0.3)"
                        }}
                    >
                        Load Game 💾
                    </button>
                </div>
            )}

            {/* Top Menu for Start Screen */}
            <div className="top-menu" style={{ position: "absolute", top: 20, right: 80, zIndex: 100, display: "flex", gap: "10px" }}>
                <button
                    onClick={() => setShowGallery(true)}
                    style={{ background: "none", border: "1px solid var(--accent-pink)", color: "var(--accent-pink)", padding: "8px 15px", cursor: "pointer", fontFamily: "var(--font-main)", textTransform: "uppercase" }}
                >
                    🏆 Gallery
                </button>
                <button
                    onClick={() => setShowSettings(true)}
                    style={{ background: "none", border: "1px solid var(--accent-pink)", color: "var(--accent-pink)", padding: "8px 15px", cursor: "pointer", fontFamily: "var(--font-main)", textTransform: "uppercase" }}
                >
                    ⚙️ Settings
                </button>
            </div>

            {/* Modals */}
            {showGallery && <Gallery onClose={() => setShowGallery(false)} />}
            {showSettings && <Settings onClose={() => setShowSettings(false)} />}
        </div>
    );
}

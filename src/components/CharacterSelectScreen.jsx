import { useGame } from "../context/GameContext";
import { useState } from "react";

// Placeholder data for characters
const CHARACTERS = [
    { id: "f1", name: "Yumi", type: "female", placeholder: "🎀" },
    { id: "f2", name: "Mika", type: "female", placeholder: "🩸" },
    { id: "f3", name: "Rina", type: "female", placeholder: "🧸" },
    { id: "f4", name: "Saki", type: "female", placeholder: "✂️" },
    { id: "m1", name: "Ren", type: "male", placeholder: "🎤" },
    { id: "m2", name: "Kaito", type: "male", placeholder: "🎸" },
    { id: "m3", name: "Haru", type: "male", placeholder: "🎹" },
    { id: "m4", name: "Yuki", type: "male", placeholder: "🎧" },
];

export default function CharacterSelectScreen() {
    const { finalizeCharacterSelection } = useGame();
    const [hoveredChar, setHoveredChar] = useState(null);

    const handleSelect = (char) => {
        // Use placeholder path for now, will be replaced by real assets later
        const imagePath = `/assets/characters/chibi_${char.id}.png`;
        finalizeCharacterSelection(char.id, imagePath);
    };

    return (
        <div className="char-select-container" style={{
            width: "100%",
            height: "100vh",
            background: "var(--bg-color)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Background Effect */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "radial-gradient(circle at center, #2a1b24 0%, #000 100%)",
                zIndex: 0
            }} />

            <h2 style={{
                fontFamily: "var(--font-main)",
                color: "var(--accent-pink)",
                fontSize: "3rem",
                marginBottom: "10px",
                zIndex: 10,
                textShadow: "2px 2px 0px var(--accent-red)"
            }}>
                CHOOSE YOUR AVATAR
            </h2>
            <p style={{
                color: "var(--text-secondary)",
                marginBottom: "30px",
                zIndex: 10,
                fontSize: "1.2rem"
            }}>
                Who will witness your fate?
            </p>

            <div className="char-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
                zIndex: 10,
                maxWidth: "1000px",
                width: "100%"
            }}>
                {CHARACTERS.map((char) => (
                    <div
                        key={char.id}
                        onClick={() => handleSelect(char)}
                        onMouseEnter={() => setHoveredChar(char.id)}
                        onMouseLeave={() => setHoveredChar(null)}
                        style={{
                            background: hoveredChar === char.id ? "var(--accent-pink)" : "rgba(0,0,0,0.7)",
                            border: "2px solid var(--accent-pink)",
                            borderRadius: "10px",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hoveredChar === char.id ? "scale(1.05) translateY(-5px)" : "scale(1)",
                            boxShadow: hoveredChar === char.id ? "0 0 20px var(--accent-pink)" : "none"
                        }}
                    >
                        <div style={{
                            width: "100px",
                            height: "100px",
                            background: "#000",
                            border: "1px solid #fff",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "3rem",
                            marginBottom: "10px"
                        }}>
                            {char.placeholder}
                        </div>
                        <h3 style={{
                            color: hoveredChar === char.id ? "#000" : "var(--accent-pink)",
                            fontFamily: "var(--font-main)",
                            fontSize: "1.5rem",
                            margin: 0
                        }}>
                            {char.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Mobile Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .char-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 15px !important;
                        overflow-y: auto;
                        max-height: 70vh;
                        padding-bottom: 20px;
                    }
                    h2 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </div>
    );
}

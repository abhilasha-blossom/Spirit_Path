import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";
import { spirits } from "../data/spirits";

export default function SpiritReveal() {
    const { virtueScores, resetGame } = useGame();
    const [spirit, setSpirit] = useState(null);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Calculate top virtue
        const topVirtue = Object.keys(virtueScores).reduce((a, b) =>
            virtueScores[a] > virtueScores[b] ? a : b
        );
        setSpirit(spirits[topVirtue]);

        // Delay reveal for dramatic effect
        setTimeout(() => setShowContent(true), 1000);
    }, [virtueScores]);

    if (!spirit) return null;

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
                color: "white",
                textAlign: "center",
                padding: "2rem",
                animation: "fadeInScene 2s ease-out",
            }}
        >
            <div
                style={{
                    opacity: showContent ? 1 : 0,
                    transform: showContent ? "translateY(0)" : "translateY(20px)",
                    transition: "all 1.5s ease-out",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <div style={{ fontSize: "80px", marginBottom: "10px" }}>
                    {spirit.symbol}
                </div>

                <h1
                    style={{
                        fontSize: "48px",
                        color: spirit.color,
                        textShadow: `0 0 20px ${spirit.color}`,
                        marginBottom: "10px",
                    }}
                >
                    {spirit.name}
                </h1>

                <p
                    style={{
                        fontSize: "24px",
                        maxWidth: "600px",
                        lineHeight: "1.6",
                        fontStyle: "italic",
                        opacity: 0.9,
                    }}
                >
                    "{spirit.description}"
                </p>

                <button
                    onClick={resetGame}
                    className="btn-choice"
                    style={{
                        marginTop: "40px",
                        background: "transparent",
                        border: "2px solid white",
                        color: "white",
                        padding: "12px 32px",
                        fontSize: "20px",
                    }}
                >
                    Begin Again
                </button>
            </div>
        </div>
    );
}

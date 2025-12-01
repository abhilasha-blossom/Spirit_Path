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
        setSpirit(spirits[topVirtue] || spirits.obsession); // Fallback to obsession

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
                background: "linear-gradient(to bottom, #1a0b14, #000)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
                color: "var(--text-primary)",
                textAlign: "center",
                padding: "2rem",
                animation: "fadeInScene 2s ease-out",
            }}
        >
            {/* Scanline Overlay */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
                pointerEvents: "none",
                zIndex: 1
            }} />

            <div
                style={{
                    opacity: showContent ? 1 : 0,
                    transform: showContent ? "translateY(0)" : "translateY(20px)",
                    transition: "all 1.5s ease-out",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    zIndex: 2,
                    maxWidth: "800px"
                }}
            >
                <div style={{
                    fontSize: "100px",
                    marginBottom: "10px",
                    filter: "drop-shadow(0 0 10px var(--accent-red))"
                }}>
                    {spirit.symbol}
                </div>

                <h1
                    style={{
                        fontSize: "60px",
                        color: spirit.color,
                        textShadow: `4px 4px 0px #000`,
                        marginBottom: "10px",
                        fontFamily: "var(--font-main)",
                        textTransform: "uppercase"
                    }}
                >
                    {spirit.name}
                </h1>

                <p
                    style={{
                        fontSize: "28px",
                        maxWidth: "700px",
                        lineHeight: "1.4",
                        fontFamily: "var(--font-main)",
                        color: "var(--text-primary)",
                        background: "rgba(0,0,0,0.7)",
                        padding: "20px",
                        border: `2px solid ${spirit.color}`,
                        boxShadow: `5px 5px 0px var(--accent-red)`
                    }}
                >
                    "{spirit.description}"
                </p>

                <button
                    onClick={resetGame}
                    className="btn-choice"
                    style={{
                        marginTop: "40px",
                        fontSize: "24px",
                        padding: "15px 40px"
                    }}
                >
                    TRY AGAIN?
                </button>
            </div>
        </div>
    );
}

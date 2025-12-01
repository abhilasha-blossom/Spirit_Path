import { useState, useEffect } from "react";
import { scenes } from "../data/scenes";

export default function Gallery({ onClose }) {
    const [unlockedEndings, setUnlockedEndings] = useState([]);

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem("spiritPath_endings") || "[]");
            setUnlockedEndings(Array.isArray(stored) ? stored : []);
        } catch (e) {
            console.error("Failed to load endings:", e);
            setUnlockedEndings([]);
        }
    }, []);

    const allEndings = Object.values(scenes).filter((s) => s.isEnding);

    return (
        <div
            className="gallery-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.9)",
                zIndex: 10000,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px",
                color: "white",
                overflowY: "auto"
            }}
        >
            <div style={{ width: "100%", maxWidth: "800px", position: "relative" }}>
                <button
                    onClick={onClose}
                    aria-label="Close Gallery"
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        background: "transparent",
                        border: "none",
                        color: "white",
                        fontSize: "2rem",
                        cursor: "pointer"
                    }}
                >
                    &times;
                </button>

                <h2 id="gallery-title" style={{ textAlign: "center", marginBottom: "40px", fontFamily: "serif" }}>Endings Gallery</h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                    {allEndings.map((ending) => {
                        const isUnlocked = unlockedEndings.includes(ending.id);
                        return (
                            <div
                                key={ending.id}
                                style={{
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    opacity: isUnlocked ? 1 : 0.5,
                                    filter: isUnlocked ? "none" : "grayscale(100%)"
                                }}
                            >
                                <div style={{
                                    height: "120px",
                                    background: isUnlocked ? `url(${ending.background}) center/cover` : "#333",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    {!isUnlocked && <span style={{ fontSize: "2rem" }}>🔒</span>}
                                </div>
                                <div style={{ padding: "15px", textAlign: "center" }}>
                                    <h3 style={{ fontSize: "1rem", margin: "0 0 5px 0" }}>{isUnlocked ? ending.title : "???"}</h3>
                                    <p style={{ fontSize: "0.8rem", color: "#aaa", margin: 0 }}>
                                        {isUnlocked ? (ending.text || "").split("\n")[0] : "Locked"}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

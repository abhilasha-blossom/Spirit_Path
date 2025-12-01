import { useGame } from "../context/GameContext";
import { useState } from "react";

export default function Settings({ onClose }) {
    const { isMuted, toggleMute, resetGame } = useGame();

    const [confirmClear, setConfirmClear] = useState(false);

    function handleClearData() {
        if (!confirmClear) {
            setConfirmClear(true);
            return;
        }

        try {
            // Nuclear Option: Wipe EVERYTHING
            localStorage.clear();

            // Double check and remove specific keys just in case
            localStorage.removeItem("spiritPath_save");
            localStorage.removeItem("spiritPath_endings");

            resetGame();

            // Visual feedback
            const btn = document.getElementById("clear-data-btn");
            if (btn) {
                btn.innerText = "DATA CLEARED ✅";
                btn.style.background = "#00ff00";
                btn.style.color = "black";
            }

            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
            console.error("Error clearing data:", error);
            setConfirmClear(false); // Reset on error
            window.alert("Error clearing data. Check console.");
        }
    }

    return (
        <div
            className="settings-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
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
                justifyContent: "center",
                color: "white"
            }}
        >
            <div style={{
                background: "#1a0b14",
                padding: "40px",
                border: "2px solid #ff1493",
                borderRadius: "10px",
                textAlign: "center",
                minWidth: "300px"
            }}>
                <h2 id="settings-title" style={{ color: "#ff1493", marginBottom: "30px" }}>SETTINGS</h2>

                <div style={{ marginBottom: "20px" }}>
                    <button
                        onClick={toggleMute}
                        className="btn-choice"
                        style={{ fontSize: "1.2rem", padding: "10px 20px", width: "100%" }}
                    >
                        Audio: {isMuted ? "OFF 🔇" : "ON 🔊"}
                    </button>
                </div>

                <div style={{ marginBottom: "30px" }}>
                    <button
                        id="clear-data-btn"
                        onClick={handleClearData}
                        className="btn-choice"
                        style={{
                            fontSize: "1.2rem",
                            padding: "10px 20px",
                            width: "100%",
                            background: confirmClear
                                ? "linear-gradient(90deg, #ff0000, #ff4444)"
                                : "linear-gradient(90deg, #800000, #500000)",
                            border: confirmClear ? "2px solid white" : "1px solid #ff1493",
                            fontWeight: confirmClear ? "bold" : "normal",
                            transform: confirmClear ? "scale(1.05)" : "scale(1)",
                            transition: "all 0.2s ease"
                        }}
                    >
                        {confirmClear ? "⚠️ CONFIRM DELETE?" : "Clear Data 🗑️"}
                    </button>
                    {confirmClear && (
                        <p style={{ fontSize: "0.8rem", color: "#ff4444", marginTop: "5px" }}>
                            Click again to wipe everything.
                        </p>
                    )}
                </div>

                <button
                    onClick={onClose}
                    style={{
                        background: "transparent",
                        border: "1px solid white",
                        color: "white",
                        padding: "10px 20px",
                        cursor: "pointer",
                        marginTop: "10px"
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

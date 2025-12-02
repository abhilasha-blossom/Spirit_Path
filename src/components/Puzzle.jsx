import { useState } from "react";
import { useGame } from "../context/GameContext";

export default function Puzzle({ puzzleData, onSolve }) {
    const { playSfx } = useGame();
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    function handlePress(key) {
        playSfx("click");
        if (key === "CLR") {
            setInput("");
            setError(false);
        } else if (key === "ENTER") {
            if (input === puzzleData.correctAnswer) {
                playSfx("unlock"); // Need to add this sfx or reuse something
                onSolve(true);
            } else {
                playSfx("error"); // Need to add this sfx
                setError(true);
                setInput("");
                setTimeout(() => setError(false), 1000);
            }
        } else {
            if (input.length < 4) {
                setInput(prev => prev + key);
            }
        }
    }

    return (
        <div className="puzzle-container" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.9)",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid #444",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
        }}>
            <h2 style={{ color: "white", fontFamily: "monospace" }}>SECURITY LOCK</h2>
            <div style={{
                background: "#222",
                color: error ? "red" : "#0f0",
                fontFamily: "monospace",
                fontSize: "2rem",
                padding: "10px",
                width: "100%",
                textAlign: "center",
                border: "1px solid #555",
                marginBottom: "10px"
            }}>
                {input || "----"}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <button key={num} onClick={() => handlePress(num.toString())} style={btnStyle}>
                        {num}
                    </button>
                ))}
                <button onClick={() => handlePress("CLR")} style={{ ...btnStyle, color: "red" }}>C</button>
                <button onClick={() => handlePress("0")} style={btnStyle}>0</button>
                <button onClick={() => handlePress("ENTER")} style={{ ...btnStyle, color: "#0f0" }}>E</button>
            </div>
            <button onClick={() => onSolve(false)} style={{ marginTop: "10px", background: "none", border: "none", color: "#aaa", cursor: "pointer" }}>
                Give Up (Force Open)
            </button>
        </div>
    );
}

const btnStyle = {
    padding: "15px",
    fontSize: "1.2rem",
    background: "#333",
    color: "white",
    border: "1px solid #555",
    borderRadius: "5px",
    cursor: "pointer",
    fontFamily: "monospace"
};

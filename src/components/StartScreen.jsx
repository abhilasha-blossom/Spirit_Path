import { useGame } from "../context/GameContext";
import femaleSrc from "../assets/characters/female_v3.png";
import maleSrc from "../assets/characters/male_v3.png";

export default function StartScreen() {
    const { startGame } = useGame();

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #D34E4E 0%, #CE7E5A 100%)", // Warm palette
                color: "white",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 100,
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    background: "rgba(249, 231, 178, 0.2)", // Soft cream glass
                    backdropFilter: "blur(10px)",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(206, 126, 90, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    maxWidth: "90%",
                }}
            >
                <h1
                    style={{
                        fontSize: "4rem",
                        marginBottom: "1rem",
                        background: "linear-gradient(to right, #F9E7B2, #DDC57A)", // Gold gradient text
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: "bold",
                        textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                >
                    Spirit Path
                </h1>
                <p style={{ fontSize: "1.5rem", marginBottom: "3rem", opacity: 0.95, color: "#F9E7B2" }}>
                    A journey of self-discovery awaits...
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <button
                        onClick={() => startGame("female", femaleSrc)}
                        className="btn-start"
                        style={{
                            textAlign: "center",
                            fontSize: "1.2rem",
                            padding: "1.5rem",
                            background: "#D34E4E",
                            color: "white",
                            border: "none",
                            borderRadius: "14px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 15px #F9E7B2";
                            e.currentTarget.style.transform = "scale(1.02)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        Begin as Female Traveller 🌸
                    </button>
                    <button
                        onClick={() => startGame("male", maleSrc)}
                        className="btn-start"
                        style={{
                            textAlign: "center",
                            fontSize: "1.2rem",
                            padding: "1.5rem",
                            background: "#D34E4E",
                            color: "white",
                            border: "none",
                            borderRadius: "14px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 15px #F9E7B2";
                            e.currentTarget.style.transform = "scale(1.02)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        Begin as Male Traveller 🌙
                    </button>
                </div>
            </div>
        </div>
    );
}

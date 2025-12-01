import { useGame } from "../context/GameContext";
import kyotoDeathImg from "../assets/ui/death_kanji.png";
import seoulDeathImg from "../assets/ui/seoul_death.png";
import chinaDeathImg from "../assets/ui/china_death.png";
import skullDeathImg from "../assets/ui/skull_death.png";

export default function GameOver() {
    const { resetGame, currentScene } = useGame();

    // China Path Specific Render: BLOOD EVERYWHERE
    if (currentScene && currentScene.id.includes("china")) {
        return (
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3000,
                color: "#ff0000",
                fontFamily: '"VT323", monospace',
                textAlign: "center",
                overflow: "hidden"
            }}>
                <style>
                    {`
                        @keyframes blood-screen-pulse {
                            0% { box-shadow: inset 0 0 0 transparent; background-color: black; }
                            50% { box-shadow: inset 0 0 100px 50px rgba(139, 0, 0, 0.8); background-color: #1a0000; }
                            100% { box-shadow: inset 0 0 200px 100px rgba(255, 0, 0, 0.6); background-color: #330000; }
                        }
                        @keyframes drip-fall {
                            0% { top: -10%; opacity: 1; height: 10px; }
                            100% { top: 110%; opacity: 0.8; height: 30px; }
                        }
                        @keyframes symbol-bleed {
                            0% { filter: drop-shadow(0 0 0 transparent); }
                            100% { filter: drop-shadow(0 200px 20px rgba(200, 0, 0, 0.9)); }
                        }
                        @keyframes pulse {
                            0% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(1.05); opacity: 0.8; }
                            100% { transform: scale(1); opacity: 1; }
                        }
                    `}
                </style>

                {/* Blood Background Effect */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    animation: "blood-screen-pulse 4s infinite alternate ease-in-out",
                    zIndex: -1
                }} />

                {/* Falling Blood Drops Everywhere */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} style={{
                        position: "absolute",
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 5 + 2}px`,
                        height: "10px",
                        background: "darkred",
                        borderRadius: "50%",
                        opacity: 0.7,
                        animation: `drip-fall ${Math.random() * 2 + 1}s linear infinite`,
                        animationDelay: `${Math.random() * 2}s`
                    }} />
                ))}

                <div style={{ position: "relative", marginBottom: "30px" }}>
                    <img
                        src={chinaDeathImg}
                        alt="Death"
                        style={{
                            width: "400px",
                            animation: "symbol-bleed 3s ease-out forwards",
                        }}
                    />
                </div>

                <h1 style={{ fontSize: "5rem", marginBottom: "20px", textShadow: "4px 4px 0px #800000", animation: "pulse 2s infinite" }}>GAME OVER</h1>
                <p style={{ fontSize: "2rem", color: "white", marginBottom: "40px", maxWidth: "600px" }}>Time ran out. The darkness took you.</p>
                <button onClick={resetGame} style={{ background: "transparent", border: "2px solid #ff0000", color: "#ff0000", padding: "15px 40px", fontSize: "2rem", cursor: "pointer", fontFamily: "inherit", textTransform: "uppercase", boxShadow: "0 0 15px #ff0000" }} onMouseOver={(e) => { e.target.style.background = "#ff0000"; e.target.style.color = "black"; }} onMouseOut={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#ff0000"; }}>Try Again</button>
            </div>
        );
    }

    // Default Settings (Skull)
    let deathImage = skullDeathImg;
    let animationStyle = "pulse 3s infinite ease-in-out";
    let imageWidth = "300px";

    // Path Specific Overrides
    if (currentScene && currentScene.id.includes("seoul")) {
        deathImage = seoulDeathImg;
        animationStyle = "glitch-slam 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards, glitch-twitch 2s infinite";
        imageWidth = "400px";
    } else if (currentScene && currentScene.id.includes("kyoto")) {
        deathImage = kyotoDeathImg;
        animationStyle = "impact-slam 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, blood-pulse 3s infinite ease-in-out";
        imageWidth = "400px";
    }

    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3000,
            color: "#ff0000",
            fontFamily: '"VT323", monospace',
            textAlign: "center",
            overflow: "hidden"
        }}>
            <style>
                {`
                    @keyframes impact-slam {
                        0% { transform: scale(3); opacity: 0; filter: blur(10px); }
                        20% { transform: scale(1); opacity: 1; filter: blur(0px); }
                        25% { transform: scale(1.1); }
                        30% { transform: scale(1); }
                        100% { transform: scale(1.05); }
                    }
                    @keyframes blood-pulse {
                        0% { filter: drop-shadow(0 0 5px rgba(139, 0, 0, 0.8)); }
                        50% { filter: drop-shadow(0 20px 30px rgba(255, 0, 0, 1)); }
                        100% { filter: drop-shadow(0 0 5px rgba(139, 0, 0, 0.8)); }
                    }
                    @keyframes glitch-slam {
                        0% { transform: scale(2) skew(20deg); opacity: 0; }
                        40% { transform: scale(1) skew(-10deg); opacity: 1; }
                        60% { transform: scale(1.05) skew(5deg); }
                        80% { transform: scale(0.95) skew(-5deg); }
                        100% { transform: scale(1) skew(0deg); }
                    }
                    @keyframes glitch-twitch {
                        0% { transform: translate(0); filter: hue-rotate(0deg); }
                        2% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
                        4% { transform: translate(2px, -2px); filter: hue-rotate(-90deg); }
                        6% { transform: translate(0); filter: hue-rotate(0deg); }
                        100% { transform: translate(0); }
                    }
                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.05); opacity: 0.8; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `}
            </style>

            <img
                src={deathImage}
                alt="Death"
                style={{
                    width: imageWidth,
                    marginBottom: "30px",
                    animation: animationStyle,
                }}
            />

            <h1 style={{
                fontSize: "5rem",
                marginBottom: "20px",
                textShadow: "4px 4px 0px #800000",
                animation: "pulse 2s infinite"
            }}>
                GAME OVER
            </h1>
            <p style={{
                fontSize: "2rem",
                color: "white",
                marginBottom: "40px",
                maxWidth: "600px"
            }}>
                Time ran out. The darkness took you.
            </p>
            <button
                onClick={resetGame}
                style={{
                    background: "transparent",
                    border: "2px solid #ff0000",
                    color: "#ff0000",
                    padding: "15px 40px",
                    fontSize: "2rem",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textTransform: "uppercase",
                    boxShadow: "0 0 15px #ff0000"
                }}
                onMouseOver={(e) => {
                    e.target.style.background = "#ff0000";
                    e.target.style.color = "black";
                }}
                onMouseOut={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#ff0000";
                }}
            >
                Try Again
            </button>
        </div>
    );
}

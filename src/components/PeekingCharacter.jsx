import { useGame } from "../context/GameContext";
import { useEffect, useState } from "react";

export default function PeekingCharacter() {
    const { selectedCharacter, selectedCharacterImage } = useGame();
    const [peekState, setPeekState] = useState({
        isActive: false,
        position: "bottom-right", // bottom-left, bottom-right, top, full
        rotation: 0
    });

    useEffect(() => {
        console.log("PeekingCharacter mounted. Selected:", selectedCharacter);
        if (!selectedCharacter) return;

        // Immediate peek after 1 second
        const initialTimeout = setTimeout(() => {
            console.log("Initial peek trigger");
            triggerPeek();
        }, 1000);

        // Randomly trigger peek every 3-6 seconds (Very frequent)
        const interval = setInterval(() => {
            console.log("Peeking interval tick");
            if (Math.random() > 0.2) { // 80% chance to peek
                console.log("Triggering peek!");
                triggerPeek();
            }
        }, 4000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [selectedCharacter]);

    const triggerPeek = () => {
        const rand = Math.random();
        let newPos = "bottom-right";
        let duration = 3000;

        // Adjusted probabilities:
        // 30% Top (Inverted) - Increased frequency
        // 20% Left Side (Sideways)
        // 20% Right Side (Sideways)
        // 15% Bottom Left
        // 15% Bottom Right

        if (rand < 0.30) newPos = "top";
        else if (rand < 0.50) newPos = "left-side";
        else if (rand < 0.70) newPos = "right-side";
        else if (rand < 0.85) newPos = "bottom-left";
        else newPos = "bottom-right";

        console.log("Peek triggered at:", newPos);

        setPeekState({
            isActive: true,
            position: newPos,
            rotation: 0 // Rotation handled in styles now
        });

        // Hide after duration
        setTimeout(() => {
            setPeekState(prev => ({ ...prev, isActive: false }));
        }, duration);
    };

    if (!selectedCharacter) {
        console.log("No selected character, not rendering.");
        return null;
    }

    // Dynamic Styles based on position
    const getStyles = () => {
        const baseStyle = {
            position: "absolute",
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 100,
            pointerEvents: "none",
            width: "250px",
            height: "250px",
        };

        if (peekState.position === "top") {
            return {
                ...baseStyle,
                top: peekState.isActive ? "-50px" : "-300px",
                left: "50%",
                transform: "translateX(-50%) rotate(180deg)",
            };
        }

        if (peekState.position === "left-side") {
            return {
                ...baseStyle,
                top: "50%",
                left: peekState.isActive ? "-50px" : "-300px",
                transform: "translateY(-50%) rotate(90deg)",
            };
        }

        if (peekState.position === "right-side") {
            return {
                ...baseStyle,
                top: "50%",
                right: peekState.isActive ? "-50px" : "-300px",
                transform: "translateY(-50%) rotate(-90deg)",
            };
        }

        if (peekState.position === "bottom-left") {
            return {
                ...baseStyle,
                bottom: "0",
                left: peekState.isActive ? "-50px" : "-300px",
            };
        }

        if (peekState.position === "bottom-right") {
            return {
                ...baseStyle,
                bottom: "0",
                right: peekState.isActive ? "-50px" : "-300px",
            };
        }

        return baseStyle;
    };

    return (
        <div className="peeking-char" style={getStyles()}>
            {/* Placeholder or Image */}
            {selectedCharacterImage ? (
                <>
                    <style>
                        {`
                            @keyframes creepy-breath {
                                0% { transform: scale(1); filter: brightness(0.8); }
                                50% { transform: scale(1.05); filter: brightness(1.2) drop-shadow(0 0 8px rgba(255, 0, 0, 0.6)); }
                                100% { transform: scale(1); filter: brightness(0.8); }
                            }
                        `}
                    </style>
                    <img
                        src={selectedCharacterImage}
                        alt="Peeking Character"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            animation: "creepy-breath 4s infinite ease-in-out"
                        }}
                        onError={(e) => {
                            console.error("Image failed to load:", selectedCharacterImage);
                            e.target.style.display = 'none';
                            e.target.parentNode.innerText = "👻";
                            e.target.parentNode.style.fontSize = "10rem";
                            e.target.parentNode.style.textAlign = "center";
                        }}
                    />
                </>
            ) : (
                <div style={{ fontSize: "10rem", textAlign: "center" }}>👻</div>
            )}
        </div>
    );
}

import { useGame } from "../context/GameContext";
import { useEffect, useState, useMemo } from "react";

export default function VisualEffects() {
    const { currentScene } = useGame();
    const [effect, setEffect] = useState(null);

    useEffect(() => {
        if (currentScene.id.includes("seoul")) {
            setEffect("rain");
        } else if (currentScene.id.includes("madness") || currentScene.virtue === "madness") {
            setEffect("glitch");
        } else {
            setEffect(null);
        }
    }, [currentScene]);

    // Memoize rain drops to prevent re-render jumping
    const rainDrops = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 2}s`,
            duration: `${0.5 + Math.random() * 0.5}s`
        }));
    }, []);

    if (!effect) return null;

    return (
        <div className={`visual-effect-layer ${effect}`} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 50
        }}>
            {effect === "rain" && (
                <div className="rain-container">
                    {rainDrops.map((drop) => (
                        <div key={drop.id} className="rain-drop" style={{
                            left: drop.left,
                            animationDelay: drop.delay,
                            animationDuration: drop.duration
                        }} />
                    ))}
                </div>
            )}
            {effect === "glitch" && (
                <div className="glitch-overlay" />
            )}
        </div>
    );
}

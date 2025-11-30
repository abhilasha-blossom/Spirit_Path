import { useEffect, useRef, useState } from "react";
import { useGame } from "../context/GameContext";
import { audio } from "../data/audio";

export default function AudioController() {
    const { currentScene, isMuted, toggleMute } = useGame();
    const bgmRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);

    // Initialize BGM settings
    useEffect(() => {
        bgmRef.current.loop = true;
        bgmRef.current.volume = 0.5;
    }, []);

    // Handle Mute
    useEffect(() => {
        bgmRef.current.muted = isMuted;
    }, [isMuted]);

    // Handle Scene Change & BGM Transition
    useEffect(() => {
        const nextTrack = audio.bgm[currentScene.id];

        if (nextTrack !== currentTrack) {
            // Fade out
            const fadeOut = setInterval(() => {
                if (bgmRef.current.volume > 0.05) {
                    bgmRef.current.volume -= 0.05;
                } else {
                    clearInterval(fadeOut);

                    // Switch track
                    bgmRef.current.pause();
                    if (nextTrack) {
                        bgmRef.current.src = nextTrack;
                        bgmRef.current.play().catch(e => console.log("Autoplay blocked:", e));
                        setCurrentTrack(nextTrack);

                        // Fade in
                        bgmRef.current.volume = 0;
                        const fadeIn = setInterval(() => {
                            if (bgmRef.current.volume < 0.5) {
                                bgmRef.current.volume += 0.05;
                            } else {
                                clearInterval(fadeIn);
                            }
                        }, 100);
                    }
                }
            }, 100);
        }
    }, [currentScene.id, currentTrack]);

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 1000,
            }}
        >
            <button
                onClick={toggleMute}
                style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "white",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    transition: "all 0.2s",
                }}
            >
                {isMuted ? "🔇" : "🔊"}
            </button>
        </div>
    );
}

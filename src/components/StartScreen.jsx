import { useGame } from "../context/GameContext";
import femaleSrc from "../assets/characters/female_v3.png";
import maleSrc from "../assets/characters/male_v3.png";

export default function StartScreen() {
    const { startGame } = useGame();

    return (
        <div className="start-screen-container">
            <h1 className="main-title">LOVE OR DEATH</h1>
            <p className="subtitle">Choose your obsession</p>

            <div className="character-selection">
                <div
                    className="char-card"
                    onClick={() => startGame("female", femaleSrc)}
                >
                    <div className="char-img-placeholder">🔪</div>
                    <h3>The Obsessive</h3>
                    <p>"I will never let you go..."</p>
                </div>

                <div
                    className="char-card"
                    onClick={() => startGame("male", maleSrc)}
                >
                    <div className="char-img-placeholder">⛓️</div>
                    <h3>The Possessive</h3>
                    <p>"You belong to me now."</p>
                </div>
            </div>
        </div>
    );
}


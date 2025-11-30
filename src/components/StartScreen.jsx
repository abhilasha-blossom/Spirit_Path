import { useGame } from "../context/GameContext";
import femaleSrc from "../assets/characters/female_v3.png";
import maleSrc from "../assets/characters/male_v3.png";

export default function StartScreen() {
    const { startGame } = useGame();

    return (
        <div className="start-screen-container">
            <h1 className="main-title">Spirit Path</h1>
            <p className="subtitle">Choose your destiny</p>

            <div className="character-selection">
                <div
                    className="char-card"
                    onClick={() => startGame("female", femaleSrc)}
                >
                    <div className="char-img-placeholder">🌸</div>
                    <h3>Female</h3>
                    <p>Grace & Intuition</p>
                </div>

                <div
                    className="char-card"
                    onClick={() => startGame("male", maleSrc)}
                >
                    <div className="char-img-placeholder">🌙</div>
                    <h3>Male</h3>
                    <p>Strength & Resolve</p>
                </div>
            </div>
        </div>
    );
}


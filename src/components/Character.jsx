import { useGame } from "../context/GameContext";

export default function Character({ walking }) {
  const { travellerImage } = useGame();

  if (!travellerImage) return null;

  return (
    <img
      src={travellerImage}
      alt="Traveller"
      className="character-img character-enter"
      style={{
        transform: walking ? "translateX(calc(-50% + 20px))" : "translateX(-50%)", // Subtle movement
        mixBlendMode: "multiply",
      }}
    />
  );
}

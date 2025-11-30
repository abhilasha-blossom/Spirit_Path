export default function Character({ walking }) {
  return (
    <img
      src="/assets/characters/traveller.png"
      alt="Traveller"
      style={{
        height: "200px",
        transition: "transform 0.7s ease",
        transform: walking ? "translateX(120px)" : "translateX(0px)",
      }}
    />
  );
}

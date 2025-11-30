export default function Sakura() {
  const petals = Array.from({ length: 20 });

  return (
    <>
      {petals.map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: Math.random() * 100 + "vw",
            animationDelay: Math.random() * 5 + "s",
            animationDuration: 6 + Math.random() * 8 + "s",
          }}
        />
      ))}
    </>
  );
}

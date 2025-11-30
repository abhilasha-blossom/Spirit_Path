export default function Fireflies() {
  const fireflies = Array.from({ length: 25 });

  return (
    <>
      {fireflies.map((_, i) => (
        <div
          key={i}
          className="firefly"
          style={{
            left: Math.random() * 100 + "vw",
            animationDelay: Math.random() * 5 + "s",
            animationDuration: 4 + Math.random() * 6 + "s",
          }}
        />
      ))}
    </>
  );
}

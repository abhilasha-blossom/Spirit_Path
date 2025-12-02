import { useGame } from "../context/GameContext";

export default function SpiritLog({ onClose }) {
    const { collectedItems } = useGame();

    const loreData = {
        "Key Card": "ID: 8821. Name: [REDACTED]. Clearance: Level 4. 'They kept me in the basement for weeks. I hear scratching in the walls.'",
        "Fox Mask": "A mask used in forbidden rituals. The inside is stained with something dark. 'The fox doesn't grant wishes. It trades them.'",
        "Jade Comb": "A comb made of bone, not jade. 'She combed her hair until the scalp bled. She wanted to be pretty for Him.'",
        "Bloody Diary": "Property of Patient 1031. 'I found the code. It's my birthday. But I can't leave. The moon is watching me.'",
    };

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.95)",
            zIndex: 3000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
            color: "white",
            overflowY: "auto"
        }}>
            <h1 style={{ color: "#ff1493", fontFamily: "var(--font-main)", fontSize: "3rem", marginBottom: "20px" }}>SPIRIT LOG</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", width: "100%", maxWidth: "1000px" }}>
                {collectedItems.length === 0 ? (
                    <p style={{ textAlign: "center", width: "100%", color: "#888", fontSize: "1.5rem" }}>No items collected yet.</p>
                ) : (
                    collectedItems.map((item, index) => (
                        <div key={index} style={{
                            border: "1px solid #444",
                            padding: "20px",
                            background: "#111",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(255, 20, 147, 0.2)"
                        }}>
                            <h3 style={{ color: "#ff69b4", marginTop: 0 }}>{item}</h3>
                            <p style={{ fontStyle: "italic", color: "#ccc", lineHeight: "1.4" }}>
                                {loreData[item] || "The spirits are silent about this object."}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <button
                onClick={onClose}
                style={{
                    marginTop: "40px",
                    padding: "10px 30px",
                    background: "transparent",
                    border: "2px solid white",
                    color: "white",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-main)"
                }}
            >
                CLOSE
            </button>
        </div>
    );
}

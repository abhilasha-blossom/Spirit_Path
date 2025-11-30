import introForest from "../assets/backgrounds/intro_forest.png";
import seoulMarket from "../assets/backgrounds/seoul_market.png";
import kyotoShrine from "../assets/backgrounds/kyoto_shrine.png";
import chinaLake from "../assets/backgrounds/china_lake.png";

export const virtues = ["strength", "harmony", "affection", "wisdom", "loyalty"];

export const scenes = {
  intro_forest: {
    id: "intro_forest",
    background: introForest,
    title: "The Spirit Path",
    text: `You stand at the edge of a bioluminescent forest. The air hums with ancient energy.\nFireflies dance around you, waiting for you to take the first step.`,
    choices: [
      {
        label: "Step onto the mossy path 🌿",
        next: "path_choice",
        virtue: "strength",
      },
    ],
  },

  path_choice: {
    id: "path_choice",
    background: introForest,
    title: "Crossroads of Realms",
    text: `Three distant lights call you from different lands.`,
    choices: [
      {
        label: "Follow the neon hum of Seoul Night Market 🌙",
        next: "seoul_market",
        virtue: "strength",
      },
      {
        label: "Follow the soft lanterns of Kyoto Shrine 🎐",
        next: "kyoto_shrine",
        virtue: "wisdom",
      },
      {
        label: "Follow the reflection of a Chinese Lantern Lake 🏮",
        next: "china_lake",
        virtue: "harmony",
      },
    ],
  },

  seoul_market: {
    id: "seoul_market",
    background: seoulMarket,
    title: "Seoul Night Market",
    text: `Music, street food and neon lights dance around you.\nA vendor smiles: "처음 왔어요? (First time here?)"`,
    choices: [
      {
        label: "Order Tteokbokki (Spicy, bold) 🔥",
        next: "seoul_karaoke",
        virtue: "strength",
      },
      {
        label: "Order Hotteok (Warm, sweet) 🍯",
        next: "seoul_karaoke",
        virtue: "affection",
      },
      {
        label: "Order Kimbap (Balanced, classic) 🍙",
        next: "seoul_karaoke",
        virtue: "wisdom",
      },
    ],
  },

  seoul_karaoke: {
    id: "seoul_karaoke",
    background: seoulMarket,
    title: "Karaoke Glow",
    text: `A glowing karaoke booth waits.\n"What kind of song will you sing?"`,
    choices: [
      {
        label: "Powerful K-rock song 🎸",
        next: "preview_ending",
        virtue: "strength",
      },
      {
        label: "Soft emotional ballad 💖",
        next: "preview_ending",
        virtue: "affection",
      },
      {
        label: "Fun K-pop dance track 💃",
        next: "preview_ending",
        virtue: "harmony",
      },
    ],
  },

  preview_ending: {
    id: "preview_ending",
    background: introForest,
    title: "A Presence Watching",
    text: `Something ancient watches from the trees... not hostile, but curious.`,
    choices: [
      {
        label: "End demo (calculate spirit)",
        next: "ending_demo",
        virtue: null,
      },
    ],
  },

  ending_demo: {
    id: "ending_demo",
    background: introForest,
    title: "Which spirit follows you?",
    isEnding: true,
    text: `The full spirit selection will appear here.\nThis is only a demo ending.`,
    choices: [
      {
        label: "Restart journey",
        next: "intro_forest",
        virtue: null,
      },
    ],
  },

  // --- Kyoto Path ---
  kyoto_shrine: {
    id: "kyoto_shrine",
    background: kyotoShrine,
    title: "Fushimi Inari Shrine",
    text: `Thousands of vermilion torii gates wind up the mountain.\nA white fox (Kitsune) watches you from the shadows.`,
    choices: [
      {
        label: "Bow respectfully to the spirit 🙇",
        next: "kyoto_ritual",
        virtue: "harmony",
      },
      {
        label: "Ask the fox for guidance 🦊",
        next: "kyoto_ritual",
        virtue: "wisdom",
      },
    ],
  },

  kyoto_ritual: {
    id: "kyoto_ritual",
    background: kyotoShrine,
    title: "The Sacred Ritual",
    text: `The fox leads you to an ancient altar where incense burns.\n"To know the path, you must know yourself."`,
    choices: [
      {
        label: "Meditate on your past actions 🧘",
        next: "preview_ending",
        virtue: "wisdom",
      },
      {
        label: "Offer a prayer for your loved ones 🙏",
        next: "preview_ending",
        virtue: "affection",
      },
      {
        label: "Vow to protect this sacred place ⚔️",
        next: "preview_ending",
        virtue: "loyalty",
      },
    ],
  },

  // --- China Path ---
  china_lake: {
    id: "china_lake",
    background: chinaLake,
    title: "Moonlit Lantern Lake",
    text: `The full moon reflects on the calm water, disturbed only by koi fish.\nA stone dragon statue seems to hum with energy.`,
    choices: [
      {
        label: "Light a floating lantern 🏮",
        next: "china_riddle",
        virtue: "harmony",
      },
      {
        label: "Study the dragon's inscriptions 📜",
        next: "china_riddle",
        virtue: "wisdom",
      },
    ],
  },

  china_riddle: {
    id: "china_riddle",
    background: chinaLake,
    title: "The Dragon's Riddle",
    text: `The dragon speaks in a voice like grinding stones:\n"I have no voice, but I tell stories. I have no wings, but I fly. What am I?"`,
    choices: [
      {
        label: "A Book 📖",
        next: "preview_ending",
        virtue: "wisdom",
      },
      {
        label: "A Lantern 🏮",
        next: "preview_ending",
        virtue: "harmony",
      },
      {
        label: "A Spirit 👻",
        next: "preview_ending",
        virtue: "strength",
      },
    ],
  },
};

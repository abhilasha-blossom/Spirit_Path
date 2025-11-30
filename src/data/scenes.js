export const virtues = ["strength", "harmony", "affection", "wisdom", "loyalty"];

export const scenes = {
  intro_forest: {
    id: "intro_forest",
    background: "/assets/backgrounds/intro_forest.jpg",
    title: "Whispering Forest",
    text: `Mist curls around ancient trees as fireflies glow softly.\nA wooden sign reads: "All journeys begin with a single choice."`,
    choices: [
      {
        label: "Step onto the Spirit Path",
        next: "path_choice",
        virtue: null,
      },
    ],
  },

  path_choice: {
    id: "path_choice",
    background: "/assets/backgrounds/intro_forest.jpg",
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
        next: "placeholder_kyoto",
        virtue: "wisdom",
      },
      {
        label: "Follow the reflection of a Chinese Lantern Lake 🏮",
        next: "placeholder_china",
        virtue: "harmony",
      },
    ],
  },

  seoul_market: {
    id: "seoul_market",
    background: "/assets/backgrounds/seoul_market.jpg",
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
    background: "/assets/backgrounds/seoul_market.jpg",
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
    background: "/assets/backgrounds/intro_forest.jpg",
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
    background: "/assets/backgrounds/intro_forest.jpg",
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

  placeholder_kyoto: {
    id: "placeholder_kyoto",
    background: "/assets/backgrounds/intro_forest.jpg",
    title: "Kyoto Shrine (Coming soon)",
    text: "This path will lead to Shrine Festivals & Kitsune masks.",
    choices: [{ label: "Return", next: "path_choice", virtue: null }],
  },

  placeholder_china: {
    id: "placeholder_china",
    background: "/assets/backgrounds/intro_forest.jpg",
    title: "Lantern Lake (Coming soon)",
    text: "This path will lead to Lantern riddles & Dragon stories.",
    choices: [{ label: "Return", next: "path_choice", virtue: null }],
  },
};

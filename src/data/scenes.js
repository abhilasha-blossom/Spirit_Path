import introForest from "../assets/backgrounds/intro_forest.png";
import seoulMarket from "../assets/backgrounds/seoul_market.png";
import kyotoShrine from "../assets/backgrounds/kyoto_shrine.png";
import chinaLake from "../assets/backgrounds/china_lake.png";

export const virtues = ["obsession", "survival", "madness", "submission", "dominance"];

export const scenes = {
  intro_forest: {
    id: "intro_forest",
    background: introForest,
    title: "The Locked Room",
    text: `You wake up in a dark room. The air smells of rusted iron and sweet perfume.\nA note is pinned to your chest with a knife: "Don't leave me."`,
    choices: [
      {
        label: "Pull the knife out 🔪",
        next: "path_choice",
        virtue: "survival",
      },
    ],
  },

  path_choice: {
    id: "path_choice",
    background: introForest,
    title: "Escape Route",
    text: `The door is unlocked, but the hallway stretches into three distorted paths.\nEach one feels like a trap.`,
    choices: [
      {
        label: "Run towards the neon lights (Seoul) 🌃",
        next: "seoul_market",
        virtue: "madness",
      },
      {
        label: "Hide in the old shrine (Kyoto) ⛩️",
        next: "kyoto_shrine",
        virtue: "submission",
      },
      {
        label: "Follow the blood trail to the lake (China) 🩸",
        next: "china_lake",
        virtue: "obsession",
      },
    ],
  },

  // --- Seoul Path ---
  seoul_market: {
    id: "seoul_market",
    background: seoulMarket,
    title: "Midnight Stalker Alley",
    text: `The market is empty, but the screens are watching you.\nA figure in a mask blocks your path. "Why are you running, darling?"`,
    choices: [
      {
        label: "Scream for help 😱",
        next: "seoul_subway",
        virtue: "survival",
      },
      {
        label: "Ask who they are ❓",
        next: "seoul_subway",
        virtue: "obsession",
      },
      {
        label: "Attack them ⚔️",
        next: "seoul_subway",
        virtue: "dominance",
      },
    ],
  },

  seoul_subway: {
    id: "seoul_subway",
    background: seoulMarket,
    title: "Ghost Train",
    text: `You stumble into a subway station. The train arrives, but it's empty.\nReflections in the window show someone standing behind you.`,
    choices: [
      {
        label: "Don't turn around 🚫",
        next: "seoul_rooftop",
        virtue: "submission",
      },
      {
        label: "Confront the reflection 🪞",
        next: "seoul_rooftop",
        virtue: "madness",
      },
    ],
  },

  seoul_rooftop: {
    id: "seoul_rooftop",
    background: seoulMarket,
    title: "Neon Rain",
    text: `The train stops at a rooftop. Rain falls like static.\nThey are waiting for you at the edge. "Jump with me, or stay with me."`,
    choices: [
      {
        label: "Push them off ✋",
        next: "calculate_ending",
        virtue: "dominance",
      },
      {
        label: "Take their hand 🤝",
        next: "calculate_ending",
        virtue: "obsession",
      },
      {
        label: "Jump alone 🕊️",
        next: "calculate_ending",
        virtue: "survival",
      },
    ],
  },

  // --- Kyoto Path ---
  kyoto_shrine: {
    id: "kyoto_shrine",
    background: kyotoShrine,
    title: "Cursed Shrine",
    text: `The torii gates are painted with fresh blood.\nA fox with too many eyes watches you from the shadows.`,
    choices: [
      {
        label: "Pray for protection 🙏",
        next: "kyoto_forest",
        virtue: "submission",
      },
      {
        label: "Stare back at the fox 👁️",
        next: "kyoto_forest",
        virtue: "madness",
      },
    ],
  },

  kyoto_forest: {
    id: "kyoto_forest",
    background: kyotoShrine,
    title: "Whispering Bamboo",
    text: `The bamboo stalks whisper your name. You find a mask on the ground.\nIt looks exactly like your face.`,
    choices: [
      {
        label: "Put it on 🎭",
        next: "kyoto_temple",
        virtue: "madness",
      },
      {
        label: "Break it 🔨",
        next: "kyoto_temple",
        virtue: "survival",
      },
    ],
  },

  kyoto_temple: {
    id: "kyoto_temple",
    background: kyotoShrine,
    title: "The Fox's Wedding",
    text: `You reach the inner sanctum. The fox deity is waiting in human form.\n"Be my spouse, or be my dinner."`,
    choices: [
      {
        label: "Bow down 🙇",
        next: "calculate_ending",
        virtue: "submission",
      },
      {
        label: "Demand power ⚡",
        next: "calculate_ending",
        virtue: "dominance",
      },
      {
        label: "Kiss them 💋",
        next: "calculate_ending",
        virtue: "obsession",
      },
    ],
  },

  // --- China Path ---
  china_lake: {
    id: "china_lake",
    background: chinaLake,
    title: "Lake of Tears",
    text: `The lake is filled with red water. Hands reach out from the depths.\nA dragon statue weeps black tears.`,
    choices: [
      {
        label: "Touch the water 🌊",
        next: "china_wedding",
        virtue: "obsession",
      },
      {
        label: "Inspect the statue 🐉",
        next: "china_wedding",
        virtue: "madness",
      },
    ],
  },

  china_wedding: {
    id: "china_wedding",
    background: chinaLake,
    title: "Ghost Wedding",
    text: `Paper money falls from the sky. A palanquin arrives.\nInside is a corpse wearing wedding robes... holding a picture of you.`,
    choices: [
      {
        label: "Get in the palanquin 🏮",
        next: "china_lair",
        virtue: "submission",
      },
      {
        label: "Burn it 🔥",
        next: "china_lair",
        virtue: "dominance",
      },
    ],
  },

  china_lair: {
    id: "china_lair",
    background: chinaLake,
    title: "Dragon's Hoard",
    text: `You fall into a cave of bones. The Dragon awakens.\n"I kill what I love, so I never have to lose it. Are you ready to be loved?"`,
    choices: [
      {
        label: "Run for your life 🏃",
        next: "calculate_ending",
        virtue: "survival",
      },
      {
        label: "Say 'I love you' ❤️",
        next: "calculate_ending",
        virtue: "obsession",
      },
      {
        label: "Laugh at the beast 😂",
        next: "calculate_ending",
        virtue: "madness",
      },
    ],
  },

  // --- Endings ---
  ending_survival: {
    id: "ending_survival",
    background: introForest,
    title: "SURVIVED",
    isEnding: true,
    text: "You escaped with your life, but your soul was left behind.\nEvery shadow whispers their name.",
    choices: [{ label: "Play Again", next: "intro_forest", virtue: null }],
  },
  ending_obsession: {
    id: "ending_obsession",
    background: seoulMarket,
    title: "ETERNAL LOVE",
    isEnding: true,
    text: "You didn't want to leave. You belong to them now.\nForever and ever and ever.",
    choices: [{ label: "Play Again", next: "intro_forest", virtue: null }],
  },
  ending_madness: {
    id: "ending_madness",
    background: chinaLake,
    title: "BROKEN MIND",
    isEnding: true,
    text: "The world makes no sense anymore. Only their voice is real.\nYou laugh as the darkness takes you.",
    choices: [{ label: "Play Again", next: "intro_forest", virtue: null }],
  },
  ending_submission: {
    id: "ending_submission",
    background: kyotoShrine,
    title: "THE PET",
    isEnding: true,
    text: "You stopped fighting. It's warm in their cage.\nGood pet. Good toy.",
    choices: [{ label: "Play Again", next: "intro_forest", virtue: null }],
  },
  ending_dominance: {
    id: "ending_dominance",
    background: introForest,
    title: "THE NEW MASTER",
    isEnding: true,
    text: "You killed the monster and took its throne.\nNow YOU are the one they fear.",
    choices: [{ label: "Play Again", next: "intro_forest", virtue: null }],
  },
};

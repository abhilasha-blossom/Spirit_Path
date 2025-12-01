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

  seoul_market: {
    id: "seoul_market",
    background: seoulMarket,
    title: "Midnight Stalker Alley",
    text: `The market is empty, but the screens are watching you.\nA figure in a mask blocks your path. "Why are you running, darling?"`,
    choices: [
      {
        label: "Scream for help 😱",
        next: "seoul_karaoke",
        virtue: "survival",
      },
      {
        label: "Ask who they are ❓",
        next: "seoul_karaoke",
        virtue: "obsession",
      },
      {
        label: "Attack them ⚔️",
        next: "seoul_karaoke",
        virtue: "dominance",
      },
    ],
  },

  seoul_karaoke: {
    id: "seoul_karaoke",
    background: seoulMarket,
    title: "Karaoke of Screams",
    text: `They drag you into a karaoke booth. The song playing is a recording of your own voice sleeping.\n"Sing for me, or stay here forever."`,
    choices: [
      {
        label: "Sing a love song 🎤",
        next: "preview_ending",
        virtue: "submission",
      },
      {
        label: "Smash the screen 🔨",
        next: "preview_ending",
        virtue: "dominance",
      },
      {
        label: "Beg for mercy 😭",
        next: "preview_ending",
        virtue: "survival",
      },
    ],
  },

  preview_ending: {
    id: "preview_ending",
    background: introForest,
    title: "He is Watching",
    text: `The shadows lengthen. You feel cold breath on your neck.\n"I found you."`,
    choices: [
      {
        label: "Accept your fate (End Demo)",
        next: "ending_demo",
        virtue: null,
      },
    ],
  },

  ending_demo: {
    id: "ending_demo",
    background: introForest,
    title: "Game Over... or Beginning?",
    isEnding: true,
    text: `The full nightmare continues later.\nWill you survive their love?`,
    choices: [
      {
        label: "Try to escape again",
        next: "intro_forest",
        virtue: null,
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
        next: "kyoto_ritual",
        virtue: "submission",
      },
      {
        label: "Stare back at the fox 👁️",
        next: "kyoto_ritual",
        virtue: "madness",
      },
    ],
  },

  kyoto_ritual: {
    id: "kyoto_ritual",
    background: kyotoShrine,
    title: "The Blood Ritual",
    text: `The fox transforms into a beautiful man with a twisted smile.\n"Your soul is so pretty. Let me keep it."`,
    choices: [
      {
        label: "Offer your hand 🤝",
        next: "preview_ending",
        virtue: "submission",
      },
      {
        label: "Run away 🏃",
        next: "preview_ending",
        virtue: "survival",
      },
      {
        label: "Laugh hysterically 😂",
        next: "preview_ending",
        virtue: "madness",
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
        next: "china_riddle",
        virtue: "obsession",
      },
      {
        label: "Inspect the statue 🐉",
        next: "china_riddle",
        virtue: "madness",
      },
    ],
  },

  china_riddle: {
    id: "china_riddle",
    background: chinaLake,
    title: "The Dragon's Curse",
    text: `The statue whispers:\n"I kill what I love, so I never have to lose it. What am I?"`,
    choices: [
      {
        label: "A Monster 👹",
        next: "preview_ending",
        virtue: "survival",
      },
      {
        label: "A Lover 💔",
        next: "preview_ending",
        virtue: "obsession",
      },
      {
        label: "Me 🪞",
        next: "preview_ending",
        virtue: "madness",
      },
    ],
  },
};

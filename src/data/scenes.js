import introForest from "../assets/backgrounds/intro_forest.png";
import seoulMarket from "../assets/backgrounds/seoul_market.png";
import kyotoShrine from "../assets/backgrounds/kyoto_shrine.png";
import chinaLake from "../assets/backgrounds/china_lake.png";
import asylumBg from "../assets/backgrounds/asylum.jpg";

export const virtues = ["obsession", "survival", "madness", "submission", "dominance"];

export const scenes = {
  intro_forest: {
    id: "intro_forest",
    background: introForest,
    title: "The Locked Room",
    text: `You wake up in a dark room. The air smells of rusted iron and sweet perfume.\nA note is pinned to your chest with a knife: "Don't leave me."`,
    timer: 10,
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
    timer: 15,
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
      {
        label: "Enter the Abandoned Asylum 🏥",
        next: "asylum_entrance",
        virtue: "madness",
        sanityCost: 10,
      },
    ],
  },

  // --- Seoul Path ---
  seoul_market: {
    id: "seoul_market",
    background: seoulMarket,
    title: "Midnight Stalker Alley",
    text: `The market is empty, but the screens are watching you.\nA figure in a mask blocks your path. "Why are you running, darling?"`,
    timer: 10, // Added Timer
    choices: [
      {
        label: "Scream for help 😱",
        next: "seoul_chase", // New Scene
        virtue: "survival",
      },
      {
        label: "Ask who they are ❓",
        next: "seoul_chase", // New Scene
        virtue: "obsession",
        sanityCost: 5,
      },
      {
        label: "Attack them ⚔️",
        next: "seoul_chase", // New Scene
        virtue: "dominance",
      },
    ],
  },

  // New Scene: Seoul Chase
  seoul_chase: {
    id: "seoul_chase",
    background: seoulMarket,
    title: "Neon Pursuit",
    text: `You run through the crowded streets. The faces around you are blurring.\nAre they people? Or just static?`,
    timer: 8,
    choices: [
      {
        label: "Hide in a dumpster 🗑️",
        next: "seoul_alley",
        virtue: "submission",
      },
      {
        label: "Keep running 🏃",
        next: "seoul_alley",
        virtue: "survival",
      },
    ],
  },

  // New Scene
  seoul_alley: {
    id: "seoul_alley",
    background: seoulMarket,
    title: "Neon Labyrinth",
    text: `You duck into a side alley. It's a dead end, but you find a dropped ID card.\nIt has YOUR face on it.`,
    timer: 8,
    choices: [
      {
        label: "Pick it up (Item: Key Card) 💳",
        next: "seoul_subway",
        virtue: "obsession",
        item: "Key Card" // Adds item
      },
      {
        label: "Leave it and run 🏃",
        next: "seoul_subway",
        virtue: "survival",
      },
    ],
  },

  seoul_subway: {
    id: "seoul_subway",
    background: seoulMarket,
    title: "Ghost Train",
    text: `You stumble into a subway station. The train arrives, but it's empty.\nReflections in the window show someone standing behind you.`,
    timer: 10,
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
    timer: 15,
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
    timer: 12, // Added Timer
    choices: [
      {
        label: "Pray for protection 🙏",
        next: "kyoto_garden", // New Scene
        virtue: "submission",
      },
      {
        label: "Stare back at the fox 👁️",
        next: "kyoto_garden", // New Scene
        virtue: "madness",
        sanityCost: 5,
      },
    ],
  },

  // New Scene: Kyoto Garden
  kyoto_garden: {
    id: "kyoto_garden",
    background: kyotoShrine,
    title: "Stone Garden",
    text: `The rocks in the garden are arranged like graves. You hear weeping coming from the ground.`,
    timer: 10,
    choices: [
      {
        label: "Dig up the sound ⛏️",
        next: "kyoto_bridge",
        virtue: "madness",
        sanityCost: 10,
      },
      {
        label: "Walk away slowly 🚶",
        next: "kyoto_bridge",
        virtue: "survival",
      },
    ],
  },

  // New Scene
  kyoto_bridge: {
    id: "kyoto_bridge",
    background: kyotoShrine,
    title: "Bridge of Spirits",
    text: `You cross a red bridge. The fog clears to reveal a broken mask on the railing.\nIt whispers to you.`,
    timer: 10,
    choices: [
      {
        label: "Take the mask (Item: Fox Mask) 🎭",
        next: "kyoto_forest",
        virtue: "madness",
        item: "Fox Mask"
      },
      {
        label: "Kick it into the water 🌊",
        next: "kyoto_forest",
        virtue: "dominance",
      },
    ],
  },

  kyoto_forest: {
    id: "kyoto_forest",
    background: kyotoShrine,
    title: "Whispering Bamboo",
    text: `The bamboo stalks whisper your name. You find a mask on the ground.\nIt looks exactly like your face.`,
    timer: 10,
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
    timer: 15,
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
    timer: 15, // Added Timer
    choices: [
      {
        label: "Touch the water 🌊",
        next: "china_market", // New Scene
        virtue: "obsession",
      },
      {
        label: "Inspect the statue 🐉",
        next: "china_market", // New Scene
        virtue: "madness",
        sanityCost: 5,
      },
    ],
  },

  // New Scene: China Market
  china_market: {
    id: "china_market",
    background: chinaLake,
    title: "Ghost Market",
    text: `Merchants with no faces are selling memories in jars. One jar has your name on it.`,
    timer: 12,
    choices: [
      {
        label: "Steal the jar 🏺",
        next: "china_palace",
        virtue: "dominance",
      },
      {
        label: "Buy it with your blood 🩸",
        next: "china_palace",
        virtue: "submission",
        sanityCost: 10,
      },
    ],
  },

  // New Scene
  china_palace: {
    id: "china_palace",
    background: chinaLake,
    title: "Forbidden Palace",
    text: `The gates of a submerged palace open. A jade comb floats towards you.\nIt feels warm, like living flesh.`,
    timer: 10,
    choices: [
      {
        label: "Keep the comb (Item: Jade Comb) 🪮",
        next: "china_wedding",
        virtue: "submission",
        item: "Jade Comb"
      },
      {
        label: "Break it in half 💔",
        next: "china_wedding",
        virtue: "dominance",
      },
    ],
  },

  china_wedding: {
    id: "china_wedding",
    background: chinaLake,
    title: "Ghost Wedding",
    text: `Paper money falls from the sky. A palanquin arrives.\nInside is a corpse wearing wedding robes... holding a picture of you.`,
    timer: 10,
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
    timer: 20,
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
        sanityCost: 20,
      },
    ],
  },

  // --- Asylum Path (New) ---
  asylum_entrance: {
    id: "asylum_entrance",
    background: asylumBg,
    title: "The Abandoned Asylum",
    text: `The gates are rusted shut. A sign reads: "NO ONE LEAVES".\nYou hear children singing a nursery rhyme from inside.`,
    timer: 15,
    choices: [
      {
        label: "Climb the fence 🧗",
        next: "asylum_ward",
        virtue: "survival",
      },
      {
        label: "Sing along 🎵",
        next: "asylum_ward",
        virtue: "madness",
        sanityCost: 10,
      },
    ],
  },

  asylum_ward: {
    id: "asylum_ward",
    background: asylumBg,
    title: "Rotting Ward",
    text: `Beds line the walls, each with a stain in the shape of a person.\nA locked door blocks the way to the basement. It needs a code.`,
    timer: 20,
    puzzle: {
      correctAnswer: "1031",
      next: "asylum_basement",
      failNext: "asylum_roof", // Fail leads to roof (bad ending path)
    },
    choices: [
      {
        label: "Search for the code (Item: Bloody Diary) 📖",
        next: "asylum_ward", // Loop back to give hint? Or just give item and let them try puzzle
        virtue: "obsession",
        item: "Bloody Diary",
        textOverride: "You found a diary. The last entry says: 'Halloween... 10/31... that's when they died.'",
      },
      {
        label: "Smash the door 🔨",
        next: "asylum_roof",
        virtue: "dominance",
      },
    ],
  },

  asylum_basement: {
    id: "asylum_basement",
    background: asylumBg,
    title: "The Truth",
    text: `You found the secret lab. Jars of eyes line the shelves.\nIn the center is a ritual circle.`,
    timer: 15,
    choices: [
      {
        label: "Read the files 📂",
        next: "asylum_roof",
        virtue: "obsession",
      },
      {
        label: "Burn it all 🔥",
        next: "asylum_roof",
        virtue: "dominance",
      },
    ],
  },

  asylum_roof: {
    id: "asylum_roof",
    background: asylumBg,
    title: "The Final Jump",
    text: `You reach the roof. The moon is bleeding.\nThe entities from all paths surround you.`,
    timer: 20,
    choices: [
      {
        label: "Jump 🕊️",
        next: "calculate_ending",
        virtue: "survival",
      },
      {
        label: "Perform the Ritual (Requires: All Items) 🔮",
        next: "special_ritual",
        virtue: "madness",
        requiredItems: ["Key Card", "Fox Mask", "Jade Comb", "Bloody Diary"],
      },
    ],
  },

  // --- Special Path ---
  special_ritual: {
    id: "special_ritual",
    background: asylumBg,
    title: "The Awakening",
    text: `You place the items in the circle. The sky cracks open.\nYou are not the victim. You are the GOD of this world.`,
    timer: 10,
    choices: [
      {
        label: "Wake Up 👁️",
        next: "special_ending",
        virtue: "dominance",
      },
    ],
  },

  special_ending: {
    id: "special_ending",
    background: "",
    title: "TRUE TRUTH",
    isEnding: true,
    text: "You woke up in your bed. It was just a game.\nBut why is the 'Fox Mask' sitting on your nightstand?",
    choices: [{ label: "Play Again", next: "intro_forest", virtue: null }],
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

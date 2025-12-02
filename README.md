<h1 align="center" style="font-size: 48px; color: #C86BFF; font-weight: 800;">
👻 SPIRIT PATH — An Aesthetic Interactive Story Game 🩸 
</h1>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=FF6D1F&text=🩸%20Spirit%20Path%20%20👻&fontColor=222222&fontSize=45&animation=twinkling" />
</p>

<p align="center" style="font-size: 18px;">
<b>A dark, cinematic interactive journey shaped by your choices, emotions & virtues.</b><br/>
🌌 Dark Folklore • 🩸 Psychological Horror Elements • 🎭 Multiple Endings • 💮 Glitch Aesthetic
</p>

<br/><br/>

<h2 style="color:#E38FFF;">🌸 About the Game</h2>

**Spirit Path** has evolved into a visually immersive, psychological interactive fiction. It blends traditional East Asian folklore with a modern, dark, and glitchy aesthetic (inspired by "Dating Killmulator" vibes).

Your choices don't just change the story—they alter the world around you.

<br/><br/>

<h2 style="color:#E38FFF;">✨ Key Features (Implemented)</h2>

### 🎨 Visual Immersion
*   **Seoul Path (The Glitch)**: Experience "Neon Rain" and an "Obsessive Heartbeat" overlay that pulses with tension.
*   **China Path (The Blood)**: Witness a dramatic "Blood Shatter" cinematic effect during critical moments.
*   **Kyoto Path (The Mist)**: Navigate through "Shadow Fog" and glowing "Golden Fireflies".
*   **Dynamic Atmosphere**: Backgrounds darken, glitches intensify, and rain falls based on the narrative arc.

### 🛠️ Core Systems
*   **Save & Load System**: Robust local persistence. Your progress is safe, even if you close the browser.
*   **Endings Gallery**: A persistent collection of unlocked endings. Can you find them all?
*   **Inventory System**: Collect items (like the "Old Key") that unlock new paths later in the story.
*   **Virtue Tracking**: Your decisions secretly build stats in Survival, Obsession, Madness, Submission, and Dominance.
*   **Timed Choices**: High-stakes decisions with a visual countdown timer.

### ⚙️ UX & Polish
*   **Settings Menu**: Toggle Audio/SFX and a robust "Clear Data" option with 2-step confirmation.
*   **Responsive UI**: Glassmorphism design that adapts to desktop and mobile.
*   **Accessibility**: Screen-reader friendly modals and keyboard-accessible menus.
*   **Safety**: Error boundaries ensure your save data is never corrupted.

<br/><br/>

<h2 style="color:#E38FFF;">🎭 Virtue Endings</h2>

Your hidden choices determine your psychological fate. There are no "good" or "bad" endings, only consequences:<br/><br/>

<table>
<tr><th>Virtue</th><th>Ending Title</th><th>Theme</th></tr>
<tr><td>Survival (生存)</td><td><b>SURVIVED</b></td><td>Escaping with your life, but losing your soul.</td></tr>
<tr><td>Obsession (執着)</td><td><b>ETERNAL LOVE</b></td><td>Becoming one with the darkness forever.</td></tr>
<tr><td>Madness (狂気)</td><td><b>BROKEN MIND</b></td><td>When reality fractures and only the void remains.</td></tr>
<tr><td>Submission (服従)</td><td><b>THE PET</b></td><td>Finding comfort in the cage.</td></tr>
<tr><td>Dominance (支配)</td><td><b>THE NEW MASTER</b></td><td>Killing the monster to take its throne.</td></tr>
</table>

<br/><br/>

<h2 style="color:#E38FFF;">🧠 Installation</h2>

```bash
# Clone the repository
git clone https://github.com/abhilasha-blossom/Spirit_Path.git

# Navigate to directory
cd Spirit_Path

# Install dependencies
npm install

# Run the development server
npm run dev
```

<br/><br/>

<h2 style="color:#E38FFF;">📁 Project Structure</h2>

```
🌸 src
┣ 🎀 assets
┃ ┣ 🏞 backgrounds  (Darkened/Atmospheric images)
┃ ┗ 🧚 characters   (Spirit avatars)
┣ 💫 components
┃ ┣ 🎭 Scene.jsx        (Main game loop & logic)
┃ ┣ 🏆 Gallery.jsx      (Unlockable endings modal)
┃ ┣ ⚙️ Settings.jsx     (Audio & Data management)
┃ ┣ ✨ VisualEffects.jsx (Rain, Glitch, Heartbeat overlays)
┃ ┣ ⏳ Timer.jsx        (Countdown mechanic)
┃ ┗ ☠️ GameOver.jsx     (Bad ending screens)
┣ 🔮 context
┃ ┗ 🧠 GameContext.jsx  (Global state & Save system)
┣ 📜 data
┃ ┣ 📖 scenes.js        (Narrative branching logic)
┃ ┗ 🎵 audio.js         (SFX mappings)
┗ 🎨 styles.css         (Pure CSS animations & variables)
```

<br/><br/>

<h2 style="color:#E38FFF;">💫 Tech Stack</h2>

*   **Frontend**: React 18 + Vite
*   **State Management**: React Context API
*   **Styling**: Pure CSS3 (Variables, Keyframe Animations, Flexbox/Grid)
*   **Persistence**: LocalStorage API (with JSON error handling)

<br/><br/>

<h2 style="color:#E38FFF;">🤍 Creator</h2>

Made with love by <b>Abhilasha 🌸</b><br/>
<i>Turning imagination into interactive worlds.</i>

<br/>
If you enjoy the project, please ⭐ star the repository — it really motivates!

<br/><br/>

<h2 style="color:#E38FFF;">📝 License</h2>
This project is currently <b>personal & experimental</b>.

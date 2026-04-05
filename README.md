# 🍿 Entertainment Hub Chrome Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://chrome.google.com/webstore/)
[![Manifest V3](https://img.shields.io/badge/Manifest-v3-green.svg)](https://developer.chrome.com/docs/extensions/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Entertainment Hub** is a premium, beautifully designed Chrome Extension that brings the latest OTT releases and live sports right to your browser toolbar. Discover South Indian blockbusters, gripping TV Series, Hollywood hits, and catch up with live cricket action like the IPL—all meticulously organized in a sleek, glassmorphic UI.

---

## ✨ Features

- **Categorized Tabs**: Seamlessly switch between South Indian Movies, Web Series, Hollywood releases, and Live Sports.
- **Instant Discovery**: View beautiful movie posters, ratings, original languages, and quick synopsis text at a glance.
- **Find Where to Watch**: Integrated visual badges indicating which OTT platform (Netflix, Prime Video, Hotstar, JioCinema, etc.) hosts the content.
- **Direct Links**: 'Details' button immediately opens quick search queries in a new tab so you can start watching.
- **Stunning UI**: Built with a vibrant gradient dark mode, utilizing backdrop-blur effects (glassmorphism) and smooth micro-animations for an ultra-premium feel.
- **No Setup Required**: Comes fully intact with curated sample data to use out of the box, with an architecture easily adaptable for live API integrations (like TMDb).

## 🚀 Installation (Developer Mode)

1. **Clone or Download** this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Turn on **Developer mode** using the toggle switch located in the top right corner.
4. Click the **Load unpacked** button in the top left corner.
5. Select the project directory (`Entertainment-extension`).

*The vibrant pink/purple app icon will now appear in your browser's toolbar! Click it to open your new Entertainment Hub.*

## 🛠️ Project Structure

```
Entertainment-extension/
├── icons/                 # Application icons
├── manifest.json          # Chrome Extension configuration (Manifest v3)
├── popup.html             # The markup layout for the UI structure
├── popup.css              # Custom styling (Glassmorphism & animations)
├── popup.js               # Event listeners and DOM rendering logic
└── mockData.js            # Dummy database of movies, series, and sports
```

## 💻 Tech Stack
- **HTML5** & **Vanilla CSS3**
- **Vanilla JavaScript** (ES6+)
- **Chrome Extension API** (Manifest V3)

## 🔮 Future Enhancements
- Connect active TMDb API / Live Sports API endpoints for real-time automatic data fetching.
- Add user personalization (watchlist pinning, favorite platforms toggle).
- Add light-mode theme options.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

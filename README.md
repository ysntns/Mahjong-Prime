# Mahjong-Prime

A cross-platform HTML5 solitaire Mahjong game with beautiful themes and responsive design.

## Features

- **6 Different Layouts**: Turtle (Easy), Bug (Easy), Flower (Medium), Four Hills (Tricky), Spider (Hard), Cloud (Inferno)
- **3 Themes**: Fruits, Classic, High Visibility
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Offline Support**: Play without internet connection
- **Statistics & Achievements**: Track your progress and unlock achievements
- **Hints & Undo**: Get help when you're stuck
- **Multilingual**: Support for 8 languages (EN, DE, FR, ES, PT, PL, BG, ZH)

## Screenshots

![Mahjong-Prime Game](MahjongPrime/www/images/screenshot.png)

## Platforms

- **Web Browsers**: Chrome, Firefox, Safari, Edge
- **Android**: Google Play Store (API 21+)
- **iOS**: App Store
- **Ubuntu Touch**: Ubuntu App Store
- **Chrome Web Store**: Chrome Apps
- **Firefox OS**: Firefox Marketplace

## Technology Stack

- HTML5 / CSS3
- JavaScript (ES5)
- jQuery 2.1.0
- Underscore.js
- Cordova/PhoneGap CLI 5.2.0

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Cordova CLI (for mobile builds)

### Installation

```bash
# Clone the repository
git clone https://github.com/ysntns/Mahjong-Prime.git

# Navigate to build directory
cd Mahjong-Prime/build-ghmj

# Install dependencies
npm install

# Add Android platform
npx cordova platform add android

# Build for Android
npx cordova build android
```

### Running Locally (Web)

```bash
cd MahjongPrime/www
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

## Project Structure

```
Mahjong-Prime/
├── MahjongPrime/
│   ├── www/                    # Main web application
│   │   ├── css/               # Stylesheets (responsive)
│   │   ├── js/                # Game logic and layouts
│   │   ├── images/            # Game assets and sprites
│   │   ├── lib/               # Third-party libraries
│   │   └── index.html         # Main entry point
│   ├── chromewebstore/        # Chrome Web Store manifest
│   ├── ubuntu/                # Ubuntu Touch files
│   └── res/                   # Android resources
├── build-ghmj/                # Cordova build directory
└── README.md
```

## Game Rules

1. **Objective**: Remove all tiles from the board by matching pairs
2. **Tile Selection**: Only "free" tiles can be selected (no tiles above and at least one side open)
3. **Matching**: Match identical tiles, or any season with any season, or any flower with any flower
4. **Win**: Clear all 144 tiles
5. **Lose**: No more matching pairs available

## Building for Different Platforms

### Android
```bash
cd build-ghmj
npx cordova platform add android
npx cordova build android --release
```

### iOS
```bash
cd build-ghmj
npx cordova platform add ios
npx cordova build ios
```

### Web (Production)
The `MahjongPrime/www` folder can be deployed directly to any web server.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the **GNU General Public License v3.0** (GPLv3).

- Game code: GPLv3
- Original graphics: CC-BY-NC (non-commercial use)

See the [LICENSE](MahjongPrime/COPYING) file for details.

## Credits

### Original Design
- Daniel Beck and Karin Beck (2014)
- Original project: Green Mahjong

### Current Maintainer
**Yasin Tanis**
Founder & CEO, CerebrAI-VorTX

- Email: ysn.tnss@gmail.com
- Phone: +90 541 586 75 32
- Website: [cerebrai-vortx.dev](https://cerebrai-vortx.dev)
- LinkedIn: [linkedin.com/in/ysntns](https://linkedin.com/in/ysntns)
- GitHub: [github.com/ysntns](https://github.com/ysntns)

### Organization
**CerebrAI-VorTX**
Health Technology Startup | Brain-Computer Interface Technologies
Sanliurfa, Turkey

## Changelog

### Version 2.4.1
- Various bug fixes and improvements

### Version 2.4.0
- Rebranded to Mahjong-Prime
- Updated developer information
- Android SDK updated to API 21+
- Various bug fixes and improvements

### Version 2.0.0
- Added 6 different layouts
- Added "High Visibility" theme
- Improved "Classic" theme
- Added animations
- Offline support
- Localization: Polish, French, German, Bulgarian, Portuguese, Spanish

---

Made with :heart: in Sanliurfa, Turkey

Copyright (c) 2024-2025 Yasin Tanis & CerebrAI-VorTX

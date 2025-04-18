# CPS-WebApp

A lightweight, web-based Clicks Per Second (CPS) test application built with **HTML**, **CSS**, and **JavaScript**.

## 🚀 Features

- **Simple UX**: Start/Stop button and a dedicated click area.
- **Countdown Timer**: Visual timer showing remaining time.
- **CPS Calculation**: Displays total clicks, duration, and CPS score.
- **Responsive Design**: Works on desktop and mobile devices.
- **Customizable Duration**: Easily change test length.

## 📂 Project Structure

```
CPS-Test-WebApp/
├── README.md         # This documentation
├── index.html        # Main HTML file
├── style.css         # CSS styles
└── script.js         # JavaScript logic
```

## ⚙️ Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/CPS-Test-WebApp.git
   cd CPS-Test-WebApp
   ```

2. **Open locally**:
   - Double-click `index.html`, or
   - Serve with a local server (recommended for consistent behavior):
     ```bash
     npx serve .
     ```

3. **Run the test**:
   - Click **Start** to begin the countdown.
   - Click the large area as fast as you can.
   - When time expires, view your CPS score.

## 🛠️ Customization

- **Test Duration**: In `script.js`, change the `DURATION` constant (in seconds).
- **Styling**: Update colors, fonts, and layout in `style.css`.
- **Behavior**: Extend or modify click handling and timer logic in `script.js`.

## 📈 Potential Enhancements

- **Multiple Modes**: Add different durations or challenge modes.
- **Leaderboard**: Store and display top scores using localStorage or a backend.
- **Mobile Optimization**: Enhance touch responsiveness and haptic feedback.
- **Animations**: Add visual effects for each click or when milestones are reached.

Developed with ❤️ for testing your clicking speed!

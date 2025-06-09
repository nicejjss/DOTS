# DOTS - A Click-Based Game

A modern web-based click game built with Object-Oriented Programming principles and the MVP (Model-View-Presenter) architecture pattern.

## 🎮 Live Demo
[Play DOTS](https://dots-sage.vercel.app/)

## 🛠️ Technical Stack

### Core Technologies
- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery 3.7.1

### Architecture & Design Patterns
- **MVP Architecture** (Model-View-Presenter)
  - Model: Data management and game state
  - View: UI components and rendering
  - Presenter: Business logic and game flow
- **Singleton Pattern** for game management and resource control
- **Modular Design** with ES6 modules
- **Component-Based Structure** for UI elements

### Project Structure
```
├── controller/     # Game logic and control flow
├── model/         # Data management and game state
├── view/          # UI components and templates
├── traits/        # Reusable functionality
├── assests/       # Static resources (CSS, images, etc.)
└── constants.js   # Game constants and configuration
```

## 🎯 Features
- Interactive click-based gameplay
- Dynamic score tracking
- Background music and sound effects
- Responsive design
- Scene-based game flow

## 🔧 Technical Implementation
- **Audio Management**
  - Background music system
  - Sound effects for interactions
  - Volume control for different audio elements
- **Game State Management**
  - Score tracking
  - Time management
  - Scene transitions
- **Performance Optimizations**
  - Efficient DOM manipulation
  - Resource management through singletons
  - Modular loading of assets

## 🚀 Future Enhancements
- Implementation of Dependency Injection
- Additional game features and levels
- Performance optimizations
- Enhanced audio system

## 📝 Development Notes
- Follows Google's autoplay policy for audio
- Requires user interaction before audio playback
- Built with scalability and maintainability in mind

## 👨‍💻 Author
**Loc Dao Duc**

---
*Built with ❤️ using modern web technologies*

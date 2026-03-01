# Scroll Hero Animation

A stunning scroll-based car animation built with Next.js, React, TypeScript, and GSAP. Watch the McLaren car smoothly travel across the screen as you scroll, with dynamic letter reveals, trail effects, and animated statistics.

## Links

- **Live Demo**: [https://krishsharma4406.github.io/Scroll-Animation/](https://krishsharma4406.github.io/Scroll-Animation/)
- **GitHub Repository**: [https://github.com/KrishSharma4406/Scroll-Animation](https://github.com/KrishSharma4406/Scroll-Animation)

## Features

- **Scroll-based car animation** - McLaren car moves left to right as you scroll
- **Dynamic letter reveals** - Letters appear as the car passes them
- **Trail effect** - Green trail follows the car's movement
- **Animated statistics** - Performance stats fade in at specific scroll positions
- **Smooth animations** - Powered by GSAP ScrollTrigger with scrub effect
- **Fully responsive** - Optimized for all screen sizes
- **TypeScript** - Full type safety and better developer experience

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KrishSharma4406/Scroll-Animation.git
cd Scroll-Animation
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- **Next.js 16.1.6** - React framework for production
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **GSAP 3.14.2** - Professional animation library
- **Tailwind CSS 4** - Utility-first CSS framework

## Project Structure

```
scroll-hero-animation/
├── app/
│   ├── components/
│   │   └── CarScrollAnimation.tsx  # Main animation component
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Home page
├── public/
│   └── mclaren-car.png             # Car asset
└── .github/
    └── workflows/
        └── deploy.yml               # GitHub Pages deployment
```

## How It Works

The animation uses GSAP's ScrollTrigger plugin to create a scroll-based animation:

1. **ScrollTrigger Setup**: Pins the animation container and links progress to scroll position
2. **Car Movement**: Transforms the car's X position based on scroll progress
3. **Letter Reveals**: Each letter in "MCLAREN" reveals when the car passes its position
4. **Trail Effect**: Updates the trail width to follow the car's center point
5. **Statistics**: Fade in at specific scroll offsets for added engagement

## Build & Deploy

Build for production:
```bash
npm run build
```

The project automatically deploys to GitHub Pages via GitHub Actions on every push to the main branch.

## License

This project is open source and available under the MIT License.

## Author

**Krish Sharma**
- GitHub: [@KrishSharma4406](https://github.com/KrishSharma4406)

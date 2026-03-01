# Car Scroll Animation - Next.js Version

A premium scroll-based animation featuring a McLaren car moving across the screen as you scroll, with dynamic text reveals and statistics.

## Features

✨ **Initial Load Animations**
- Staggered letter reveal for "WELCOME ITZFIZZ" headline
- Smooth fade-in for statistics boxes with delays

🚗 **Scroll-Based Car Animation**
- Car moves left to right based on scroll progress
- Trail effect following the car
- Letters reveal as the car passes over them

📊 **Impact Metrics Display**
- Four statistics boxes animating in during scroll
- Premium glassmorphic design with shadows

⚡ **Performance Optimized**
- GPU-accelerated animations with `will-change` properties
- Transform-based animations (translate, scale)
- GSAP with ScrollTrigger for smooth interpolation

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **GSAP 3** - Professional animation library
- **ScrollTrigger** - Scroll-based animations

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher).

### Installation

1. Navigate to the project directory:
```bash
cd scroll-hero-animation
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
scroll-hero-animation/
├── app/
│   ├── components/
│   │   ├── CarScrollAnimation.tsx    # Main car animation component
│   │   ├── ContentSection.tsx        # Content below the fold
│   │   └── HeroSection.tsx           # Alternative hero section
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles
├── public/
│   └── mclaren-car.png              # Car image asset
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Key Components

### CarScrollAnimation

The main component featuring:
- **useEffect** with GSAP context for animation setup
- **ScrollTrigger** for scroll-based animations
- **Initial animations** with staggered reveals
- **Dynamic letter reveal** as car crosses each letter
- **Responsive design** with mobile breakpoints

### Animation Details

1. **On Load:**
   - Letters appear with stagger (0.05s delay between each)
   - Statistics fade in after letters (0.15s stagger)

2. **On Scroll:**
   - Car moves from left to right
   - Trail expands behind the car
   - Letters light up as car passes
   - Statistics boxes fade in at specific scroll positions

## Customization

### Changing Statistics

Edit the `stats` array in `CarScrollAnimation.tsx`:

```tsx
const stats = [
  { id: 'box1', value: '58%', label: 'Your metric here', color: 'bg-[#def54f] text-black' },
  // ... more stats
];
```

### Changing the Headline

Modify the `headline` variable:

```tsx
const headline = 'YOUR TEXT HERE';
```

### Adjusting Animation Timing

Modify GSAP parameters:
- **duration**: Animation length
- **stagger**: Delay between elements
- **ease**: Easing function (power2.out, power3.out, etc.)
- **scrub**: Scroll interpolation smoothness (1-3 recommended)

## Performance Tips

- The component uses `will-change` for GPU acceleration
- Next.js Image component for optimized image loading
- Transform properties for smooth animations
- GSAP context cleanup to prevent memory leaks

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

## License

MIT

## Author

Built with ❤️ using Next.js, React, and GSAP

# Scroll-Driven Hero Section Animation

This project is a recreation of a scroll-based hero section animation featuring smooth transitions, GSAP animations, and a premium feel.

## 🎯 Assignment Features Implemented

### 1. Hero Section Layout
- ✅ Full-screen hero section (above the fold)
- ✅ Letter-spaced headline: "W E L C O M E T O I T Z F I Z Z"
- ✅ Impact metrics/statistics with percentages and descriptions
- ✅ Modern gradient background with visual effects

### 2. Initial Load Animation
- ✅ Smooth headline appearance with staggered letter reveal
- ✅ Statistics animate in one-by-one with subtle delays
- ✅ Premium fade + movement animations
- ✅ Smooth and non-abrupt transitions

### 3. Scroll-Based Animation (Core Feature)
- ✅ Hero section responds to page scroll
- ✅ Main visual element (car/object) moves based on scroll position
- ✅ Animation tied to scroll progress (not time-based)
- ✅ Natural easing and fluid motion
- ✅ Parallax effects on headline, stats, and visual elements

### 4. Motion & Performance
- ✅ Smooth and performant animations
- ✅ Uses transform properties (translate, scale, rotate)
- ✅ Optimized scroll event handling
- ✅ No heavy calculations or layout reflows

## 🛠️ Tech Stack

- **HTML** - Modern semantic markup
- **CSS** - Custom styles with Tailwind CSS v4
- **JavaScript/TypeScript** - Type-safe code
- **GSAP** - Professional-grade animations and ScrollTrigger
- **Next.js** - React framework with App Router
- **Tailwind CSS** - Utility-first styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd scroll-hero-animation
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
scroll-hero-animation/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx      # Main hero section with GSAP animations
│   │   └── ContentSection.tsx   # Additional content sections
│   ├── globals.css              # Global styles and custom animations
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README-ASSIGNMENT.md         # This file
```

## 🎨 Key Features Explained

### GSAP Animations

#### Initial Load Animation
- Letters of the headline appear with a staggered fade-in effect
- Each letter has a slight upward movement
- Statistics cards animate in sequence with delays

#### Scroll-Triggered Animations
- **Hero Image/Object**: Moves down, scales down, and fades as you scroll
- **Headline**: Parallax effect - moves faster than the page scroll
- **Statistics**: Slower parallax effect for depth perception
- All animations use `scrub` for smooth, frame-by-frame scroll sync

### Performance Optimizations
- Uses CSS transforms instead of position changes
- GSAP context cleanup on component unmount
- Smooth scroll behavior in CSS
- Optimized with `will-change` implicit handling by GSAP

## 🎯 Animation Parameters

```javascript
// Headline staggered reveal
duration: 0.8s
stagger: 0.05s
ease: power3.out

// Scroll-based parallax
scrub: 1 to 1.5 (smooth scroll sync)
start: 'top top'
end: 'bottom top'
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Touch-optimized for mobile devices

## 🌟 Customization

### Change Headline Text
Edit in `app/components/HeroSection.tsx`:
```typescript
const headline = 'YOUR TEXT HERE';
```

### Modify Statistics
Edit the `stats` array in `HeroSection.tsx`:
```typescript
const stats = [
  { value: '95%', label: 'Your Label' },
  // Add more stats...
];
```

### Adjust Animation Speed
Modify the GSAP timeline parameters:
```typescript
duration: 0.8,  // Animation duration
stagger: 0.05,  // Delay between elements
scrub: 1.5,     // Scroll sync smoothness
```

## 🚀 Deployment

### GitHub Pages

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '/scroll-hero-animation',
};
```

2. Build and deploy:
```bash
npm run build
# Upload the 'out' folder to GitHub Pages
```

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

## 📝 Assignment Checklist

- [x] Hero section occupies first screen
- [x] Letter-spaced headline displayed
- [x] Statistics with percentages shown
- [x] Smooth initial load animation
- [x] Staggered reveal for elements
- [x] Scroll-based animation implemented
- [x] Visual element moves with scroll
- [x] Scroll progress-based (not time-based)
- [x] Natural easing and fluid motion
- [x] Performance optimized
- [x] Transform properties used
- [x] No heavy layout reflows
- [x] Clean, readable code
- [x] Next.js/React.js implementation
- [x] Tailwind CSS styling
- [x] GSAP for animations

## 🎓 Learning Outcomes

This project demonstrates:
- Advanced GSAP ScrollTrigger usage
- React hooks (useEffect, useRef)
- Performance-optimized animations
- Responsive design principles
- Modern Next.js App Router patterns
- TypeScript best practices

## 📄 License

This project is created for educational purposes as part of an assignment.

## 🤝 Credits

- GSAP (GreenSock Animation Platform)
- Next.js by Vercel
- Tailwind CSS
- Inspired by modern web animation trends

---

**Note**: For best experience, view on a desktop browser with a mouse/trackpad for smooth scrolling effects.

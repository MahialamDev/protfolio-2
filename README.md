# Portfolio Website - React & Next.js

A modern, responsive portfolio website built with React, Next.js, TypeScript, Shadcn/UI, Framer Motion, and GSAP animations.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional design with glassmorphism effects
- 📱 **Fully Responsive** - Works perfectly on all device sizes
- 🌙 **Dark/Light Mode** - Smooth theme switching with animated toggle
- ⚡ **Performance Optimized** - Built with Next.js 14 and TypeScript
- 🎯 **Shadcn/UI Components** - Consistent, accessible design system
- 🎬 **Advanced Animations** - Framer Motion + GSAP for smooth interactions
- 🚀 **Modern Navbar** - Glassmorphism navbar with scroll effects and active states
- 💫 **Loading Screen** - Animated loading experience
- 📊 **Scroll Progress** - Visual scroll progress indicator
- 🎭 **Micro-interactions** - Hover effects, transitions, and feedback

## 🎬 Animation Features

### Navbar Animations
- **GSAP Entry Animation** - Smooth navbar entrance with elastic logo animation
- **Scroll Effects** - Dynamic background blur and shadow on scroll
- **Active State Tracking** - Visual indication of current section
- **Mobile Menu** - Smooth slide-in mobile navigation
- **Hover Effects** - Interactive button and link animations

### Theme Toggle
- **Smooth Transitions** - Animated theme switching
- **Visual Feedback** - Glowing effects and icon rotations
- **Spring Physics** - Natural feeling toggle movement

### Loading Experience
- **Progress Animation** - Realistic loading progress
- **Logo Animation** - Rotating gradient logo
- **Floating Elements** - Subtle floating dot animations

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI
- **Animations:** Framer Motion + GSAP
- **Icons:** Material Icons, Devicons
- **Fonts:** Poppins (Google Fonts)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + animations
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx            # Main page
├── components/
│   ├── ui/                 # Shadcn/UI components
│   ├── sections/           # Portfolio sections
│   │   ├── ModernHeader.tsx # Animated navbar
│   │   └── ...
│   ├── Portfolio.tsx       # Main portfolio component
│   ├── ThemeToggle.tsx     # Animated theme switcher
│   └── LoadingScreen.tsx   # Loading animation
├── hooks/
│   └── useScrollAnimation.ts # Custom animation hooks
├── utils/
│   └── animations.ts       # Animation variants
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Customization

### Animations
- **Framer Motion variants** in `src/utils/animations.ts`
- **GSAP timelines** in component files
- **CSS animations** in `globals.css`

### Styling
- **Colors:** Modify Tailwind config or CSS variables
- **Fonts:** Update in `layout.tsx`
- **Glassmorphism:** Adjust in `globals.css`

### Content
- **Personal Info:** Update component data arrays
- **Images:** Replace in `public/` folder and update paths
- **Navigation:** Modify `navItems` in `ModernHeader.tsx`

## 🎭 Animation Details

### Navbar Features
- **Entrance Animation:** GSAP-powered slide-in from top
- **Logo Animation:** Elastic scale with rotation
- **Scroll Detection:** Dynamic styling based on scroll position
- **Active States:** Smooth transitions between navigation items
- **Mobile Menu:** Slide-in animation with staggered items
- **CTA Button:** Gradient background with hover effects

### Performance
- **Intersection Observer** for scroll-triggered animations
- **RequestAnimationFrame** for smooth scroll effects
- **Optimized re-renders** with proper React patterns
- **Lazy loading** for heavy animations

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoint-specific** animations
- **Touch-friendly** interactions
- **Optimized performance** on mobile devices

## 🚀 Deployment

Ready for deployment to:
- **Vercel** (recommended)
- **Netlify**
- **Traditional hosting**

See `DEPLOYMENT.md` for detailed instructions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
# SentientLabs Website

A premium, futuristic SaaS website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** with custom design system
- 🎭 **Framer Motion** animations
- 📱 **Fully Responsive** design
- ♿ **Accessible** (WCAG AA compliant)
- 🎯 **Production-ready** with optimizations
- 🔥 **TypeScript** for type safety
- 📦 **Component-based** architecture

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sentientlabs-website.git
cd sentientlabs-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
sentientlabs-website/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (marketing)/       # Marketing pages
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   ├── home/             # Home page components
│   │   ├── ui/               # Reusable UI components
│   │   └── animations/       # Animation components
│   ├── lib/                  # Utility functions
│   ├── hooks/                # Custom React hooks
│   ├── styles/               # Additional CSS
│   └── types/                # TypeScript types
├── public/                   # Static assets
└── package.json             # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: `#8B5CF6` (Purple)
- **Secondary**: `#3D2269` (Dark Purple)
- **Accent**: `#C396F0` (Light Purple)
- **Background**: `#0E0F1C` (Dark)

### Typography
- **Primary Font**: Inter
- **Display Font**: Space Grotesk

### Components
All components use:
- Glass morphism effects
- Gradient accents
- Smooth animations
- Responsive design

## 🧩 Key Components

### Layout Components
- `Navbar` - Sticky navigation with glassmorphism
- `Footer` - Multi-column footer with links
- `ScrollToTop` - Animated scroll-to-top button

### Home Page
- `HeroSection` - Animated hero with waveform
- `FeatureCards` - 3-column feature grid
- `PricingPreview` - Pricing tiers showcase
- `Testimonials` - Carousel testimonials
- `CtaBand` - Call-to-action banner

### UI Components
- `Button` - Multiple variants
- `Card` - Glassmorphic cards
- `Input` - Form inputs
- `Accordion` - Expandable sections

### Animations
- `FadeIn` - Fade-in on scroll
- `SlideIn` - Slide-in animations
- `ScaleOnHover` - Hover scale effect
- `WaveformAnimation` - Audio waveform
- `FloatingOrb` - Animated orbs

## 📦 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🌐 Pages

- `/` - Home
- `/product` - Product features
- `/pricing` - Pricing plans
- `/solutions` - Industry solutions
- `/about` - Company information
- `/contact` - Contact form

## 🎯 Performance Optimizations

- ✅ React.memo for component memoization
- ✅ Lazy loading with dynamic imports
- ✅ Image optimization with Next.js Image
- ✅ Code splitting
- ✅ Intersection Observer for scroll animations
- ✅ Debounced scroll events
- ✅ CSS optimization with Tailwind purge

## 🔧 Configuration Files

### tailwind.config.ts
Custom design tokens, animations, and utilities

### next.config.js
Next.js configuration with SVG support

### tsconfig.json
TypeScript configuration with path aliases

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎭 Animation Guidelines

- Use `FadeIn` for content reveals
- Use `SlideIn` for directional animations
- Use `ScaleOnHover` for interactive elements
- All animations use `framer-motion`
- Animations trigger on viewport intersection

## 🌟 Best Practices

1. **Components**: One component per file
2. **Naming**: PascalCase for components, kebab-case for files
3. **Types**: All props typed with TypeScript
4. **Styling**: Tailwind utility classes only
5. **Performance**: Use React.memo for expensive components
6. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

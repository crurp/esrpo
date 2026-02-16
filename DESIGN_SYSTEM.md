# EchoSpark Design System

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Status:** Active

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Icons & Graphics](#icons--graphics)
7. [Animations & Interactions](#animations--interactions)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Implementation Guidelines](#implementation-guidelines)

---

## Brand Identity

### Logo

The EchoSpark logo consists of a geometric hexagon with a central compass rose cross, representing precision, direction, and innovation in technology.

**Logo Specifications:**
- **Primary Logo:** Hexagon with central compass rose cross, gradient fill
- **Logo Mark:** Icon only (hexagon + compass rose)
- **Wordmark:** "EchoSpark" text with gradient
- **Combined:** Logo mark + wordmark

**Logo Usage:**
- Minimum size: 32px height
- Clear space: 1x logo height on all sides
- Do not rotate, distort, or modify the logo
- Always maintain aspect ratio

**Logo Colors:**
- Primary: Indigo to Purple gradient (#6366f1 → #8b5cf6)
- Dark backgrounds: Full color gradient
- Light backgrounds: Full color gradient (with dark text)

### Brand Values

- **Innovation:** Cutting-edge technology solutions
- **Precision:** Technical excellence and accuracy
- **Trust:** Reliable and secure services
- **Forward-thinking:** Future-ready solutions

---

## Color System

### Primary Palette

```css
--primary: #6366f1;           /* Indigo 500 */
--primary-dark: #4f46e5;      /* Indigo 600 */
--primary-light: #818cf8;     /* Indigo 400 */
--secondary: #8b5cf6;         /* Violet 500 */
--accent: #ec4899;            /* Pink 500 */
```

### Background Colors

```css
--bg-primary: #0a0a0f;        /* Deep dark background */
--bg-secondary: #111118;      /* Secondary dark */
--bg-tertiary: #1a1a24;       /* Tertiary dark */
```

### Text Colors

```css
--text-primary: #ffffff;      /* Pure white */
--text-secondary: #a1a1aa;    /* Zinc 400 */
--text-tertiary: #71717a;     /* Zinc 500 */
```

### Border & Glass Effects

```css
--border: rgba(255, 255, 255, 0.1);
--glass: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
```

### Gradient Definitions

**Primary Gradient (Logo & Headings):**
```css
linear-gradient(135deg, #6366f1, #8b5cf6)
```

**Accent Gradient (Interactive Elements):**
```css
linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)
```

**Background Gradients:**
- Orb 1: Radial gradient from `#6366f1` (primary)
- Orb 2: Radial gradient from `#8b5cf6` (secondary)
- Orb 3: Radial gradient from `#ec4899` (accent)

### Color Usage Guidelines

- **Primary:** Main actions, links, highlights
- **Secondary:** Supporting elements, accents
- **Accent:** Special emphasis, hover states
- **Background:** Always use dark theme (no light mode)
- **Text:** Ensure WCAG AA contrast (4.5:1 minimum)

---

## Typography

### Font Families

**Primary Font (Body):** `Inter`
- Weights: 300, 400, 500, 600, 700, 800
- Usage: Body text, descriptions, UI elements
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Display Font (Headings):** `Space Grotesk`
- Weights: 400, 500, 600, 700
- Usage: Headings, logo text, hero titles
- Character: Modern, geometric, tech-forward

### Type Scale

```css
/* Display */
--text-6xl: clamp(3rem, 8vw, 6rem);      /* Hero titles */
--text-5xl: clamp(2.5rem, 6vw, 4.5rem);  /* Service titles */
--text-4xl: clamp(2.5rem, 5vw, 4rem);    /* Section titles */
--text-3xl: clamp(2rem, 4vw, 3rem);      /* CTA titles */

/* Headings */
--text-2xl: 1.5rem;                       /* Card titles */
--text-xl: 1.25rem;                        /* Subheadings */
--text-lg: 1.125rem;                       /* Large body */

/* Body */
--text-base: 1rem;                         /* Default body */
--text-sm: 0.875rem;                       /* Small text */
--text-xs: 0.75rem;                        /* Labels, badges */
```

### Typography Hierarchy

**H1 (Hero Title):**
- Font: Space Grotesk
- Size: `clamp(3rem, 8vw, 6rem)`
- Weight: 800
- Line Height: 1.1
- Color: Gradient (primary → secondary → accent)

**H2 (Section Title):**
- Font: Space Grotesk
- Size: `clamp(2.5rem, 5vw, 4rem)`
- Weight: 700
- Line Height: 1.2
- Color: Gradient (text-primary → text-secondary)

**H3 (Card/Item Title):**
- Font: Space Grotesk
- Size: 1.5rem
- Weight: 700
- Line Height: 1.3
- Color: text-primary

**Body Text:**
- Font: Inter
- Size: `clamp(1rem, 2vw, 1.25rem)`
- Weight: 400
- Line Height: 1.8
- Color: text-secondary

**Small Text:**
- Font: Inter
- Size: 0.875rem
- Weight: 500
- Line Height: 1.6
- Color: text-secondary

### Text Styles

**Gradient Text:**
```css
background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Badge Text:**
- Font: Inter
- Size: 0.875rem
- Weight: 500
- Padding: 0.5rem 1.25rem
- Background: glass effect
- Border: glass-border

---

## Spacing & Layout

### Spacing Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;  /* Primary container */
```

### Layout Guidelines

- **Max Container Width:** 1400px
- **Section Padding:** 8rem vertical, 2rem horizontal
- **Card Padding:** 2rem
- **Grid Gaps:** 2rem (desktop), 1.5rem (mobile)

### Grid System

**Domains Grid:**
```css
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 2rem;
```

**Services Grid:**
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
```

**Contact Grid:**
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
```

---

## Components

### Buttons

**Primary Button:**
```css
- Background: linear-gradient(135deg, primary, secondary)
- Padding: 1rem 2rem
- Border Radius: 12px
- Font: Inter, 600, 1rem
- Color: text-primary
- Shadow: 0 4px 20px rgba(99, 102, 241, 0.4)
- Hover: translateY(-2px), shadow increase
```

**Secondary Button:**
```css
- Background: glass effect
- Border: glass-border
- Padding: 1rem 2rem
- Border Radius: 12px
- Font: Inter, 600, 1rem
- Color: text-primary
- Hover: background opacity increase, translateY(-2px)
```

### Cards

**Domain Card:**
```css
- Background: bg-secondary
- Border: border (1px solid)
- Border Radius: 24px
- Padding: 2rem
- Hover: translateY(-10px), border-color primary, shadow
- Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
```

**Service Item Card:**
```css
- Background: bg-secondary
- Border: border (1px solid)
- Border Radius: 20px
- Padding: 2.5rem
- Hover: translateY(-5px), border-color primary, shadow
```

**Contact Card:**
```css
- Background: bg-secondary
- Border: border (1px solid)
- Border Radius: 20px
- Padding: 2rem
- Display: flex, align-items center
- Hover: translateY(-5px), border-color primary, shimmer effect
```

### Navigation

**Header:**
```css
- Position: fixed, top
- Background: rgba(10, 10, 15, 0.8) with backdrop-filter blur(20px)
- Border: bottom border (1px solid border)
- Padding: 1.5rem 0
- Z-index: 1000
- Scrolled: padding 1rem, background opacity 0.95
```

**Nav Links:**
```css
- Font: Inter, 500, 0.95rem
- Color: text-secondary
- Hover: text-primary, underline gradient animation
- Gap: 2.5rem
```

**Mobile Menu:**
```css
- Position: fixed, right side
- Width: 280px
- Height: 100vh
- Background: bg-secondary
- Border: left border
- Animation: slide in from right
```

### Hero Section

```css
- Min Height: 100vh
- Display: flex, center
- Padding: 8rem 2rem 4rem
- Text Align: center
- Background: animated gradient orbs
```

### Sections

**Standard Section:**
```css
- Padding: 8rem 0
- Max Width: 1400px
- Margin: 0 auto
- Position: relative
- Z-index: 1
```

**Section Header:**
```css
- Text Align: center
- Margin Bottom: 4rem
- Label: badge style
- Title: section-title style
- Description: section-description style
```

---

## Icons & Graphics

### Logo Icon

**Structure:**
- Hexagon outer shape (6-sided polygon)
- Central compass rose cross (8-pointed: 4 cardinal + 4 intercardinal)
- Gradient fill/stroke
- SVG format for scalability

**Sizes:**
- 16px (favicon)
- 32px (footer, small UI)
- 40px (header logo)
- 48px (cards)
- 64px (featured)
- 128px (large displays)
- 256px (presentations)
- 512px (maximum resolution)

### Icon Style

**Characteristics:**
- Minimalist geometric shapes
- Consistent stroke width (2px)
- Rounded line caps where appropriate
- Gradient fills for primary icons
- Solid colors for secondary icons

**Icon Library:**
- Quantum: Atom/circle with rays
- RF/DSP: Layered hexagons
- Cybersecurity: Shield with checkmark
- Navigation: Hamburger menu
- Social: Twitter, Discord

### Image Guidelines

**Service Images:**
- Aspect Ratio: 16:9
- Format: JPG/WebP
- Max Width: 1200px
- Border Radius: 16px
- Hover: scale(1.1)

**Card Images:**
- Height: 200px
- Object Fit: cover
- Border Radius: 16px
- Overlay: gradient bottom

---

## Animations & Interactions

### Animation Principles

- **Duration:** 0.3s - 0.6s for interactions
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) for smooth motion
- **Performance:** Use transform and opacity (GPU accelerated)
- **Accessibility:** Respect prefers-reduced-motion

### Key Animations

**Fade In Up:**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Float:**
```css
@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(50px, -50px) scale(1.1); }
    66% { transform: translate(-30px, 30px) scale(0.9); }
}
```

**Gradient Shift:**
```css
@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
```

**Ripple Effect:**
```css
@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
```

### Interaction States

**Hover:**
- Cards: translateY(-5px to -10px)
- Buttons: translateY(-2px), shadow increase
- Links: underline animation, color change
- Icons: scale(1.1), rotate(5deg)

**Active:**
- Buttons: scale(0.98)
- Cards: scale(0.99)

**Focus:**
- Outline: 2px solid primary color
- Offset: 2px from element

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
```

### Mobile (< 768px)

- Single column layouts
- Stacked navigation (hamburger menu)
- Reduced padding (1.5rem)
- Full-width buttons
- Simplified animations
- Touch-friendly targets (min 44px)

### Tablet (768px - 1024px)

- 2-column grids where appropriate
- Horizontal navigation
- Medium padding (2rem)
- Optimized image sizes

### Desktop (> 1024px)

- Multi-column grids
- Full navigation
- Maximum container width (1400px)
- Enhanced animations
- Hover states active

---

## Accessibility

### WCAG Compliance

- **Contrast Ratio:** Minimum 4.5:1 for text
- **Focus Indicators:** Visible on all interactive elements
- **Keyboard Navigation:** Full site accessible via keyboard
- **Screen Readers:** Semantic HTML, ARIA labels
- **Motion:** Respect prefers-reduced-motion

### Implementation

**Semantic HTML:**
- Use proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (nav, section, article, footer)
- Form labels and button text

**ARIA Labels:**
```html
<button aria-label="Toggle Navigation">
<nav aria-label="Main navigation">
```

**Focus Management:**
- Visible focus indicators
- Logical tab order
- Skip links for main content

**Color:**
- Never rely solely on color for information
- Use icons and text in addition to color
- Ensure sufficient contrast

---

## Implementation Guidelines

### CSS Architecture

**Organization:**
1. CSS Variables (Root)
2. Reset/Normalize
3. Base Styles
4. Layout Components
5. UI Components
6. Utilities
7. Animations
8. Responsive Overrides

### Naming Conventions

**BEM Methodology:**
```css
.block {}
.block__element {}
.block--modifier {}
```

**Examples:**
```css
.domain-card {}
.domain-card__image {}
.domain-card--featured {}
```

### File Structure

```
/
├── index.html
├── styles.css
├── script.js
├── icons/
│   ├── logo-16.svg
│   ├── logo-32.svg
│   ├── logo-40.svg
│   ├── logo-48.svg
│   ├── logo-64.svg
│   ├── logo-128.svg
│   ├── logo-256.svg
│   └── logo-512.svg
└── DESIGN_SYSTEM.md
```

### Performance

**Optimization:**
- Minify CSS/JS for production
- Optimize images (WebP format)
- Lazy load images
- Use CSS transforms for animations
- Debounce scroll events
- Use Intersection Observer for animations

**Loading:**
- Critical CSS inline
- Defer non-critical JavaScript
- Preload fonts
- Use font-display: swap

---

## Version History

**v1.0.0** (January 2025)
- Initial design system
- Dark theme implementation
- Complete component library
- Responsive guidelines
- Accessibility standards

---

## Resources

**Fonts:**
- Inter: https://fonts.google.com/specimen/Inter
- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk

**Tools:**
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Accessibility Audit: Lighthouse

---

**Document Maintained By:** EchoSpark Design Team  
**Questions or Updates:** Contact design team

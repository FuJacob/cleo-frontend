# Cleo Landing Page

A modern, playful landing page for **Cleo** - a macOS AI assistant menu bar app.

## 🎨 Design System

### Typography

- **Font**: Fredoka (Google Fonts) - playful, rounded, and friendly

### Color Palette

```css
--primary: #10B981        /* Emerald Green - buttons, links */
--primary-light: #34D399  /* Hover states */
--secondary: #A7F3D0      /* Badges, accents */
--background: #FFFFFF     /* Main background */
--surface: #F0FDF4        /* Card backgrounds (very light green) */
--accent: #D1FAE5         /* Section backgrounds */
--text: #1F2937           /* Primary text */
--text-muted: #6B7280     /* Secondary text */
```

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.5 with React 19
- **Styling**: Tailwind CSS v4
- **Components**: Custom shadcn/ui components
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📦 Components

The landing page uses custom-built shadcn/ui components:

- **Button** - Primary, outline, and ghost variants with rounded corners
- **Card** - Feature cards with hover effects and green borders
- **Badge** - For tags like "macOS", "Free", "Privacy-First"
- **Accordion** - Interactive FAQ section
- **Avatar** - Cleo ghost mascot display

## 🎯 Sections

1. **Hero Section**

   - Large headline with gradient text
   - Badge tags highlighting key features
   - CTA buttons for download and GitHub
   - Star count display

2. **Features Grid**

   - 3-column responsive layout
   - Instant Explanations
   - Focus Tracking
   - Knowledge Base

3. **Screenshot Section**

   - Showcase area with green accent glow
   - Placeholder for menu bar app screenshot

4. **Stats Section**

   - GitHub stars
   - Active users
   - Privacy guarantee

5. **FAQ Section**

   - Accordion component for common questions
   - Clean, accessible design

6. **CTA Section**

   - Final call-to-action with gradient background
   - Download button

7. **Footer**
   - Links to GitHub, documentation, and support
   - Branding elements

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and design system
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── accordion.tsx
│       └── avatar.tsx
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

## 🎨 Design Features

- **Playful but Professional** - Friendly design that maintains credibility
- **Generous White Space** - Clean, uncluttered layout
- **Soft Green Gradients** - Subtle backgrounds for visual interest
- **Rounded Corners** - 16px border radius throughout
- **Subtle Shadows** - Depth without being overwhelming
- **Smooth Animations** - Hover effects on buttons and cards
- **Mobile Responsive** - Fully responsive design for all screen sizes

## 📝 Customization

### Colors

Update the CSS variables in `src/app/globals.css` to change the color scheme.

### Components

All UI components are located in `src/components/ui/` and can be customized individually.

### Content

Edit `src/app/page.tsx` to update text, links, and structure.

## 🌟 Features to Add

- Real screenshot of the Cleo menu bar app
- Actual GitHub repository link
- Download links for Mac (DMG file)
- Testimonials from real users
- Demo video or GIF
- Newsletter signup
- Documentation link

## 📄 License

Open source and free forever.

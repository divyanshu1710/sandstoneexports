# Design Guidelines - Jain Enterprises Stone Exporters

## Design Approach
**Reference-Based Premium Corporate:** Inspired by luxury stone/material showcases like Caesarstone, Cosentino, with elements of premium B2B sites. Focus on craftsmanship, texture, and visual richness while maintaining professional credibility.

## Color System

### Backgrounds
- **Primary Background:** Soft marble gradient from white (#FAFAFA) to cool grey (#E8E8E8)
- **Secondary Background:** Dusky sandstone gradient (#F5F1ED to #E6DDD5)
- **Dark Sections:** Deep charcoal (#2C2C2C)
- **Card Backgrounds:** Pure white with subtle shadow (0 4px 20px rgba(0,0,0,0.08))

### Accent & Highlights
- **Primary Text:** Deep charcoal (#2C2C2C)
- **Accent/CTA:** Warm gold/bronze (#C9A86A)
- **Interactive States:** Gold for hovers, underlines, and active states

## Typography

### Font Families
- **Headings:** Playfair Display (Serif - Premium, craftsmanship feel)
- **Body Text:** Inter (Sans-serif - Clean, professional readability)

### Scale
- **H1:** 48-56px, Bold
- **H2:** 36-42px, Semi-bold  
- **H3:** 28-32px, Medium
- **Body:** 16-18px, Regular, line-height 1.8
- **Small Text:** 14px, Regular

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 8, 12, 16, 20** for consistent rhythm
- Section padding vertical: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component internal padding: p-8 to p-16
- Card padding: p-10 to p-15
- Element gaps: gap-4, gap-8, gap-12

### Container Widths
- Standard sections: max-w-7xl (1400px)
- Content sections: max-w-6xl (1200px)
- Form containers: max-w-4xl

### Border Radius
- Cards: rounded-2xl (16px)
- Buttons: rounded-lg (8px)
- Images: rounded-xl (12px)

## Component Library

### Navigation (Fixed Glassmorphism)
- Height: 80px, sticky top
- Background: Semi-transparent white with backdrop-blur-lg
- Logo: 60px height
- Nav links: 16px Medium, gold underline on hover (2px, 300ms transition)
- Mobile: Slide-in drawer from right
- Shadow on scroll: 0 2px 12px rgba(0,0,0,0.08)

### Buttons
- **Primary CTA:** Gold background, white text, 56px horizontal padding, 16px vertical
- **Secondary:** Outlined gold border, gold text
- **Height:** 48-56px
- **Hover:** Darken by 10%, smooth transition
- **Buttons on images:** Backdrop-blur background

### Cards
- White background with elevation shadow
- Border-radius: 16px
- Padding: 40-60px
- Hover: Lift 5px with increased shadow
- Transition: 300ms ease

### Product/Gallery Cards
- Images: 350x350px, object-fit cover
- Gradient overlay on images
- Category name overlay (H3, white, bottom-left)
- Hover: Image scale 1.1, "View Gallery" button fades in
- Border-radius: 16px

### Form Inputs
- Height: 50px (inputs), 150px (textarea)
- Border: 1px solid #E0E0E0
- Border-radius: 8px
- Padding: 0 20px
- Focus: 2px gold border
- Labels: 14px semi-bold above field

### Stats/Counter Cards
- Large number: 48px bold with count-up animation on scroll
- Icon: 50px above number
- White background card, center-aligned
- Grid: 4 columns desktop, 2x2 tablet, 1 mobile

## Animations & Interactions

### Logo Entry (Home Page)
- 2-second intro: Scale from 0.5 to 1.2, settle to 1 with fade-in
- Then transition to hero carousel

### Carousel
- Auto-play: 5 second intervals
- Fade transition: 800ms
- Navigation: Dots (12px circles, gold active) + arrow icons on hover

### Scroll Animations
- Count-up stats on scroll-into-view
- Parallax subtle effects on images
- Fade-in-up for section content

### Hover States
- Images: Zoom scale 1.1
- Cards: Lift up 5px with shadow increase
- Buttons: Darken + slight scale 0.98 on click
- Links: Gold underline animation 300ms

### Transitions
- All interactions: 300-500ms ease-in-out
- Image transforms: 600ms ease

## Page-Specific Elements

### Home Page Hero Carousel
- Full viewport height: 85vh
- 3-4 high-res stone product slides (1920x1080px)
- Dark overlay: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))
- Centered H1 + tagline + gold CTA button

### About Page Timeline
- Vertical gold timeline line (3px) on left
- Gold circular dots (16px) at each milestone
- Floating images (400x300px, rounded-xl) alternating left/right
- Block spacing: 80px vertical

### Gallery Masonry Grid
- Creative mixed-size layout (large 2x2, medium, small blocks)
- 20px gaps between images
- Hover: Zoom + caption overlay appears
- Lightbox on click

### Contact Form Layout
- 2-column grid: Form (left) + Info card + map (right)
- Form: White card, 60px padding
- Info card: Sandstone gradient background
- Map: 400px height embedded iframe below info

### Footer (All Pages)
- Background: #2C2C2C dark charcoal
- 3 columns: Brand/logo, Quick links, Contact info
- Column headings: Gold 18px semi-bold
- Bottom copyright bar with subtle border-top

## Images

### Hero Images
- **Home Carousel:** 3-4 high-resolution stone product showcase images (1920x1080px) - marble slabs, granite installations, finished projects
- **About Hero:** Factory/facility exterior or warehouse floor (1920x1080px)
- **Contact Hero:** Abstract marble texture background

### Content Images
- **Home Intro:** Warehouse or premium stone showcase (600x400px)
- **About Timeline:** 3 supporting images - founding era photo, factory evolution, modern facility (400x300px each)
- **About Masonry Grid:** 6-8 facility images - machinery, team at work, product close-ups, quality control
- **Product Cards:** High-quality stone category images (350x350px each)

### Visual Treatment
All images have rounded corners (12-16px), subtle shadows, and smooth hover zoom effects. Product images include gradient overlays for text legibility.
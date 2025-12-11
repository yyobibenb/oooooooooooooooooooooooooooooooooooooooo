# Design Guidelines: Jewelry Training Center Website

## Design Approach

**Selected Approach**: Refined Minimalist with Portfolio Showcase
Drawing inspiration from high-end educational platforms and luxury portfolio sites, emphasizing craftsmanship, elegance, and sophisticated simplicity. The design balances restraint with visual impact through strategic use of whitespace, refined typography, and purposeful animations.

**Key Design Principles**:
- Precision and refinement in every element
- Generous whitespace to let content breathe
- Strategic visual hierarchy that guides the eye
- Subtle, purposeful animations that enhance rather than distract
- Premium feel appropriate for luxury craftsmanship education

## Typography System

**Font Families** (via Google Fonts):
- Primary: 'Cormorant Garamond' - Elegant serif for headings, conveying craftsmanship and tradition
- Secondary: 'Inter' - Clean sans-serif for body text and UI elements, ensuring readability

**Type Scale**:
- Hero Heading: text-6xl md:text-7xl lg:text-8xl, font-light, tracking-tight
- Section Headings: text-4xl md:text-5xl, font-light, tracking-tight
- Subsection Headings: text-2xl md:text-3xl, font-normal
- Body Large: text-lg md:text-xl, font-light, leading-relaxed
- Body Standard: text-base, font-normal, leading-relaxed
- Small Text: text-sm, font-medium, tracking-wide, uppercase for labels

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-4 to p-8 on mobile, p-12 to p-16 on desktop
- Section spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-4, gap-6, gap-8, gap-12
- Container padding: px-4 md:px-8 lg:px-12

**Grid System**:
- Main container: max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for optimal readability
- Gallery: Grid system with responsive columns

**Responsive Breakpoints**:
- Mobile-first approach
- Single column on mobile (base)
- 2 columns on tablet (md: 768px)
- 3-4 columns on desktop (lg: 1024px, xl: 1280px)

## Page Structure & Components

### 1. Hero Section (100vh)
- Full-viewport immersive introduction
- Large hero image showcasing elegant jewelry workspace or finished pieces
- Centered text overlay with refined typography
- Primary CTA button with backdrop blur effect
- Subtle animated diamond particles floating in background (using CSS animations)
- Heading + subheading + CTA button structure

### 2. Introduction/About Section
- Single column centered layout (max-w-4xl)
- Large introductory paragraph about the jewelry school
- py-24 spacing
- Three-column feature highlights below (grid-cols-1 md:grid-cols-3)
- Each feature with diamond icon, heading, and description

### 3. Courses & Programs Section
- Section heading with decorative diamond element
- Two-column layout for course cards (grid-cols-1 md:grid-cols-2)
- Each card: Course image, title, duration/level, brief description, "Learn More" link
- Hover state with subtle elevation change
- py-32 section spacing

### 4. Student Gallery Section
- Section heading: "Student Masterpieces" or similar
- Masonry-style grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- High-quality images of jewelry pieces
- Hover overlay with piece title and student name
- Modal lightbox for enlarged view with smooth fade-in animation
- Filter/category buttons if multiple jewelry types shown
- py-32 section spacing

### 5. Master Instructor Section
- Asymmetric two-column layout (40/60 split on desktop)
- Left: Large portrait photo with subtle shadow/border treatment
- Right: Instructor bio, credentials, achievements, teaching philosophy
- List of specializations with diamond bullet points
- Elegant divider lines using thin borders
- py-24 spacing

### 6. Contact Section
- Two-column layout (grid-cols-1 lg:grid-cols-2)
- Left column: Contact form (Name, Email, Phone, Message fields)
- Right column: Contact information, address, phone, email, social links
- Map integration or location image
- Form inputs with minimalist borders, focus states
- Submit button with primary styling
- py-32 spacing

### 7. Footer
- Three-column layout (grid-cols-1 md:grid-cols-3)
- Column 1: School logo/name, brief tagline
- Column 2: Quick links (Courses, Gallery, About, Contact)
- Column 3: Contact info, social media icons
- Copyright notice centered below
- py-16 spacing

## Component Library

### Navigation
- Fixed header with backdrop blur on scroll
- Horizontal menu items with subtle underline on hover
- Logo on left, navigation center or right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20
- Spacing: px-8, gap-8 between items

### Buttons
- Primary CTA: Rounded corners (rounded-lg), generous padding (px-8 py-4)
- Text buttons: Minimal styling with underline animation on hover
- Icon buttons: Square (w-12 h-12), centered icon
- All buttons with backdrop-blur-md when over images

### Cards
- Subtle border or shadow for definition
- Rounded corners (rounded-xl)
- Padding: p-6 to p-8
- Hover: Subtle scale transform (scale-105) with smooth transition

### Form Inputs
- Border-bottom only style for minimal aesthetic
- Focus state: Thicker border
- Labels: Small uppercase text above input
- Spacing: py-3 for input fields
- Gap: gap-6 between form fields

### Image Containers
- Aspect ratios: 16:9 for landscape, 4:5 for portraits, 1:1 for square gallery items
- Subtle shadow or border treatment
- Object-cover for consistent sizing
- Rounded corners (rounded-lg)

## Animation Strategy

**Purposeful Animations** (user specifically requested):

1. **Diamond Particles** (Hero section only):
   - Floating geometric diamond shapes
   - Slow, smooth movement using CSS keyframes
   - Opacity variations (0.1 to 0.3)
   - 3-5 particles maximum for subtlety

2. **Scroll-triggered Reveals**:
   - Fade-in with slight upward movement (20px translate)
   - Stagger delay for grouped elements (100ms increments)
   - Trigger at 80% viewport visibility
   - Duration: 800ms with ease-out

3. **Hover Interactions**:
   - Gallery items: Scale 1.05 + subtle shadow increase
   - Cards: Lift effect (translateY -4px)
   - Buttons: Scale 1.02
   - All transitions: 300ms ease-in-out

4. **Image Loading**:
   - Skeleton loader or blur-up effect
   - Smooth opacity transition when loaded

5. **Navigation**:
   - Backdrop blur fade-in on scroll
   - Menu items: Underline slide animation (left to right)

**Animation Implementation**:
- Use CSS transitions for simple interactions
- Intersection Observer API for scroll-based reveals
- No continuous animations except hero diamond particles
- Respect prefers-reduced-motion media query

## Icon System

**Library**: Heroicons (outline style for minimalism)
**Usage**:
- Navigation: Menu, close icons
- Features: Diamond/gem custom SVG icon as decorative element
- Social media: Brand icons
- Form: Check, arrow icons
- Size: w-6 h-6 standard, w-8 h-8 for emphasis

**Custom Diamond Icon**: Simple geometric diamond shape as SVG, used as:
- Section dividers
- Bullet points for lists
- Decorative accents in headings

## Images

**Image Requirements**:

1. **Hero Image**: 
   - Full-width background image showing elegant jewelry workshop or pristine finished pieces on luxury surface
   - High resolution, professional photography
   - Provides context and aspirational quality

2. **Course Images**:
   - 4-6 images showing different jewelry-making techniques or course outcomes
   - Landscape orientation (16:9)
   - Consistent style and lighting

3. **Gallery Images**:
   - 12-20 high-quality photos of student jewelry work
   - Mix of rings, necklaces, earrings, bracelets
   - Various angles and compositions
   - Square format (1:1) for grid consistency

4. **Instructor Photo**:
   - Professional portrait
   - Portrait orientation (4:5)
   - Neutral background focusing on the instructor

5. **Decorative Elements**:
   - Close-up macro shots of diamonds/gemstones as background textures
   - Used sparingly as section backgrounds with overlay

## Accessibility

- All interactive elements have focus states with visible outline
- Color contrast ratios meet WCAG AA standards
- Form labels properly associated with inputs
- Alt text for all images describing jewelry pieces
- Keyboard navigation fully supported
- Semantic HTML structure throughout
- Skip-to-content link for screen readers

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stacked navigation in drawer
- Hero text sizing reduced appropriately
- Gallery: 1 column
- Touch-friendly tap targets (min 44x44px)

**Tablet (768px - 1024px)**:
- 2-column layouts where appropriate
- Optimized image sizes
- Adjusted spacing (reduced by ~30%)

**Desktop (> 1024px)**:
- Full multi-column layouts
- Maximum content width constraints
- Generous whitespace
- Hover states activated

This design creates a sophisticated, professional platform that honors the craftsmanship of jewelry-making while maintaining modern minimalist aesthetics and ensuring excellent usability across all devices.
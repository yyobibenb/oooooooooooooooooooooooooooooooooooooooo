# Luxury Namor - Jewelry Training Center Website

## Overview

This is a luxury jewelry school website built as a single-page application showcasing courses, student gallery work, instructor information, and contact details. The site features a refined minimalist design approach inspired by high-end educational platforms and luxury portfolio sites, emphasizing craftsmanship, elegance, and sophisticated simplicity. The application uses a modern React-based frontend with a minimal Express backend setup, currently using in-memory storage but configured for PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- Single-page application using Wouter for client-side routing
- Component-based architecture with reusable UI components
- State management through React hooks and TanStack Query for server state

**UI Component System**: 
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom theme system supporting light/dark modes through CSS variables
- Framer Motion for animations and scroll-based interactions

**Design System**:
- Typography: Cormorant Garamond (serif headings) and Inter (sans-serif body)
- Color scheme: Black backgrounds with gold/yellow accents (luxury aesthetic)
- Spacing system based on Tailwind's 4px unit scale
- Responsive breakpoints: mobile-first approach with md (768px) and lg (1024px) breakpoints

**Page Structure**:
- Single home page with multiple sections: Hero, Intro, Courses, Gallery, Instructor, Contact
- Scroll-based navigation with smooth scrolling
- Responsive navigation with mobile menu
- Section-based layout with lazy-loaded animations

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- Minimal API setup (currently no routes implemented)
- ESM module system
- Vite integration for development with HMR (Hot Module Replacement)
- Production build uses esbuild for server bundling

**Development Setup**:
- Vite dev server for frontend development
- Express middleware for logging and JSON parsing
- Custom error handling and request logging
- Support for Replit-specific plugins (cartographer, dev banner, runtime error modal)

**Storage Layer**:
- In-memory storage implementation (MemStorage class)
- Interface-based design allowing easy swap to database implementation
- Currently supports basic user CRUD operations
- Designed for PostgreSQL integration via Drizzle ORM

### Data Storage

**Database Configuration**:
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver (`@neondatabase/serverless`)
- Schema defined in TypeScript with Zod validation
- Migration system configured but not yet utilized

**Current Schema**:
- Users table with UUID primary keys, username, and password fields
- Zod schemas for input validation

**Storage Interface**:
The storage interface pattern allows switching between in-memory and database implementations:
- `getUser(id)`: Retrieve user by ID
- `getUserByUsername(username)`: Find user by username
- `createUser(user)`: Create new user record

### External Dependencies

**UI & Styling**:
- Radix UI primitives for accessible component foundation
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- class-variance-authority and clsx for conditional styling
- Embla Carousel for carousel functionality

**Data Management**:
- TanStack Query (React Query) for server state management
- React Hook Form with Zod resolvers for form handling
- date-fns for date manipulation

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- Drizzle Kit for migrations
- Neon Database serverless driver for PostgreSQL
- Drizzle Zod for schema validation

**Development Tools**:
- Vite for build tooling and dev server
- esbuild for production bundling
- TypeScript for type safety
- Replit-specific plugins for development environment

**Fonts**:
- Google Fonts: Cormorant Garamond and Inter
- Loaded via link tags in HTML

**Asset Management**:
- Static images stored in `attached_assets/generated_images/`
- Vite alias configuration for `@assets` path resolution
- Images imported directly in components

**Session Management**:
- connect-pg-simple for PostgreSQL session store (configured but not actively used)

## Key Architectural Decisions

**Monorepo Structure**: 
The codebase uses a monorepo pattern with clear separation:
- `/client` - Frontend React application
- `/server` - Express backend
- `/shared` - Shared types and schemas

This separation allows independent development and deployment while sharing TypeScript types.

**Type Safety**: 
Full TypeScript implementation across frontend and backend with:
- Shared schema definitions using Drizzle and Zod
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Strict type checking enabled

**Styling Approach**:
Utility-first CSS with Tailwind combined with component-level abstractions:
- CSS variables for theming (supports light/dark modes)
- Custom color system with opacity modifiers
- Elevation system using CSS variables for hover/active states
- Design guidelines documented for consistency

**Build Strategy**:
- Development: Vite dev server with Express middleware
- Production: Separate Vite build for frontend, esbuild for backend
- Frontend output to `dist/public`, backend to `dist/index.js`

**Database Strategy**:
Currently using in-memory storage with interface pattern to enable future PostgreSQL integration without refactoring application logic. The Drizzle configuration is ready for database connection when needed.

**Component Organization**:
- UI components in `/components/ui` (shadcn/ui)
- Feature components in `/components` (Navigation, HeroSection, etc.)
- Example components in `/components/examples` for development reference
- Pages in `/pages` directory

**Form Handling**:
React Hook Form with Zod validation provides type-safe form management with automatic validation and error handling.

**Animation Strategy**:
Framer Motion used for:
- Scroll-triggered animations with `useInView` hook
- Page transitions and micro-interactions
- Staggered animations for list items
- Smooth scroll behavior for navigation
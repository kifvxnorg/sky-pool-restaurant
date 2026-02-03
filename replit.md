# Sky Pool Restaurant - Luxury Animated Website

## Overview

A cinematic, premium restaurant website for Sky Pool Restaurant, a luxury rooftop continental and international buffet dining establishment located on the 15th floor of Six Seasons Hotel in Gulshan, Dhaka, Bangladesh. The application features smooth animations, a dark luxury aesthetic with gold accents, and conversion-focused design including menu display, table reservations, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom dark luxury theme (midnight black, gold gradients, neon blue accents)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for cinematic page transitions and scroll-based animations
- **Typography**: Playfair Display (serif headings) and Poppins (sans-serif body)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for type safety
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Storage
- **Database**: PostgreSQL (required via DATABASE_URL environment variable)
- **Schema**: Four main tables defined in shared/schema.ts:
  - `menu_items`: Restaurant menu with categories (Continental, Buffet, Grill, Beverages, Desserts)
  - `reservations`: Table booking with name, phone, date, time, guests, status
  - `reviews`: Customer reviews with ratings
  - `messages`: Contact form submissions

### Project Structure
- `/client` - React frontend application
- `/server` - Express backend with API routes
- `/shared` - Shared TypeScript types, schemas, and route definitions
- `/migrations` - Drizzle database migrations

### Key Design Decisions
1. **Monorepo Structure**: Client and server share TypeScript types through the `/shared` directory, ensuring API contracts are enforced at compile time
2. **Type-Safe API**: Routes defined with Zod schemas that validate both input and output, shared between frontend and backend
3. **Dark Theme First**: CSS variables configured for a premium dark aesthetic with HSL color values for flexibility
4. **Animation-Heavy**: Framer Motion integrated throughout for scroll-triggered animations and page transitions

## External Dependencies

### Database
- PostgreSQL database (connection string via `DATABASE_URL` environment variable)
- Drizzle Kit for schema migrations (`npm run db:push`)

### Third-Party Services
- Google Fonts for Playfair Display and Poppins typography
- Unsplash/Pixabay for placeholder imagery

### Key NPM Packages
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `framer-motion`: Animation library
- `@tanstack/react-query`: Server state management
- `react-hook-form` / `@hookform/resolvers`: Form handling
- `zod`: Runtime type validation
- Full Shadcn/ui component suite via Radix UI primitives
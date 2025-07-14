# Puul - AI-Powered Property Management Platform

## Overview

This is a full-stack web application built for AI-powered property management. The project follows a modern monorepo structure with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM. The application is currently set up as a marketing landing page for "Puul," showcasing AI property management features like predictive maintenance, dynamic pricing, and portfolio analytics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The application uses a monorepo pattern with three main directories:
- `client/` - React frontend with Vite build system
- `server/` - Express.js backend API
- `shared/` - Common code shared between frontend and backend (schemas, types)

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot reload with tsx for TypeScript execution

## Key Components

### Database Layer
- **ORM**: Drizzle with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for type sharing
- **Tables**: Users, Properties, Maintenance Requests, Tenants with full relations
- **Features**: AI insights storage, predictive maintenance, tenant management
- **Migrations**: Managed through drizzle-kit with `npm run db:push`
- **Connection**: Uses Neon serverless PostgreSQL driver

### Authentication & Sessions
- Session storage configured for PostgreSQL backend
- Comprehensive user schema with company information
- Database storage implementation with full CRUD operations

### UI Component System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theming**: CSS variables for consistent color palette
- **Component Library**: Comprehensive set including forms, navigation, data display
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Current Application Features
- Marketing landing page with multiple sections
- Beautiful property imagery with elegant parallax effects throughout
- Animated components with intersection observers
- Interactive testimonial carousel
- Real-time dashboard mockups with Chart.js integration
- SEO optimized with meta tags and semantic HTML
- Full PostgreSQL database integration with comprehensive property management schema

## Data Flow

### Frontend to Backend Communication
- API requests through custom `apiRequest` utility
- TanStack Query for caching and synchronization
- RESTful API pattern with `/api` prefix for all backend routes

### Development Workflow
- Vite dev server proxies API requests to Express backend
- Hot module replacement for frontend changes
- TypeScript compilation checking across the entire monorepo

### Production Build Process
- Frontend builds to `dist/public` directory
- Backend compiles to `dist/index.js` with esbuild
- Static file serving integrated into Express for production

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- Express.js with middleware for JSON parsing and CORS
- PostgreSQL with Neon serverless driver

### UI and Styling
- Tailwind CSS with PostCSS processing
- Radix UI component primitives
- Lucide React for consistent iconography
- Embla Carousel for image/content carousels

### Development Tools
- TypeScript for type safety across the stack
- Vite with React plugin and development error overlay
- Drizzle Kit for database schema management
- ESBuild for fast backend compilation

### Database and Session Management
- Drizzle ORM with Zod integration for validation
- Connect-pg-simple for PostgreSQL session storage
- Date-fns for date manipulation utilities

## Deployment Strategy

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- Development vs production mode switching via `NODE_ENV`
- Replit-specific development banner integration

### Build Process
1. Frontend builds with Vite to static assets
2. Backend compiles with esbuild for Node.js execution
3. Combined deployment serves static files through Express

### Development Setup
- Single `npm run dev` command starts both frontend and backend
- Vite middleware integration for seamless development experience
- Database migrations handled through `npm run db:push`

### Production Considerations
- Static file serving from Express for single-deployment strategy
- Environment-based configuration switching
- Error handling middleware for production API responses

The architecture is designed for scalability with clear separation of concerns, type safety throughout the stack, and modern development practices. The current implementation serves as a solid foundation for building out the AI property management features mentioned in the marketing content.
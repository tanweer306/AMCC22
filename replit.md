# AMC Connect — Appraiser Registration

## Overview

AMC Connect is a modern web application designed to streamline the appraiser registration process with Asset Management Companies (AMCs). The platform allows appraisers to discover AMCs, select multiple companies to register with, and complete a comprehensive multi-step registration workflow. Built with Next.js 15 and React 19, the application features a responsive design with TailwindCSS and integrates with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router for modern React development
- **UI Framework**: React 19 with TypeScript for type safety
- **Styling**: TailwindCSS for responsive, utility-first styling
- **State Management**: React hooks (useState, useEffect) for local component state
- **Client-side Navigation**: Next.js Link component and useSearchParams for URL state management

### Backend Architecture
- **API Routes**: Next.js API routes for server-side functionality
- **Database Connection**: PostgreSQL with `postgres` library for connection management
- **Data Validation**: Custom validation utilities with input sanitization and security measures
- **Rate Limiting**: In-memory rate limiting for API endpoints (100 requests per minute per IP)
- **Security Headers**: Configured security headers including X-Frame-Options, X-Content-Type-Options, and XSS protection

### Data Storage
- **Primary Database**: PostgreSQL for storing AMC company information and registration data
- **Database Schema**: `amc_companies` table with fields for company details (name, contact info, state, URLs)
- **Connection Management**: Environment-based configuration with SSL support for production
- **Database Initialization**: Automated table creation and data seeding through API endpoints

### Authentication & Security
- **Input Validation**: Comprehensive validation for emails, phone numbers, URLs, and state codes
- **XSS Prevention**: String sanitization to remove potentially dangerous HTML and scripts
- **SQL Injection Protection**: Parameterized queries using the postgres library
- **Rate Limiting**: Client IP-based request throttling
- **Environment Security**: Sensitive database credentials managed through environment variables

### Application Flow
- **Company Discovery**: Homepage with search and filtering capabilities for AMC companies
- **Multi-selection**: Users can select multiple AMCs for registration
- **Multi-step Registration**: 6-step process covering personal, professional, address, business, documents, and review
- **Form State Management**: Persistent state across registration steps with URL parameter handling
- **File Upload Support**: Document upload functionality for required appraiser credentials

## External Dependencies

### Core Framework Dependencies
- **Next.js 15.5.2**: React framework with App Router and Turbopack for development
- **React 19.0.0 & React DOM**: Latest React version for component architecture
- **TypeScript**: Type safety and developer experience

### Database & Data Management
- **postgres 3.4.7**: PostgreSQL client library for database connections
- **pg 8.16.3**: Additional PostgreSQL driver support
- **@types/pg**: TypeScript definitions for PostgreSQL

### Styling & UI
- **TailwindCSS 3.4.1**: Utility-first CSS framework for responsive design
- **PostCSS**: CSS processing for TailwindCSS compilation

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting for consistent style
- **TypeScript Compiler**: Type checking and compilation

### External Integrations
- **Onlook Visual Editor**: Integration with Onlook design tool via CDN script for visual editing capabilities
- **Environment Configuration**: Support for various database environments (development/production) with configurable SSL settings

The application is designed to handle both development and production environments with appropriate security measures, database connection management, and error handling throughout the system.
# Task Manager Application

A modern, responsive task management application built with React, TypeScript, and CSS Modules. Features a collapsible sidebar, authentication system, theme switching, and a clean, professional UI.

## 🚀 Features

### Core Functionality

- **Task Management**: Create, organize, and track tasks
- **User Authentication**: Secure login and registration system
- **Protected Routes**: Role-based access control
- **Responsive Design**: Works seamlessly on all devices

### UI/UX Features

- **Collapsible Sidebar**: Smooth animations with width transitions
- **Theme Switching**: Light/Dark theme support
- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Flexbox-based responsive design
- **Smooth Animations**: CSS transitions for professional feel

### Technical Features

- **React 19**: Latest React features and hooks
- **TypeScript**: Full type safety and better development experience
- **CSS Modules**: Scoped styling without conflicts
- **Context API**: Global state management without prop drilling
- **React Router**: Client-side routing with protected routes

## 🏗️ Architecture

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── App-sidebare/    # Sidebar navigation
│   ├── Button/          # Button component
│   ├── Header/          # Application header
│   ├── Input/           # Input field component
│   ├── ProtectedRoutes/ # Route protection wrapper
│   └── Theme/           # Theme toggle component
├── config/              # Configuration files
│   └── env.config.ts    # Environment variables
├── data/                # Static data and mock data
│   ├── login.ts         # Login form data
│   ├── Register.ts      # Registration form data
│   └── Sidebare.ts      # Sidebar menu items
├── layouts/             # Layout components
│   ├── AppShell.tsx     # Main application shell
│   ├── AppShell.module.css # Layout styles
│   ├── AuthHeader/      # Authentication header
│   └── AuthLayout.tsx   # Authentication layout
├── pages/               # Page components
│   ├── Home/            # Home page
│   ├── Login/           # Login page
│   ├── Register/        # Registration page
│   ├── MyProfile/       # User profile page
│   └── Tasks/           # Task management pages
├── routes/              # Routing configuration
│   └── index.tsx        # Main router setup
├── store/               # State management
│   ├── AuthProvider.tsx # Authentication context
│   ├── SidebarContext.tsx # Sidebar state context
│   └── ThemeProvider.tsx # Theme context
├── types/               # TypeScript type definitions
│   └── index.ts         # Global types
├── utils/               # Utility functions
│   └── validation/      # Form validation
│       └── yup.ts       # Yup validation schemas
└── sharedStyles/        # Shared CSS modules
    └── auth.module.css  # Authentication styles
```

## 🎨 UI Components

### AppShell Layout

- **Responsive Sidebar**: Collapsible navigation with smooth animations
- **Header**: Application header with sidebar toggle and theme switch
- **Content Area**: Dynamic content area that expands when sidebar closes
- **Flexbox Layout**: Modern CSS layout system for responsive design

### Navigation

- **Sidebar Menu**: Home, MyTasks, TaskCategory, MyProfile
- **Responsive Behavior**: Sidebar collapses to 0 width when closed
- **Smooth Transitions**: CSS animations for opening/closing
- **Overflow Handling**: Content disappears smoothly with `overflow: hidden`

### Theme System

- **Light/Dark Themes**: Toggle between theme modes
- **CSS Variables**: Dynamic theme switching with CSS custom properties
- **Consistent Styling**: Unified design language across components

## 🔐 Authentication System

### Features

- **User Registration**: Complete registration form with validation
- **User Login**: Secure authentication with form validation
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Context Management**: Global authentication state

### Security

- **Route Protection**: Automatic route guarding
- **Form Validation**: Client-side validation with Yup schemas
- **State Persistence**: Authentication state management

## 📱 Responsive Design

### Layout System

- **Flexbox Grid**: Modern CSS layout system
- **Mobile First**: Responsive design principles
- **Breakpoint Support**: Adaptive layouts for different screen sizes
- **Touch Friendly**: Optimized for mobile and tablet devices

### Sidebar Responsiveness

- **Collapsible Design**: Sidebar can be hidden on small screens
- **Width Transitions**: Smooth animations from 250px to 0
- **Content Adaptation**: Main content automatically expands
- **Overflow Management**: Smooth content hiding with CSS

## 🎯 Key Components

### SidebarContext

```tsx
// Global sidebar state management
const { isOpen, toggleSidebar } = useSidebar();
```

### AppShell

```tsx
// Main application layout wrapper
<AppShell>
  <PageContent />
</AppShell>
```

### ProtectedRoutes

```tsx
// Automatic route protection
<ProtectedRoutes replace={true} route="/login">
  <ProtectedPage />
</ProtectedRoutes>
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd my-app

# Install dependencies
npm install

# Start development server
npm start
```

### Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App
npm run eject
```

## 🛠️ Technology Stack

### Frontend

- **React 19**: Modern React with latest features
- **TypeScript**: Type-safe JavaScript development
- **CSS Modules**: Scoped CSS styling
- **React Router**: Client-side routing

### State Management

- **React Context**: Built-in state management
- **Custom Hooks**: Reusable state logic
- **Local Storage**: Persistent state storage

### Styling

- **CSS Modules**: Component-scoped styles
- **CSS Variables**: Dynamic theming
- **Flexbox**: Modern layout system
- **CSS Transitions**: Smooth animations

### Development Tools

- **Create React App**: Development environment
- **TypeScript Compiler**: Type checking
- **ESLint**: Code quality
- **Prettier**: Code formatting

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🌟 Key Features Implementation

### Responsive Sidebar

- **Flex Layout**: Sidebar is part of flex layout (not fixed positioning)
- **Smooth Transitions**: Width animates from 250px to 0
- **Auto-expanding Content**: Main content automatically expands
- **Context Management**: Global state without prop drilling

### Theme System

- **Dynamic Switching**: Toggle between light and dark themes
- **CSS Variables**: Theme-aware styling system
- **Persistent State**: Theme preference saved in context

### Authentication

- **Form Validation**: Yup schemas for client-side validation
- **Protected Routes**: Automatic route protection
- **State Management**: Global authentication context

## 🔧 Configuration

### Environment Variables

```typescript
// src/config/env.config.ts
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const APP_NAME = process.env.REACT_APP_NAME;
```

### Routing

```typescript
// src/routes/index.tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    )
  }
]);
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

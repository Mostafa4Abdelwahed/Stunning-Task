# Component Structure Documentation

## Overview
This project has been refactored to use a modular component architecture with performance optimizations and better separation of concerns.

## Directory Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.jsx      # Optimized button with variants
│   │   ├── Input.jsx       # Reusable input component
│   │   ├── Modal.jsx       # Modal with backdrop blur
│   │   └── Tabs.jsx        # Tab navigation component
│   ├── layout/             # Layout components
│   │   ├── Background.jsx  # Animated background with effects
│   │   └── Card.jsx        # Glassmorphism card component
│   ├── chat/               # Chat-specific components
│   │   ├── Message.jsx     # Individual chat message
│   │   └── LoadingMessage.jsx # Loading state for chat
│   ├── common/             # Common components
│   │   └── Header.jsx      # Reusable header component
│   ├── code/               # Code display components
│   │   ├── CodeViewer.jsx  # Code display with copy functionality
│   │   └── PreviewViewer.jsx # HTML preview component
│   └── index.js            # Barrel export for easy imports
├── hooks/                  # Custom React hooks
│   ├── useChat.js          # Chat state management
│   └── useIdeaSubmission.js # Idea submission logic
└── app/                    # Next.js app pages
    ├── page.jsx            # Home page (refactored)
    └── chat/
        └── page.jsx        # Chat page (refactored)
```

## Performance Optimizations

### 1. React.memo()
All components are wrapped with `React.memo()` to prevent unnecessary re-renders when props haven't changed.

### 2. Custom Hooks
- **useChat**: Manages chat state and API calls with useCallback for memoization
- **useIdeaSubmission**: Handles idea submission with proper loading states

### 3. Optimized Event Handlers
- Mouse move events are debounced and properly cleaned up
- API calls are memoized with useCallback

### 4. Component Composition
- Small, focused components that can be easily memoized
- Props are kept minimal to reduce re-render triggers

## Component Usage Examples

### Button Component
```jsx
import { Button } from '../components';

<Button 
  variant="primary" 
  size="lg" 
  loading={isLoading}
  onClick={handleClick}
>
  Click me
</Button>
```

### Modal Component
```jsx
import { Modal } from '../components';

<Modal 
  isOpen={showModal} 
  onClose={() => setShowModal(false)}
  title="My Modal"
  size="lg"
>
  <p>Modal content here</p>
</Modal>
```

### Background Component
```jsx
import { Background } from '../components';

<Background>
  <YourContent />
</Background>
```

## Key Features

### 1. Glassmorphism Design
- Consistent backdrop blur effects
- Subtle borders and shadows
- Animated background orbs

### 2. Responsive Design
- Mobile-first approach
- Flexible layouts with max-width constraints
- Proper spacing and padding

### 3. Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Focus management in modals

### 4. Animation Performance
- CSS transforms for smooth animations
- Hardware acceleration with `transform3d`
- Optimized re-renders with React.memo

## Migration Benefits

1. **Reduced Bundle Size**: Components are tree-shakeable
2. **Better Performance**: Memoized components prevent unnecessary re-renders
3. **Improved Maintainability**: Clear separation of concerns
4. **Reusability**: Components can be used across different pages
5. **Type Safety**: Ready for TypeScript migration
6. **Testing**: Isolated components are easier to test

## Future Enhancements

1. **TypeScript Migration**: Add proper type definitions
2. **Storybook Integration**: Component documentation and testing
3. **Theme System**: CSS custom properties for theming
4. **Animation Library**: Framer Motion integration
5. **State Management**: Zustand or Redux Toolkit for global state 
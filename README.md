# StunningTask - AI-Powered Web Development Assistant

A full-stack web application that helps users turn their ideas into functional web applications using AI. The project consists of a Next.js frontend with a modern glassmorphism UI and a NestJS backend with MongoDB integration.

## 🚀 Features

- **AI-Powered Idea Generation**: Submit your ideas and get AI-generated web applications
- **Real-time Chat Interface**: Interactive chat with AI to refine and develop your ideas
- **Code Preview**: View generated HTML code with live preview
- **Modern UI**: Beautiful glassmorphism design with smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Architecture

### Frontend (Next.js 15)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom glassmorphism components
- **Icons**: Lucide React
- **Performance**: Optimized with React.memo() and custom hooks
- **Components**: Modular architecture with reusable UI components

### Backend (NestJS + MongoDB)
- **Framework**: NestJS with TypeScript
- **Database**: MongoDB with Mongoose ODM
- **API**: RESTful endpoints for idea submission and chat functionality
- **Testing**: Jest for unit and e2e testing

## 📦 Prerequisites

- npm or yarn
- MongoDB (local or cloud instance)

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone git@github.com:Mostafa4Abdelwahed/Stunning-Task.git StunningTask
cd StunningTask
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create a .env file (if not exists) and configure MongoDB connection
# Example .env:
# MONGODB_URI=mongodb://localhost:27017/stunningtask
# PORT=3001

# Start development server
npm run start:dev
```

The backend will run on `http://localhost:3001`

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:3000`

### 4. Database Setup
Ensure MongoDB is running locally or update the connection string in your backend `.env` file to point to your MongoDB instance.

## 🎯 Usage

1. **Submit an Idea**: Visit the homepage and enter your web application idea
2. **Chat with AI**: The system will generate an initial response and you can continue chatting to refine your idea
3. **Preview Code**: Click on generated files to see the HTML preview and source code
4. **Start New**: Use the "New Idea" button to start a fresh conversation

## 📁 Project Structure

```
StunningTask/
├── backend/                 # NestJS API server
│   ├── src/
│   │   ├── ideas/          # Ideas module (controller, service, schemas)
│   │   ├── app.module.ts   # Main application module
│   │   └── main.ts         # Application entry point
│   ├── package.json
│   └── README.md
├── frontend/               # Next.js client application
│   ├── src/
│   │   ├── app/           # Next.js app pages
│   │   ├── components/    # Reusable UI components
│   │   │   ├── ui/        # Basic UI components
│   │   │   ├── layout/    # Layout components
│   │   │   ├── chat/      # Chat-specific components
│   │   │   └── code/      # Code display components
│   │   └── hooks/         # Custom React hooks
│   ├── package.json
│   └── README.md
└── README.md              # This file
```

## 🔧 Development

### Backend Commands
```bash
cd backend

# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Testing
npm run test
npm run test:e2e
npm run test:cov

# Linting
npm run lint
npm run format
```

### Frontend Commands
```bash
cd frontend

# Development
npm run dev

# Production build
npm run build
npm run start

# Linting
npm run lint
```

## 🎨 Design System

The application uses a custom glassmorphism design system with:
- Backdrop blur effects
- Subtle borders and shadows
- Animated background elements
- Responsive layouts
- Accessibility features

## 🚀 Performance Optimizations

- **React.memo()**: Components are memoized to prevent unnecessary re-renders
- **Custom Hooks**: State management with useCallback for memoization
- **Debounced Events**: Mouse events are optimized for performance
- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Next.js built-in image optimization


## 📝 Notes

- The frontend uses Next.js 15 with the latest React 19 features
- Backend is built with NestJS for scalable, maintainable code
- MongoDB is used for data persistence with Mongoose ODM
- The UI is built with a mobile-first responsive approach
- All components are designed for reusability and maintainability
  
## Loom Video

[Loom Video Link.](https://www.loom.com/share/fe681d4125c140c69d3a3b6aa43a5048?sid=05b39f80-2164-4947-bcab-5a2b32760da2)


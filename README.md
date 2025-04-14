# Dimension Factory

A modern React application with a beautiful 3D background animation built with Three.js, React Three Fiber, and Drei.

## Features

- 🎨 Beautiful 3D background animation with:
  - Animated spheres with distortion effects
  - Rotating torus
  - Particle field background
  - Responsive design for mobile and desktop
- 🚀 Built with Vite for fast development and building
- 🎭 Modern UI components using Shadcn UI
- 📱 Fully responsive design
- 🎨 Tailwind CSS for styling
- 🔄 React Router for navigation
- 🔍 TypeScript for type safety

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dimension-factory.git
cd dimension-factory
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration if needed.

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Environment Variables

The project uses the following environment variables:

- `VITE_PORT` - Port number for the development server (default: 8080)
- `VITE_HOST` - Host for the development server (default: localhost)
- `VITE_API_URL` - API endpoint URL (if needed)
- `VITE_ENABLE_ANALYTICS` - Enable/disable analytics (default: false)

## Project Structure

```
dimension-factory/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Scene.tsx    # 3D background animation
│   │   └── ui/          # Shadcn UI components
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Project dependencies
├── requirements.txt     # Key dependencies reference
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 3D Scene Components

The project features a dynamic 3D background with the following components:

- **Animated Spheres**: Two spheres with different colors and animation patterns
- **Animated Torus**: A rotating torus with custom material
- **Particle Field**: A background of animated particles
- **Orbit Controls**: Interactive camera controls

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting

### Git Workflow

1. Create a new branch for each feature
2. Make atomic commits
3. Write clear commit messages
4. Keep the main branch clean

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for the 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for the React bindings
- [Drei](https://github.com/pmndrs/drei) for the useful Three.js helpers
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful UI components

# Future Spark Grid

A modern, animated landing page and dashboard application built with React, TypeScript, Vite, and Tailwind CSS. Features interactive components, smooth animations, and a responsive design.

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **Bun** (optional, for faster package management) - [Bun docs](https://bun.sh/)
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/future-spark-grid.git
   cd future-spark-grid
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using Bun (faster):
   ```bash
   bun install
   ```

### Running Locally

#### Development Server

To start the development server with hot reload:

```bash
npm run dev
```

Or with Bun:
```bash
bun run dev
```

The application will be available at `http://localhost:5173` (Vite default port).

#### Build for Production

To create an optimized production build:

```bash
npm run build
```

#### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Create an optimized production build
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests once with Vitest
- `npm run test:watch` - Run tests in watch mode

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── landing/        # Landing page specific components
│   ├── dashboard/      # Dashboard page components
│   └── ui/             # Shadcn/ui component library
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── pages/              # Page components (route destinations)
├── assets/             # Images, icons, and media
├── App.tsx             # Main App component with routing
├── main.tsx            # React DOM entry point
├── index.css           # Global styles and animations
└── vite-env.d.ts       # Vite environment type definitions
```

## 🛠️ Key Technologies

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript
- **Build Tool:** Vite 5.4.19
- **Styling:** Tailwind CSS + custom CSS animations
- **Component Library:** Shadcn/ui
- **Routing:** React Router v6
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Form Management:** React Hook Form
- **Data Fetching:** TanStack React Query
- **Testing:** Vitest
- **Code Quality:** ESLint
- **Package Manager:** npm / Bun

## 🎨 Features

- **Animated Landing Page** with preload spinner animation
- **Interactive Hero Section** with Black Hole canvas background
- **Smooth Section Animations** with Framer Motion
- **Responsive Design** that works on desktop and mobile
- **Dark Theme** with gradient accents
- **Dashboard** for analytics and simulations
- **Accessible Components** with ARIA labels and keyboard navigation

## 📱 Responsive Design

The application is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (640px and up)
- Desktops (1024px and up)

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - Shadcn/ui configuration
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS configuration

## 🚨 Troubleshooting

### Port Already in Use

If port 5173 is already occupied, Vite will automatically use the next available port. Check the console output for the correct URL.

### Dependencies Not Installing

Clear your cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

Or with Bun:
```bash
bun install --force
```

### Build Errors

Make sure you're using a compatible Node.js version:

```bash
node --version  # Should be v16+
```

## 📝 Environment Variables

Create a `.env.local` file in the root directory if needed for environment-specific configurations.

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues and questions, please open an issue in the repository or contact the development team.

---

**Happy coding! 🚀**

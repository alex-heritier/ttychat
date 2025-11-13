# ttychat Frontend

Terminal UI (TUI) application for the ttychat social platform.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **@opentui/core** - Terminal UI library for building interactive TUIs
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing framework

## Features

- 🚀 Interactive terminal UI with keyboard navigation
- ⌨️  Real-time keypress detection and display
- 🎨 Styled boxes and text rendering
- 🔄 60 FPS rendering for smooth interactions

## Keyboard Controls

- `q` - Quit the application
- `h` - Show help
- `c` - Chat (coming in Phase 2)
- `Ctrl+C` or `ESC` - Exit
- Any key - Displays the key pressed on screen

## Project Structure

```
frontend/
├── src/
│   ├── main.ts           # Application entry point
│   ├── components/       # TUI components
│   ├── mocks/           # Mocked API data (Phase 1)
│   └── types/           # TypeScript type definitions
├── package.json
├── tsconfig.json
└── .gitignore
```

## Development

### Prerequisites

**Important:** OpenTUI requires [Zig](https://ziglang.org/download/) to be installed on your system.

### Install Dependencies

```bash
npm install
```

### Build

```bash
npm run build
```

### Development Mode (Watch)

```bash
npm run dev
```

### Run

```bash
npm start
```

### Testing

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run coverage
```

## Phase 1 Notes

Currently in Phase 1 development:
- Building TUI with opentui
- API calls are mocked for development
- Backend integration comes in Phase 2

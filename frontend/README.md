# ttychat Frontend

Terminal UI (TUI) application for the ttychat social platform.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **opentui** - Terminal UI library
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing framework

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

# ttychat Frontend

Terminal UI (TUI) application for the ttychat social platform.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **opentui** - Terminal UI library

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

## Phase 1 Notes

Currently in Phase 1 development:
- Building TUI with opentui
- API calls are mocked for development
- Backend integration comes in Phase 2

# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Expo Router screens and layouts (e.g., `_layout.tsx`, `+not-found.tsx`, `(tabs)/index.tsx`).
- `components/`: Reusable UI (e.g., `components/ui/TabBarBackground.tsx`, `ThemedText.tsx`).
- `api/`: API clients and types (e.g., `login-api.tsx`, `types.ts`).
- `contexts/`: Global state via React Context (e.g., `AuthContext.tsx`).
- `constants/`: Shared constants (e.g., `index.ts`, `Colors.ts`).
- `hooks/`, `types/`, `assets/`, `style/`, `scripts/`: Custom hooks, TS types, static assets, styles, and utilities.

## Build, Test, and Development Commands
- `npm run start`: Start Expo dev server (choose iOS/Android/Web).
- `npm run ios` | `npm run android` | `npm run web`: Platform-specific dev.
- `npm run lint`: Lint with ESLint + Expo config.
- `node scripts/reset-project.js`: Reset to a clean skeleton (moves or deletes project dirs).
- Production builds: use EAS (`eas.json` present). Example: `eas build --platform ios|android`.

## Coding Style & Naming Conventions
- **Language**: TypeScript (`.tsx` for screens/components, `.ts` for utilities/types).
- **Components**: PascalCase (e.g., `ThemedView.tsx`); **hooks**: `useXxx` (e.g., `useColorScheme.ts`).
- **Routing**: Expo Router conventions (`_layout.tsx`, route groups `(group)`, dynamic `[id].tsx`).
- **Styling**: Tailwind via NativeWind (`tailwind.config.js`). Prefer utility classes over inline styles.
- **Linting**: Follow ESLint rules (`eslint-config-expo`). Keep imports ordered and unused code removed.

## Testing Guidelines
- No test runner configured yet. If adding tests, prefer Jest + React Native Testing Library.
- Place tests under `__tests__/` with `*.test.tsx`. Aim for critical flows (auth, navigation, API errors).
- Add `npm test` and configure CI before enforcing coverage.

## Commit & Pull Request Guidelines
- **Commits**: Imperative, concise, scoped. Examples: `feat(auth): persist token`, `fix(api): handle 401`.
- **PRs**: Clear description, linked issues, screenshots for UI changes, and a test plan (devices/platforms).
- Keep changes focused; update docs when touching `api/`, `contexts/`, or routing under `app/`.

## Security & Configuration Tips
- Do not hardcode secrets. `constants/index.ts` currently sets `API_BASE_URL`; move to Expo config/EAS Secrets.
- Store auth securely (uses `AsyncStorage`). Avoid logging tokens and user PII.
- Keep environment-specific values out of VCS; document required vars in README.

## Architecture Overview
- Expo + Expo Router for navigation; React Context for auth; API layer in `api/`.
- Tailwind/NativeWind for styling; strict TS (`tsconfig.json`) for safer types.

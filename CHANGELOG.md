refactor: Maintainability.

## Changes
- Sets up a yarn workspace monorepo. At the moment the only package is `@erm/site`.
- Adds prettier.
- TODO(monorepo): Introduces typescript, eslint, and vite for maintainability and devx.
### `@ethroadmap/site`
- Handles firebase setup in `~/lib/firebase.ts`
- removes unused modal element.
- TODO: and uses a `.env` file for firebase configuration.
- Generally expunges constructing elements by DOM manipulation at runtime via the following.
- Adds the `react`, `react-router-dom` and `@react-spring/web` dependencies.
- Refactors the monolithic `index.html` into react components under `~/components/`.
- Refactors the monolithic `script.js` into typescript modules under `~/lib/`.
- Relocates styles to their narrowest scope, declared directly in the react component where possible.
- Relocates animations to their narrowest scope, declared directly in the react component where possible.
- The various image assets are relocated to `~/assets`.
- Uses `react-router` for managing links and pages.
- Handles google analytics setup in `~/lib/google-analytics.ts` and creates a shared header in `~/components/shared/Head.tsx` which supplies the `GTAG_ID` argument to the async script element.

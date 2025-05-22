### Change 01

- **Where**: `/postcss.config.mjs` and `/next.config.js` file
- **What**: Removed `/postcss.config.mjs` and `/next.config.js`
- **Why**: To eliminate redundant config, avoid build conflicts, and ensure Tailwind + Autoprefixer are properly applied

### Change 02

- **Where**: `/app/page.tsx`
- **What**: Applied dynamic imports for Hero, Features, Gallery, and FontShowcase
- **Why**: To reduce initial JavaScript bundle and improve First Contentful Paint (FCP) and overall performance

### Change 03

- **Where**: `/public/7670835-uhd_3840_2160_30fps.mp4`
- **What**: Renamed to `/2.mp4`
- **Why**: To prevent error for Hero section

### Change 04

- **Where**: `/app/components/ClientFontLoader.tsx`, `/app/layout.tsx`, and `/app/page.tsx`
- **What**: Added client-side scroll listener to defer loading Google Fonts until user scrolls
- **Why**: Significantly improves initial page load by delaying 40+ font downloads until after initial interaction

### Change 01

**Where**: `/postcss.config.mjs` and `/next.config.js` file
**What**: Removed `/postcss.config.mjs` and `/next.config.js`
**Why**: To eliminate redundant config, avoid build conflicts, and ensure Tailwind + Autoprefixer are properly applied

### Change 02

**Where**: `/app/page.tsx`
**What**: Applied dynamic imports for Hero, Features, Gallery, and FontShowcase
**Why**: To reduce initial JavaScript bundle and improve First Contentful Paint (FCP) and overall performance

### Change 03

**Where**: `/public/7670835-uhd_3840_2160_30fps.mp4`
**What**: Renamed to `/2.mp4`.
**Why**: To prevent error for Hero section

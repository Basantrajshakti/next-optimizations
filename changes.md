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

### Change 05

- **Where**: `/app/components/Gallery.tsx`
- **What**: Added next Image component
- **Why**: Fixed extremely slow image loading caused by large PNGs + undefined sizing. Now images load faster and are responsive without layout shifts

### Change 06

- **Where**: `/app/components/BlogPostCard.tsx`
- **What**: Added next Image component
- **Why**: To improve performance via lazy-loading, format optimization, and layout stability

### Change 07

- **Where**: `/app/blog/page.tsx`, `/app/blog/[slug]/page.tsx` and `/app/constants/blogPosts.tsx`
- **What**: Constants extracted and dynamic route created
- **Why**: To improve visual presentation and provide a complete blog post experience

### Change 08

- **Where**: `/app/components/FontShowcase.tsx` and `/app/constants/fonts.ts`
- **What**: Constants extracted
- **Why**: Better management of constants

### Change 09

- **Where**: `/app/loading.tsx`
- **What**: Spinner added
- **Why**: Better visual and interaction while route change

### Change 10

- **Where**: `/app/components/AppBar.tsx` and `/app/components/BlogPostCard.tsx`
- **What**: Set prefetch to false
- **Why**: Unnecessary links need not to be fetched

### Change 11

- **Where**: `/app/components/Newsletter.tsx`
- **What**: Added form validation, controlled input, submission handling, and feedback message
- **Why**: Improves accessibility, UX, and prevents empty/invalid form submissions

### Change 12

- **Where**: `/app/demo/page.tsx`
- **What**: Replaced native <a> tag with Next.js <Link> component for internal route
- **Why**: Enables fast client-side routing and automatic prefetching as per Next.js best practices

### Change 13

- **Where**: `/app/components/PromptInput.tsx`
- **What**: Simplified state management, removed redundant hooks, improved accessibility and text colors
- **Why**: Reduces complexity without losing functionality and improves performance and readability

### Change 14

- **Where**: `/app/components/GeneratedImage.tsx`
- **What**: Replaced native <img> with optimized Next.js <Image /> and added responsive settings
- **Why**: Enables automatic format optimization, lazy-loading, and improves performance and accessibility

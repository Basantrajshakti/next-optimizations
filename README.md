# Landing site Optimization

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
- **What**: Replaced native `<a>` tag with Next.js `<Link>` component for internal route
- **Why**: Enables fast client-side routing and automatic prefetching as per Next.js best practices

### Change 13

- **Where**: `/app/components/PromptInput.tsx`
- **What**: Simplified state management, removed redundant hooks, improved accessibility and text colors
- **Why**: Reduces complexity without losing functionality and improves performance and readability

### Change 14

- **Where**: `/app/components/GeneratedImage.tsx`
- **What**: Replaced native `<img>` with optimized Next.js <Image /> and added responsive settings
- **Why**: Enables automatic format optimization, lazy-loading, and improves performance and accessibility

### Change 15

- **Where**: `/app/pricing/page.tsx`
- **What**: Fixed React key issue, converted pricing layout to responsive grid, and replaced `<a>` with `<Link>`
- **Why**: To improve layout flexibility, navigation performance, and eliminate React warnings

### Change 16

- **Where**: Multiple pages (index)
- **What**: Updated margin top and Header menu background
- **Why**: For better readeability

### Change 17

- **Where**: `/app/components/ImageCard.tsx` and `/Gallery.tsx`
- **What**: Added infinite scroll, image skeleton loading, and stabilized pagination with image cover fixes and LCP reduction
- **Why**: Prevents unnecessary image loading and ensures smooth, responsive UI for each card with optimized image loading

### Change 18

- **Where**: `/app/components/Newsletter.tsx`, `/app/components/PromptInput.tsx` and `/app/gallery/page.tsx`
- **What**: Extracted buttons
- **Why**: For better code management

### Change 19

- **Where**: `/app/components/Gallery.tsx`, `/app/demo/page.tsx`, `/app/constants/blogPosts.tsx` and `/public/[all-images and videos]`
- **What**: Files compression and conversions
- **Why**: To reduce file sizes and optimized loading with better SEO (webp are recommended over PNGs)

### Change 20

- **Where**: `/app/components/AppBar.tsx` and `/app/tutorials/page.tsx`
- **What**: Tutorials made visible and font sizings adjusted
- **Why**: For better accessibility of existing sections and responsive UI

### Change 21

- **Where**: `/public`
- **What**: File cleaning
- **Why**: Unnecessary files cleaned for cleaned bundle

### Change 22

- **Where**: `/next.config` and `package.json`
- **What**: remotePatterns added and sharp installed
- **Why**: domains are deprecated and sharp for better auto image optimizations

### Change 23

- **Where**: `/app/blog/[slug]/page.tsx`
- **What**: Added skeleton loading
- **Why**: For better UX

### Change 24

- **Where**: `/app/pricing/page.tsx`, `/app/tutorials/page.tsx`, and `/public/`
- **What**: Unnecessary links prefetch disabled and `/2.mp4` file compressed (57mb->7.3mb)
- **Why**: No meaning of prefetching pages if it doesn't exists and video was too large to be loaded on hero section as background.

### Change 25

- **Where**: `/app/components/Hero.tsx` and `/public/`
- **What**: Video renamed to 'hero-bg'
- **Why**: Meaning naming helps developer for better understandings

### Change 26

- **Where**: `/app/demo/page.tsx`
- **What**: Pexels api connected
- **Why**: To simulate real work of AI

import Link from "next/link";

export default function AppBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link prefetch={false} href="/" className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
            MagicMoments
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-8 text-xs sm:text-base">
            <Link prefetch={false} href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link prefetch={false} href="/gallery" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Gallery
            </Link>
            <Link prefetch={false} href="/blog" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Blog
            </Link>
            <Link prefetch={false} href="/tutorials" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";

export default function AppBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link prefetch={false} href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Magic Moments
          </Link>

          <div className="flex items-center space-x-8">
            <Link prefetch={false} href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link prefetch={false} href="/gallery" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Gallery
            </Link>
            <Link prefetch={false} href="/blog" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

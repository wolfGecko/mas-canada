import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/280pxmaslogo.png"
                alt="Mas Wrestling Canada"
                width={140}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">
              About
            </Link>
            <Link href="/athletes" className="text-gray-700 hover:text-red-600 font-medium">
              Athletes
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-red-600 font-medium">
              Events
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-red-600 font-medium">
              News
            </Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-red-600 font-medium">
              Get Involved
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
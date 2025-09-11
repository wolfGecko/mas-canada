import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-gray-900 text-white py-20 min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/homepage/andrew.jpg')`
        }}
      >
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mas Wrestling Canada
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the ancient sport of strength, technique, and tradition. 
            Join Canada's growing Mas Wrestling community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What is Mas Wrestling Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Mas Wrestling?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Mas Wrestling is an ancient sport that originated in Yakutia (Sakha Republic), Russia. 
                Two competitors sit across from each other and attempt to pull their opponent across a 
                dividing line using only a wooden stick called a "mas."
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This sport requires incredible core strength, technique, and mental focus. It's not just 
                about raw power - strategy and timing are crucial for victory.
              </p>
              <Link href="/about" className="text-red-600 font-semibold hover:text-red-800">
                Learn more about the sport →
              </Link>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Mas Wrestling Action Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athletes Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Athletes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Athlete 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Athlete Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Thompson</h3>
                <p className="text-red-600 font-semibold mb-3">National Champion</p>
                <p className="text-gray-700 mb-4">
                  Two-time Canadian Mas Wrestling champion with over 8 years of experience in the sport.
                </p>
                <Link href="/athletes/sarah-thompson" className="text-red-600 hover:text-red-800 font-semibold">
                  View Profile →
                </Link>
              </div>
            </div>

            {/* Athlete 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Athlete Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Marcus Chen</h3>
                <p className="text-red-600 font-semibold mb-3">Rising Star</p>
                <p className="text-gray-700 mb-4">
                  Young talent making waves in the junior divisions with exceptional technique.
                </p>
                <Link href="/athletes/marcus-chen" className="text-red-600 hover:text-red-800 font-semibold">
                  View Profile →
                </Link>
              </div>
            </div>

            {/* Athlete 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-600">Athlete Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">David Rodriguez</h3>
                <p className="text-red-600 font-semibold mb-3">Veteran Competitor</p>
                <p className="text-gray-700 mb-4">
                  15-year veteran and coach, helping develop the next generation of Canadian mas wrestlers.
                </p>
                <Link href="/athletes/david-rodriguez" className="text-red-600 hover:text-red-800 font-semibold">
                  View Profile →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/athletes" className="btn-primary">
              View All Athletes
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 font-bold text-sm mb-2">MAR 15, 2024</div>
              <h3 className="text-xl font-bold mb-3">Canadian National Championships</h3>
              <p className="text-gray-700 mb-4">Toronto, ON</p>
              <p className="text-gray-600 mb-4">
                The premier mas wrestling event in Canada featuring competitors from across the country.
              </p>
              <Link href="/events/national-championships" className="text-red-600 hover:text-red-800 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 font-bold text-sm mb-2">APR 22, 2024</div>
              <h3 className="text-xl font-bold mb-3">Western Regional Tournament</h3>
              <p className="text-gray-700 mb-4">Calgary, AB</p>
              <p className="text-gray-600 mb-4">
                Regional competition for athletes from Western Canada to qualify for nationals.
              </p>
              <Link href="/events/western-regional" className="text-red-600 hover:text-red-800 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 font-bold text-sm mb-2">MAY 10, 2024</div>
              <h3 className="text-xl font-bold mb-3">Beginner Workshop Series</h3>
              <p className="text-gray-700 mb-4">Vancouver, BC</p>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of mas wrestling in this comprehensive workshop for newcomers.
              </p>
              <Link href="/events/beginner-workshop" className="text-red-600 hover:text-red-800 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Involved?</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Whether you're looking to compete, coach, or simply learn more about this fascinating sport, 
            Mas Wrestling Canada welcomes athletes of all skill levels and backgrounds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Compete</h3>
              <p className="text-gray-700">Join tournaments and test your skills against other athletes.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Learn</h3>
              <p className="text-gray-700">Attend workshops and training sessions to master the technique.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Connect</h3>
              <p className="text-gray-700">Join our community of passionate mas wrestling enthusiasts.</p>
            </div>
          </div>

          <Link href="/get-involved" className="btn-primary mr-4">
            Get Started Today
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

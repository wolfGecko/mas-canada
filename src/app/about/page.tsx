import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Mas Wrestling</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Ancient Sport</h2>
                  <p className="text-gray-700 mb-4">
                    Mas Wrestling originated in the Sakha Republic (Yakutia) of Russia, where it has been practiced 
                    for centuries as both a sport and cultural tradition. The word "mas" refers to the wooden stick 
                    that competitors grip during the match.
                  </p>
                  <p className="text-gray-700">
                    This unique sport tests not only physical strength but also technique, balance, and mental 
                    fortitude. Unlike other wrestling disciplines, Mas Wrestling focuses on core strength and 
                    strategic positioning.
                  </p>
                </div>
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Traditional Mas Wrestling Photo</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">The Setup</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Two competitors sit facing each other</li>
                    <li>• Feet are placed against a dividing board</li>
                    <li>• Both athletes grip the wooden "mas" stick</li>
                    <li>• Arms must remain straight throughout</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">The Goal</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Pull your opponent across the center line</li>
                    <li>• Maintain grip on the mas at all times</li>
                    <li>• Keep feet against the board</li>
                    <li>• Victory achieved when opponent crosses line</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Mas Wrestling in Canada</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Mas Wrestling was introduced to Canada through cultural exchange programs and immigration from 
                  the Sakha Republic. The sport has found a welcoming home in Canada, with practitioners and 
                  enthusiasts across the country embracing both its competitive and cultural aspects.
                </p>
                <p className="mb-4">
                  Mas Wrestling Canada was established to promote the sport, organize competitions, and provide 
                  a unified structure for athletes and clubs across the nation. We work closely with international 
                  mas wrestling organizations to ensure our competitions meet world standards.
                </p>
                <p className="mb-6">
                  Today, Canadian mas wrestlers compete at the highest international levels, with several athletes 
                  representing Canada at World Championships and achieving podium finishes.
                </p>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-red-800">Our Mission</h3>
                  <p className="text-red-700">
                    To develop, promote, and govern the sport of Mas Wrestling throughout Canada while preserving 
                    its cultural heritage and fostering a community of dedicated athletes, coaches, and enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Benefits of Mas Wrestling</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Core Strength</h3>
                  <p className="text-gray-700">Develops incredible core stability and functional strength</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mental Focus</h3>
                  <p className="text-gray-700">Enhances concentration, strategy, and mental resilience</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Community</h3>
                  <p className="text-gray-700">Connects athletes through shared cultural heritage</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Learn More?</h2>
              <div className="space-x-4">
                <Link href="/get-involved" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/athletes" className="btn-secondary">
                  Meet Our Athletes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join the growing community of Mas Wrestling enthusiasts across Canada. 
              Whether you're a complete beginner or an experienced athlete, there's a place for you in our sport.
            </p>
          </div>

          {/* Getting Started Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">How to Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Find a Club</h3>
                <p className="text-gray-700">
                  Locate a Mas Wrestling club or training group in your area. We have affiliated clubs across Canada.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Attend a Workshop</h3>
                <p className="text-gray-700">
                  Join a beginner-friendly workshop to learn the basics and get hands-on instruction from experienced coaches.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Start Training</h3>
                <p className="text-gray-700">
                  Begin regular training sessions to build technique, strength, and prepare for your first competition.
                </p>
              </div>
            </div>
          </div>

          {/* Training Locations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Training Locations Across Canada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-red-600">Toronto Mas Wrestling Club</h3>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Toronto, ON</p>
                <p className="text-gray-700 mb-2"><strong>Contact:</strong> coach@torontomaswrestling.ca</p>
                <p className="text-gray-700 mb-4"><strong>Schedule:</strong> Tuesdays & Thursdays, 7-9 PM</p>
                <p className="text-sm text-gray-600">Beginner-friendly club with experienced coaches and regular competitions.</p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-red-600">The Strength Edge</h3>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> 4828 Pacific Rd NE #1, Calgary, AB</p>
                <p className="text-gray-700 mb-2"><strong>Contact:</strong> (403) 901-4141</p>
                <p className="text-gray-700 mb-4"><strong>Schedule:</strong> Thursdays 7 PM, Saturdays 1 PM</p>
                <p className="text-sm text-gray-600">Calgary's premiere 24h strength sports gym specializing in strongman and competitive athletics.</p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-red-600">Pacific Mas Wrestling Academy</h3>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Vancouver, BC</p>
                <p className="text-gray-700 mb-2"><strong>Contact:</strong> hello@pacificmas.ca</p>
                <p className="text-gray-700 mb-4"><strong>Schedule:</strong> Saturdays, 10 AM-12 PM</p>
                <p className="text-sm text-gray-600">Youth-focused program with junior development opportunities.</p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-red-600">Montreal Force Collective</h3>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Montreal, QC</p>
                <p className="text-gray-700 mb-2"><strong>Contact:</strong> contact@forceqc.ca</p>
                <p className="text-gray-700 mb-4"><strong>Schedule:</strong> Fridays, 7-9 PM</p>
                <p className="text-sm text-gray-600">Bilingual coaching available with strong community focus.</p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-red-600">Atlantic Mas Wrestling</h3>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Halifax, NS</p>
                <p className="text-gray-700 mb-2"><strong>Contact:</strong> info@atlanticmas.ca</p>
                <p className="text-gray-700 mb-4"><strong>Schedule:</strong> Sundays, 2-4 PM</p>
                <p className="text-sm text-gray-600">Growing club serving the Maritime provinces.</p>
              </div>

              <div className="border rounded-lg p-6 bg-red-50">
                <h3 className="text-xl font-bold mb-2 text-red-600">Don't See Your Area?</h3>
                <p className="text-gray-700 mb-4">
                  Interested in starting a club in your community? We provide support and resources for new clubs.
                </p>
                <Link href="/contact" className="text-red-600 hover:text-red-800 font-semibold">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>

          {/* Competition Pathways */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Competition Pathway</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Local Competitions</h3>
                  <p className="text-gray-700">Start with club-level tournaments to gain experience and build confidence.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Regional Championships</h3>
                  <p className="text-gray-700">Compete against athletes from your region to qualify for national events.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">National Championships</h3>
                  <p className="text-gray-700">The premier Canadian competition, qualifying event for international competitions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">International Competitions</h3>
                  <p className="text-gray-700">Represent Canada at World Championships and other international events.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements & What to Expect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">What You Need</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• No special equipment required to start</li>
                <li>• Comfortable athletic clothing</li>
                <li>• Indoor athletic shoes (non-marking soles)</li>
                <li>• Water bottle and towel</li>
                <li>• Willingness to learn and have fun</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Welcoming and supportive community</li>
                <li>• Focus on proper technique and safety</li>
                <li>• Progressive skill development</li>
                <li>• Opportunities to compete at your level</li>
                <li>• Cultural education about the sport's history</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8">Join thousands of Canadians who have discovered the power and tradition of Mas Wrestling.</p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block">
                Find Your Local Club
              </Link>
              <Link href="/events" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors inline-block">
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
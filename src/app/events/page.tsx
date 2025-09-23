import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const upcomingEvents = [
  {
    id: 'national-championships',
    date: 'March 15, 2024',
    title: 'Canadian National Championships',
    location: 'Toronto, ON',
    venue: 'Mattamy Athletic Centre',
    description: 'The premier mas wrestling event in Canada featuring competitors from across the country competing for national titles.',
    details: {
      registration: 'February 15, 2024',
      categories: ['Men\'s Open', 'Women\'s Open', 'Junior (U18)', 'Masters (40+)'],
      entryFee: '$75',
      contact: 'nationals@maswrestlingcanada.ca'
    },
    featured: true
  },
  {
    id: 'western-regional',
    date: 'April 22, 2024',
    title: 'Western Regional Tournament',
    location: 'Calgary, AB',
    venue: 'Calgary Strength Academy',
    description: 'Regional competition for athletes from Western Canada to qualify for nationals and gain competitive experience.',
    details: {
      registration: 'March 20, 2024',
      categories: ['Men\'s Open', 'Women\'s Open', 'Junior (U18)'],
      entryFee: '$50',
      contact: 'western@maswrestlingcanada.ca'
    }
  },
  {
    id: 'beginner-workshop',
    date: 'May 10, 2024',
    title: 'Beginner Workshop Series',
    location: 'Vancouver, BC',
    venue: 'Pacific Mas Wrestling Academy',
    description: 'Comprehensive workshop series for newcomers to learn fundamentals of mas wrestling in a supportive environment.',
    details: {
      registration: 'April 10, 2024',
      categories: ['Beginner (All Ages)', 'Introduction to Competition'],
      entryFee: '$25',
      contact: 'workshops@maswrestlingcanada.ca'
    }
  },
  {
    id: 'quebec-open',
    date: 'June 8, 2024',
    title: 'Quebec Open Championship',
    location: 'Montreal, QC',
    venue: 'Montreal Force Collective',
    description: 'Provincial championship for Quebec athletes with bilingual coaching and cultural celebration.',
    details: {
      registration: 'May 8, 2024',
      categories: ['Men\'s Open', 'Women\'s Open', 'Youth (U16)'],
      entryFee: '$60',
      contact: 'quebec@maswrestlingcanada.ca'
    }
  },
  {
    id: 'summer-camp',
    date: 'July 15-17, 2024',
    title: 'National Training Camp',
    location: 'Winnipeg, MB',
    venue: 'University of Manitoba',
    description: 'Intensive three-day training camp with international coaches and elite athlete development.',
    details: {
      registration: 'June 1, 2024',
      categories: ['Elite Development', 'Coach Certification'],
      entryFee: '$200 (includes meals & accommodation)',
      contact: 'camp@maswrestlingcanada.ca'
    }
  },
  {
    id: 'atlantic-regional',
    date: 'August 12, 2024',
    title: 'Atlantic Regional Championships',
    location: 'Halifax, NS',
    venue: 'Dalplex',
    description: 'Regional championship serving the Maritime provinces with strong community focus.',
    details: {
      registration: 'July 12, 2024',
      categories: ['Men\'s Open', 'Women\'s Open', 'Masters (35+)'],
      entryFee: '$55',
      contact: 'atlantic@maswrestlingcanada.ca'
    }
  }
];

export default function Events() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Competitions</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join us at mas wrestling events across Canada. From beginner workshops to elite competitions,
              {"there's"} an event for every skill level and interest.
            </p>
          </div>

          {/* Featured Event */}
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.id} className="bg-red-600 text-white rounded-lg p-8 mb-12">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold mb-2">FEATURED EVENT</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h2>
                <div className="text-xl">{event.date} • {event.location}</div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <p className="mb-6">{event.description}</p>
                  <div className="space-y-2">
                    <div><strong>Venue:</strong> {event.venue}</div>
                    <div><strong>Registration Deadline:</strong> {event.details.registration}</div>
                    <div><strong>Entry Fee:</strong> {event.details.entryFee}</div>
                    <div><strong>Contact:</strong> {event.details.contact}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Competition Categories</h3>
                  <ul className="space-y-2 mb-6">
                    {event.details.categories.map((category, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {category}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Upcoming Events Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.filter(event => !event.featured).map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-gray-600">Event Photo</span>
                  </div>
                  <div className="p-6">
                    <div className="text-red-600 font-bold text-sm mb-2">{event.date.toUpperCase()}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-3">{event.location}</p>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                        <span><strong>Entry:</strong> {event.details.entryFee}</span>
                        <span><strong>Reg by:</strong> {event.details.registration}</span>
                      </div>
                      <Link href="/contact" className="w-full btn-primary text-center block">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Calendar Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">2024 Competition Calendar</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Event</th>
                    <th className="text-left py-3 px-4">Location</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Mar 15</td>
                    <td className="py-3 px-4 font-semibold">Canadian Nationals</td>
                    <td className="py-3 px-4">Toronto, ON</td>
                    <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Championship</span></td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Open</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Apr 22</td>
                    <td className="py-3 px-4 font-semibold">Western Regional</td>
                    <td className="py-3 px-4">Calgary, AB</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Regional</span></td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Open</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">May 10</td>
                    <td className="py-3 px-4 font-semibold">Beginner Workshop</td>
                    <td className="py-3 px-4">Vancouver, BC</td>
                    <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Workshop</span></td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Open</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Jun 8</td>
                    <td className="py-3 px-4 font-semibold">Quebec Open</td>
                    <td className="py-3 px-4">Montreal, QC</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Provincial</span></td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Open</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">Jul 15-17</td>
                    <td className="py-3 px-4 font-semibold">National Training Camp</td>
                    <td className="py-3 px-4">Winnipeg, MB</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Training</span></td>
                    <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Registration</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Aug 12</td>
                    <td className="py-3 px-4 font-semibold">Atlantic Regional</td>
                    <td className="py-3 px-4">Halifax, NS</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Regional</span></td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Open</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Registration Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">How to Register</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <div>
                      <strong>Choose Your Event:</strong> Review the event details and select the competition or workshop that suits your skill level.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <div>
                      <strong>Check Requirements:</strong> Ensure you meet any prerequisites and have necessary documentation (medical clearance if required).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <div>
                      <strong>Submit Registration:</strong> Contact the event organizer or fill out the registration form before the deadline.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <div>
                      <strong>Pay Entry Fee:</strong> Complete payment as specified by the event organizer.
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">What to Bring</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Athletic clothing (shorts/leggings, t-shirt)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Indoor athletic shoes with non-marking soles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Water bottle and towel
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Valid ID and registration confirmation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Medical clearance (if required for competition)
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
                  <p className="text-blue-700 text-sm">
                    First time competing? Contact us for guidance on event selection and preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join hundreds of athletes across Canada who compete in mas wrestling events throughout the year.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" className="btn-primary">
                Get Registration Information
              </Link>
              <Link href="/get-involved" className="btn-secondary">
                Find a Training Club
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
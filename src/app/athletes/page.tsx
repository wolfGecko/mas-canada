import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const athletes = [
  {
    id: 'sarah-thompson',
    name: 'Sarah Thompson',
    title: 'National Champion',
    bio: 'Two-time Canadian Mas Wrestling champion with over 8 years of experience in the sport.',
    achievements: ['2023 National Champion', '2022 National Champion', 'World Championships Bronze Medal'],
    province: 'Ontario',
    experience: '8 years'
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Rising Star',
    bio: 'Young talent making waves in the junior divisions with exceptional technique.',
    achievements: ['2023 Junior National Champion', 'Provincial Champion', 'Rising Talent Award'],
    province: 'British Columbia',
    experience: '3 years'
  },
  {
    id: 'david-rodriguez',
    name: 'David Rodriguez',
    title: 'Veteran Competitor',
    bio: '15-year veteran and coach, helping develop the next generation of Canadian mas wrestlers.',
    achievements: ['5x National Champion', 'World Championships Silver Medal', 'Coach of the Year 2022'],
    province: 'Alberta',
    experience: '15 years'
  },
  {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    title: 'Provincial Champion',
    bio: 'Dominant force in the women\'s division with incredible technique and determination.',
    achievements: ['Provincial Champion', 'Regional Champion', 'Technique Excellence Award'],
    province: 'Quebec',
    experience: '5 years'
  },
  {
    id: 'james-mitchell',
    name: 'James Mitchell',
    title: 'Masters Division Champion',
    bio: 'Proving that age is just a number in the masters division with consistent performance.',
    achievements: ['Masters National Champion', '40+ Division Champion', 'Sportsmanship Award'],
    province: 'Nova Scotia',
    experience: '12 years'
  },
  {
    id: 'sophia-nakamura',
    name: 'Sophia Nakamura',
    title: 'Technical Specialist',
    bio: 'Known for her innovative techniques and analytical approach to the sport.',
    achievements: ['Technical Innovation Award', 'Regional Champion', 'Junior Coach Certification'],
    province: 'Manitoba',
    experience: '6 years'
  }
];

export default function Athletes() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Athletes</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated men and women who represent the strength and spirit of Mas Wrestling in Canada.
              From rising stars to seasoned veterans, each athlete brings their unique story and achievements to our growing community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {athletes.map((athlete) => (
              <div key={athlete.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-600">Photo of {athlete.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{athlete.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{athlete.title}</p>
                  <p className="text-gray-700 mb-4">{athlete.bio}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span><strong>Province:</strong> {athlete.province}</span>
                      <span><strong>Experience:</strong> {athlete.experience}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-600">
                      {athlete.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="mb-1">• {achievement}</li>
                      ))}
                      {athlete.achievements.length > 2 && (
                        <li className="text-gray-500">• +{athlete.achievements.length - 2} more</li>
                      )}
                    </ul>
                  </div>

                  <Link 
                    href={`/athletes/${athlete.id}`}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">
                Are you competing in Mas Wrestling and want to be featured on our website? 
                {"We'd"} love to showcase your achievements and help grow the sport together.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us to Be Featured
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
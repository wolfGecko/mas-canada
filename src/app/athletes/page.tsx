import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { pool, mapDbRowToAthlete } from '@/lib/db';
import type { Athlete } from '@/types/athlete';

async function getAthletes(): Promise<Athlete[]> {
  try {
    const result = await pool.query('SELECT * FROM athletes ORDER BY name ASC');
    return result.rows.map(mapDbRowToAthlete);
  } catch (error) {
    console.error('Error fetching athletes:', error);
    return [];
  }
}

export default async function Athletes() {
  const athletes = await getAthletes();
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
                      <span><strong>Province:</strong> {athlete.stats?.province || '-'}</span>
                      <span><strong>Experience:</strong> {athlete.stats?.experience || '-'}</span>
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
                    href={`/athletes/${athlete.slug}`}
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
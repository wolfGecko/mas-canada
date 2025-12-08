import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pool, mapDbRowToAthlete } from '@/lib/db';
import type { Athlete } from '@/types/athlete';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getAthlete(slug: string): Promise<Athlete | null> {
  try {
    const result = await pool.query('SELECT * FROM athletes WHERE slug = $1', [slug]);
    if (result.rows.length === 0) {
      return null;
    }
    return mapDbRowToAthlete(result.rows[0]);
  } catch (error) {
    console.error('Error fetching athlete:', error);
    return null;
  }
}

export default async function AthleteProfile({ params }: PageProps) {
  const { slug } = await params;
  const athlete = await getAthlete(slug);

  if (!athlete) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-red-600">Home</Link>
              <span>›</span>
              <Link href="/athletes" className="hover:text-red-600">Athletes</Link>
              <span>›</span>
              <span className="text-gray-900">{athlete.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="bg-gray-300 w-full md:w-64 h-80 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600">Photo of {athlete.name}</span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{athlete.name}</h1>
                    <p className="text-red-600 font-semibold text-xl mb-4">{athlete.title}</p>
                    <p className="text-gray-700 text-lg mb-6">{athlete.bio}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Province:</span>
                        <p className="text-gray-600">{athlete.stats.province}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Experience:</span>
                        <p className="text-gray-600">{athlete.stats.experience}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Weight Class:</span>
                        <p className="text-gray-600">{athlete.stats.weightClass}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Club:</span>
                        <p className="text-gray-600">{athlete.stats.club}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {athlete.fullBio && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Biography</h2>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {athlete.fullBio}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Major Achievements</h3>
                <ul className="space-y-2">
                  {athlete.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competition History */}
              {athlete.competitionHistory && athlete.competitionHistory.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Competition History</h3>
                  <div className="space-y-4">
                    {athlete.competitionHistory.map((comp, index) => (
                      <div key={index} className="border-l-4 border-red-600 pl-4">
                        <div className="font-semibold text-gray-900">{comp.event}</div>
                        <div className="text-sm text-gray-600">{comp.year}</div>
                        <div className="text-red-600 font-medium">{comp.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Training Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Coach:</span>
                    <p className="text-gray-600">{athlete.stats.coach}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Training Location:</span>
                    <p className="text-gray-600">{athlete.stats.city}, {athlete.stats.province}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Club:</span>
                    <p className="text-gray-600">{athlete.stats.club}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Athletes */}
          <div className="mt-12 text-center">
            <Link href="/athletes" className="btn-primary">
              ← Back to All Athletes
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const result = await pool.query('SELECT slug FROM athletes');
    return result.rows.map((row) => ({
      slug: row.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
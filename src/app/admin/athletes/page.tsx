import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import DeleteAthleteButton from '@/components/admin/DeleteAthleteButton';
import type { Athlete } from '@/types/athlete';

async function getAthletes(): Promise<Athlete[]> {
  try {
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/athletes`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch athletes');
    }

    const data = await response.json();
    return data.data.athletes || [];
  } catch (error) {
    console.error('Error fetching athletes:', error);
    return [];
  }
}

export default async function ManageAthletesPage() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  const athletes = await getAthletes();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Manage Athletes</h1>
              <p className="text-gray-600 mt-2">
                Add, edit, and remove athlete profiles
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/admin/athletes/new" className="btn-primary">
                + Add New Athlete
              </Link>
              <Link href="/admin" className="btn-secondary">
                ← Back to Dashboard
              </Link>
            </div>
          </div>

          {/* Athletes List */}
          {athletes.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-gray-600 text-lg mb-4">No athletes found.</p>
              <Link href="/admin/athletes/new" className="btn-primary">
                Create Your First Athlete
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Province</th>
                    <th className="px-6 py-4 text-left font-semibold">Experience</th>
                    <th className="px-6 py-4 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {athletes.map((athlete) => (
                    <tr key={athlete.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{athlete.name}</td>
                      <td className="px-6 py-4 text-gray-600">{athlete.title}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {athlete.stats?.province || '-'}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {athlete.stats?.experience || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/athletes/${athlete.id}/edit`}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                          >
                            Edit
                          </Link>
                          <DeleteAthleteButton
                            athleteId={athlete.id}
                            athleteName={athlete.name}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Summary */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-sm text-gray-600">
                  Total Athletes: <span className="font-semibold">{athletes.length}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { auth } from '@/auth';
import { redirect, notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AthleteForm from '@/components/admin/AthleteForm';
import type { Athlete } from '@/types/athlete';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getAthlete(id: string): Promise<Athlete | null> {
  try {
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/athletes/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error('Error fetching athlete:', error);
    return null;
  }
}

export default async function EditAthletePage({ params }: PageProps) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const athlete = await getAthlete(id);

  if (!athlete) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Edit Athlete</h1>
          <p className="text-gray-600 mb-8">{athlete.name}</p>

          <AthleteForm mode="edit" athlete={athlete} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

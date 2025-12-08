import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AthleteForm from '@/components/admin/AthleteForm';

export default async function NewAthletePage() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Add New Athlete</h1>

          <AthleteForm mode="create" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

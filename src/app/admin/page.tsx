import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SignOutButton } from "@/components/SignOutButton";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {session.user?.name}
              </p>
            </div>
            <SignOutButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Content Management Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <h3 className="text-xl font-bold">Manage Athletes</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Add, edit, and remove athlete profiles and achievements.
              </p>
              <Link href="/admin/athletes" className="btn-primary">
                Manage Athletes
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                <h3 className="text-xl font-bold">Manage Events</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create and update tournament and event information.
              </p>
              <button className="btn-primary opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <h3 className="text-xl font-bold">Manage News</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Post news updates and announcements to the website.
              </p>
              <button className="btn-primary opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h3 className="text-xl font-bold">Site Settings</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Configure website settings and content.
              </p>
              <button className="btn-primary opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.11 2 2 3.11 2 4.5v15C2 20.89 3.11 22 4.5 22h15c1.39 0 2.5-1.11 2.5-2.5v-15C22 3.11 20.89 2 19.5 2zm0 17h-15v-12h15v12z" />
                </svg>
                <h3 className="text-xl font-bold">Analytics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                View website traffic and user engagement metrics.
              </p>
              <button className="btn-primary opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <h3 className="text-xl font-bold">Backup & Export</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Backup website data and export content.
              </p>
              <button className="btn-primary opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">6</div>
                <div className="text-gray-600">Featured Athletes</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                <div className="text-gray-600">Upcoming Events</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">0</div>
                <div className="text-gray-600">News Articles</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">-</div>
                <div className="text-gray-600">Site Visitors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

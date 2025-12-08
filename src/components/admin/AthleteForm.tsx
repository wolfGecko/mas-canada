'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { Athlete, AthleteStats, CompetitionEntry } from '@/types/athlete';

interface AthleteFormProps {
  mode: 'create' | 'edit';
  athlete?: Athlete;
}

export default function AthleteForm({ mode, athlete }: AthleteFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Basic info state
  const [name, setName] = useState(athlete?.name || '');
  const [title, setTitle] = useState(athlete?.title || '');
  const [bio, setBio] = useState(athlete?.bio || '');
  const [fullBio, setFullBio] = useState(athlete?.fullBio || '');

  // Stats state
  const [stats, setStats] = useState<AthleteStats>(
    athlete?.stats || {
      province: '',
      city: '',
      experience: '',
      weightClass: '',
      coach: '',
      club: '',
    }
  );

  // Achievements state (dynamic array)
  const [achievements, setAchievements] = useState<string[]>(
    athlete?.achievements && athlete.achievements.length > 0
      ? athlete.achievements
      : ['']
  );

  // Competition history state (dynamic array of objects)
  const [competitionHistory, setCompetitionHistory] = useState<CompetitionEntry[]>(
    athlete?.competitionHistory && athlete.competitionHistory.length > 0
      ? athlete.competitionHistory
      : [{ year: '', event: '', result: '' }]
  );

  // Dynamic array handlers for achievements
  const addAchievement = () => setAchievements([...achievements, '']);
  const removeAchievement = (index: number) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };
  const updateAchievement = (index: number, value: string) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
  };

  // Dynamic array handlers for competition history
  const addCompetition = () =>
    setCompetitionHistory([...competitionHistory, { year: '', event: '', result: '' }]);
  const removeCompetition = (index: number) => {
    setCompetitionHistory(competitionHistory.filter((_, i) => i !== index));
  };
  const updateCompetition = (index: number, field: keyof CompetitionEntry, value: string) => {
    const updated = [...competitionHistory];
    updated[index][field] = value;
    setCompetitionHistory(updated);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const payload = {
        name,
        title,
        bio,
        fullBio,
        stats,
        achievements: achievements.filter(a => a.trim() !== ''),
        competitionHistory: competitionHistory.filter(
          c => c.year.trim() !== '' || c.event.trim() !== '' || c.result.trim() !== ''
        ),
      };

      const url = mode === 'create' ? '/api/athletes' : `/api/athletes/${athlete?.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'An error occurred');
        setIsLoading(false);
        return;
      }

      router.push('/admin/athletes');
      router.refresh();
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to save athlete');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Basic Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="title" className="block font-semibold mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="e.g., National Champion, Rising Star"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block font-semibold mb-2">
              Short Bio *
            </label>
            <textarea
              id="bio"
              required
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Brief one-line description..."
            />
          </div>

          <div>
            <label htmlFor="fullBio" className="block font-semibold mb-2">
              Full Biography
            </label>
            <textarea
              id="fullBio"
              rows={8}
              value={fullBio}
              onChange={(e) => setFullBio(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Detailed athlete biography..."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Athlete Stats</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="province" className="block font-semibold mb-2">
              Province
            </label>
            <input
              type="text"
              id="province"
              value={stats.province}
              onChange={(e) => setStats({ ...stats, province: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="block font-semibold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              value={stats.city}
              onChange={(e) => setStats({ ...stats, city: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block font-semibold mb-2">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              value={stats.experience}
              onChange={(e) => setStats({ ...stats, experience: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="e.g., 8 years"
            />
          </div>

          <div>
            <label htmlFor="weightClass" className="block font-semibold mb-2">
              Weight Class
            </label>
            <input
              type="text"
              id="weightClass"
              value={stats.weightClass}
              onChange={(e) => setStats({ ...stats, weightClass: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="e.g., 70kg"
            />
          </div>

          <div>
            <label htmlFor="coach" className="block font-semibold mb-2">
              Coach
            </label>
            <input
              type="text"
              id="coach"
              value={stats.coach}
              onChange={(e) => setStats({ ...stats, coach: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="club" className="block font-semibold mb-2">
              Club
            </label>
            <input
              type="text"
              id="club"
              value={stats.club}
              onChange={(e) => setStats({ ...stats, club: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Achievements</h2>
          <button
            type="button"
            onClick={addAchievement}
            className="btn-primary text-sm"
          >
            + Add Achievement
          </button>
        </div>

        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={achievement}
                onChange={(e) => updateAchievement(index, e.target.value)}
                className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="e.g., 2023 Canadian National Champion"
              />
              {achievements.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeAchievement(index)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Competition History Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Competition History</h2>
          <button
            type="button"
            onClick={addCompetition}
            className="btn-primary text-sm"
          >
            + Add Competition
          </button>
        </div>

        <div className="space-y-4">
          {competitionHistory.map((comp, index) => (
            <div key={index} className="flex gap-2 items-start">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  type="text"
                  value={comp.year}
                  onChange={(e) => updateCompetition(index, 'year', e.target.value)}
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Year (e.g., 2023)"
                />
                <input
                  type="text"
                  value={comp.event}
                  onChange={(e) => updateCompetition(index, 'event', e.target.value)}
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Event (e.g., World Championships)"
                />
                <input
                  type="text"
                  value={comp.result}
                  onChange={(e) => updateCompetition(index, 'result', e.target.value)}
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Result (e.g., Gold Medal)"
                />
              </div>
              {competitionHistory.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCompetition(index)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Saving...' : mode === 'create' ? 'Create Athlete' : 'Update Athlete'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/athletes')}
          className="btn-secondary"
          disabled={isLoading}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DeleteAthleteButtonProps {
  athleteId: number;
  athleteName: string;
}

export default function DeleteAthleteButton({
  athleteId,
  athleteName,
}: DeleteAthleteButtonProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(
      `Are you sure you want to delete "${athleteName}"? This action cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(`/api/athletes/${athleteId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!data.success) {
        alert(`Error: ${data.error || 'Failed to delete athlete'}`);
        setIsDeleting(false);
        return;
      }

      // Refresh the page to show updated list
      router.refresh();
    } catch (error) {
      console.error('Error deleting athlete:', error);
      alert('Failed to delete athlete. Please try again.');
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}

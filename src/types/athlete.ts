// TypeScript type definitions for Athlete data

/**
 * Competition history entry
 */
export interface CompetitionEntry {
  year: string;
  event: string;
  result: string;
}

/**
 * Athlete stats object containing location and training information
 */
export interface AthleteStats {
  province: string;
  city: string;
  experience: string;
  weightClass: string;
  coach: string;
  club: string;
}

/**
 * Complete athlete type (from database)
 */
export interface Athlete {
  id: number;
  slug: string;
  name: string;
  title: string;
  bio: string;
  fullBio?: string;
  stats: AthleteStats;
  achievements: string[];
  competitionHistory: CompetitionEntry[];
  created_at?: string;
  updated_at?: string;
}

/**
 * Type for creating a new athlete (no id or timestamps)
 */
export type CreateAthleteInput = Omit<Athlete, 'id' | 'created_at' | 'updated_at'>;

/**
 * Type for updating an athlete (all fields optional except id)
 */
export type UpdateAthleteInput = Partial<CreateAthleteInput> & { id: number };

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Response type for listing athletes
 */
export interface AthletesListResponse {
  athletes: Athlete[];
  total: number;
}

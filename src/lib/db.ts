// Database connection helper for PostgreSQL
import { Pool } from 'pg';
import type { Athlete, CreateAthleteInput } from '@/types/athlete';

/**
 * Shared database connection pool
 * Reusable across API routes and server components
 */
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

/**
 * Helper to convert database row (snake_case) to Athlete type (camelCase)
 */
export function mapDbRowToAthlete(row: Record<string, unknown>): Athlete {
  return {
    id: row.id as number,
    slug: row.slug as string,
    name: row.name as string,
    title: row.title as string,
    bio: row.bio as string,
    fullBio: row.full_bio as string | undefined,
    stats: row.stats as Athlete['stats'],
    achievements: row.achievements as string[],
    competitionHistory: row.competition_history as Athlete['competitionHistory'],
    created_at: row.created_at as string | undefined,
    updated_at: row.updated_at as string | undefined,
  };
}

/**
 * Helper to convert Athlete input (camelCase) to database fields (snake_case)
 */
export function mapAthleteToDbFields(athlete: CreateAthleteInput) {
  return {
    slug: athlete.slug,
    name: athlete.name,
    title: athlete.title,
    bio: athlete.bio,
    full_bio: athlete.fullBio || null,
    stats: JSON.stringify(athlete.stats),
    achievements: JSON.stringify(athlete.achievements),
    competition_history: JSON.stringify(athlete.competitionHistory),
  };
}

// Database connection helper for PostgreSQL
import { Pool } from 'pg';

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
export function mapDbRowToAthlete(row: any) {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    title: row.title,
    bio: row.bio,
    fullBio: row.full_bio,
    stats: row.stats,
    achievements: row.achievements,
    competitionHistory: row.competition_history,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

/**
 * Helper to convert Athlete input (camelCase) to database fields (snake_case)
 */
export function mapAthleteToDbFields(athlete: any) {
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

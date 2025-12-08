import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { pool, mapDbRowToAthlete } from '@/lib/db';
import type { Athlete, CreateAthleteInput, AthletesListResponse } from '@/types/athlete';

/**
 * GET /api/athletes - List all athletes
 */
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM athletes ORDER BY name ASC'
    );

    const athletes: Athlete[] = result.rows.map(mapDbRowToAthlete);

    const response: AthletesListResponse = {
      athletes,
      total: athletes.length,
    };

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error fetching athletes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch athletes' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/athletes - Create a new athlete
 */
export async function POST(request: Request) {
  try {
    // Check authentication
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body: CreateAthleteInput = await request.json();

    // Validate required fields
    if (!body.name || !body.title || !body.bio) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, title, bio' },
        { status: 400 }
      );
    }

    // Generate slug from name
    const slug = body.slug || generateSlug(body.name);

    // Check if slug already exists
    const existingResult = await pool.query(
      'SELECT id FROM athletes WHERE slug = $1',
      [slug]
    );

    if (existingResult.rows.length > 0) {
      return NextResponse.json(
        { success: false, error: 'An athlete with this name already exists' },
        { status: 409 }
      );
    }

    // Insert new athlete
    const result = await pool.query(
      `INSERT INTO athletes (slug, name, title, bio, full_bio, stats, achievements, competition_history)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [
        slug,
        body.name,
        body.title,
        body.bio,
        body.fullBio || null,
        JSON.stringify(body.stats || {}),
        JSON.stringify(body.achievements || []),
        JSON.stringify(body.competitionHistory || []),
      ]
    );

    const athlete = mapDbRowToAthlete(result.rows[0]);

    return NextResponse.json({ success: true, data: athlete }, { status: 201 });
  } catch (error) {
    console.error('Error creating athlete:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create athlete' },
      { status: 500 }
    );
  }
}

/**
 * Generate URL-friendly slug from name
 */
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

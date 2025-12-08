import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { pool, mapDbRowToAthlete } from '@/lib/db';
import type { UpdateAthleteInput } from '@/types/athlete';

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/athletes/[id] - Get a single athlete by ID
 */
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const athleteId = parseInt(id, 10);

    if (isNaN(athleteId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid athlete ID' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'SELECT * FROM athletes WHERE id = $1',
      [athleteId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Athlete not found' },
        { status: 404 }
      );
    }

    const athlete = mapDbRowToAthlete(result.rows[0]);
    return NextResponse.json({ success: true, data: athlete });
  } catch (error) {
    console.error('Error fetching athlete:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch athlete' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/athletes/[id] - Update an athlete
 */
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    // Check authentication
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const athleteId = parseInt(id, 10);

    if (isNaN(athleteId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid athlete ID' },
        { status: 400 }
      );
    }

    const body: Partial<UpdateAthleteInput> = await request.json();

    // Check if athlete exists
    const existingResult = await pool.query(
      'SELECT id FROM athletes WHERE id = $1',
      [athleteId]
    );

    if (existingResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Athlete not found' },
        { status: 404 }
      );
    }

    // Build update query dynamically based on provided fields
    const updates: string[] = [];
    const values: unknown[] = [];
    let paramIndex = 1;

    if (body.name !== undefined) {
      updates.push(`name = $${paramIndex++}`);
      values.push(body.name);
    }
    if (body.title !== undefined) {
      updates.push(`title = $${paramIndex++}`);
      values.push(body.title);
    }
    if (body.bio !== undefined) {
      updates.push(`bio = $${paramIndex++}`);
      values.push(body.bio);
    }
    if (body.fullBio !== undefined) {
      updates.push(`full_bio = $${paramIndex++}`);
      values.push(body.fullBio);
    }
    if (body.stats !== undefined) {
      updates.push(`stats = $${paramIndex++}`);
      values.push(JSON.stringify(body.stats));
    }
    if (body.achievements !== undefined) {
      updates.push(`achievements = $${paramIndex++}`);
      values.push(JSON.stringify(body.achievements));
    }
    if (body.competitionHistory !== undefined) {
      updates.push(`competition_history = $${paramIndex++}`);
      values.push(JSON.stringify(body.competitionHistory));
    }
    if (body.slug !== undefined) {
      updates.push(`slug = $${paramIndex++}`);
      values.push(body.slug);
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No fields to update' },
        { status: 400 }
      );
    }

    // Add the athlete ID as the last parameter
    values.push(athleteId);

    const result = await pool.query(
      `UPDATE athletes
       SET ${updates.join(', ')}
       WHERE id = $${paramIndex}
       RETURNING *`,
      values
    );

    const athlete = mapDbRowToAthlete(result.rows[0]);
    return NextResponse.json({ success: true, data: athlete });
  } catch (error) {
    console.error('Error updating athlete:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update athlete' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/athletes/[id] - Delete an athlete
 */
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    // Check authentication
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const athleteId = parseInt(id, 10);

    if (isNaN(athleteId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid athlete ID' },
        { status: 400 }
      );
    }

    // Check if athlete exists
    const existingResult = await pool.query(
      'SELECT id FROM athletes WHERE id = $1',
      [athleteId]
    );

    if (existingResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Athlete not found' },
        { status: 404 }
      );
    }

    // Delete the athlete
    await pool.query('DELETE FROM athletes WHERE id = $1', [athleteId]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting athlete:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete athlete' },
      { status: 500 }
    );
  }
}

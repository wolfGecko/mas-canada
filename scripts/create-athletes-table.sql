-- Athletes table for MAS Canada
-- This table stores athlete profiles with bios, achievements, and competition history

CREATE TABLE IF NOT EXISTS athletes (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT NOT NULL,
  full_bio TEXT,

  -- Stats stored as JSONB for flexibility
  -- Expected structure: { province, city, experience, weightClass, coach, club }
  stats JSONB NOT NULL DEFAULT '{}',

  -- Achievements stored as JSONB array
  -- Expected structure: ["achievement 1", "achievement 2", ...]
  achievements JSONB NOT NULL DEFAULT '[]',

  -- Competition history stored as JSONB array of objects
  -- Expected structure: [{ year, event, result }, ...]
  competition_history JSONB NOT NULL DEFAULT '[]',

  -- Metadata timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Constraints to ensure valid JSON structure
  CONSTRAINT achievements_is_array CHECK (jsonb_typeof(achievements) = 'array'),
  CONSTRAINT competition_history_is_array CHECK (jsonb_typeof(competition_history) = 'array'),
  CONSTRAINT stats_is_object CHECK (jsonb_typeof(stats) = 'object')
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_athletes_slug ON athletes(slug);
CREATE INDEX IF NOT EXISTS idx_athletes_name ON athletes(name);

-- Create trigger function for automatic updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at on row updates
DROP TRIGGER IF EXISTS update_athletes_updated_at ON athletes;
CREATE TRIGGER update_athletes_updated_at
  BEFORE UPDATE ON athletes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

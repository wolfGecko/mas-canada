// Script to run database migrations
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Read DATABASE_URL from .env.local file
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const databaseUrlMatch = envContent.match(/DATABASE_URL=(.+)/);
const databaseUrl = databaseUrlMatch ? databaseUrlMatch[1].trim() : null;

if (!databaseUrl) {
  console.error('❌ DATABASE_URL not found in .env.local');
  process.exit(1);
}

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false }
});

async function runMigrations() {
  try {
    console.log('🔄 Running database migrations...\n');

    // Run create table script
    console.log('📝 Creating athletes table...');
    const createTableSQL = fs.readFileSync(
      path.join(__dirname, 'create-athletes-table.sql'),
      'utf8'
    );
    await pool.query(createTableSQL);
    console.log('✅ Athletes table created successfully\n');

    // Run data migration script
    console.log('📝 Migrating athlete data...');
    const migrateDataSQL = fs.readFileSync(
      path.join(__dirname, 'migrate-athletes-data.sql'),
      'utf8'
    );
    await pool.query(migrateDataSQL);
    console.log('✅ Athlete data migrated successfully\n');

    // Verify data
    const result = await pool.query('SELECT COUNT(*) FROM athletes');
    console.log(`✅ Total athletes in database: ${result.rows[0].count}\n`);

    console.log('🎉 All migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();

import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'default',
  host: 'ep-wispy-truth-a4sikjb9-pooler.us-east-1.aws.neon.tech',
  database: 'verceldb',
  password: 'x9aXPO8VqCbz',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
}
});
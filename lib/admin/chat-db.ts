// Neon Postgres persistence for chat analytics.
// Falls back to the file-based store when DATABASE_URL is not set (local dev without Neon).
import type { ChatEvent } from './store';

let tableReady = false;

function getNeon() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  // Dynamic import so the module loads fine even if the package is absent
  const { neon } = require('@neondatabase/serverless');
  return neon(url) as ReturnType<typeof import('@neondatabase/serverless').neon>;
}

async function ensureTable(db: ReturnType<typeof getNeon>) {
  if (tableReady || !db) return;
  await db`
    CREATE TABLE IF NOT EXISTS chat_events (
      id          TEXT PRIMARY KEY,
      event       TEXT        NOT NULL,
      label       TEXT        NOT NULL,
      page        TEXT        NOT NULL,
      session_id  TEXT        NOT NULL,
      timestamp   TIMESTAMPTZ NOT NULL
    )
  `;
  tableReady = true;
}

export async function dbAppendEvent(event: ChatEvent): Promise<boolean> {
  const db = getNeon();
  if (!db) return false;
  await ensureTable(db);
  await db`
    INSERT INTO chat_events (id, event, label, page, session_id, timestamp)
    VALUES (${event.id}, ${event.event}, ${event.label}, ${event.page}, ${event.sessionId}, ${event.timestamp})
    ON CONFLICT (id) DO NOTHING
  `;
  return true;
}

export async function dbGetEvents(): Promise<ChatEvent[] | null> {
  const db = getNeon();
  if (!db) return null;
  await ensureTable(db);
  const rows = await db`SELECT * FROM chat_events ORDER BY timestamp ASC` as Record<string, string>[];
  return rows.map((r) => ({
    id: r.id,
    event: r.event as ChatEvent['event'],
    label: r.label,
    page: r.page,
    sessionId: r.session_id,
    timestamp: typeof r.timestamp === 'string' ? r.timestamp : new Date(r.timestamp).toISOString(),
  }));
}

export async function dbClearEvents(): Promise<boolean> {
  const db = getNeon();
  if (!db) return false;
  await ensureTable(db);
  await db`DELETE FROM chat_events`;
  return true;
}

export function isDbConfigured(): boolean {
  return !!process.env.DATABASE_URL;
}

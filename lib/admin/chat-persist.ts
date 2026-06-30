// File-backed persistence for chat events.
// In dev:  <project-root>/data/chat-events.json  (survives hot-reload)
// In prod: /tmp/chat-events.json                 (survives within a warm lambda instance)
import fs from 'fs';
import path from 'path';
import type { ChatEvent } from './store';

const FILE =
  process.env.NODE_ENV === 'production'
    ? '/tmp/chat-events.json'
    : path.join(process.cwd(), 'data', 'chat-events.json');

export function loadEvents(): ChatEvent[] {
  try {
    const raw = fs.readFileSync(FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEvents(events: ChatEvent[]): void {
  try {
    // Ensure parent directory exists (needed for /tmp on first run)
    const dir = path.dirname(FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(FILE, JSON.stringify(events), 'utf-8');
  } catch {
    // Never throw — a persistence failure must not crash the API
  }
}

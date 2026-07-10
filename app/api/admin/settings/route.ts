import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin/auth';
import { getSheetSettings, saveSheetSettings, appendToSheet } from '@/lib/admin/settings';

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getSheetSettings());
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const enabled = Boolean(body.enabled);
  const sheetUrl = typeof body.sheetUrl === 'string' ? body.sheetUrl.trim() : '';
  const webhookUrl = typeof body.webhookUrl === 'string' ? body.webhookUrl.trim() : '';

  if (webhookUrl && !webhookUrl.startsWith('https://')) {
    return NextResponse.json({ error: 'Web App URL must start with https://' }, { status: 400 });
  }
  if (sheetUrl && !sheetUrl.startsWith('https://')) {
    return NextResponse.json({ error: 'Sheet link must start with https://' }, { status: 400 });
  }
  if (enabled && !webhookUrl) {
    return NextResponse.json({ error: 'Add the Apps Script Web App URL before enabling sync' }, { status: 400 });
  }

  const saved = await saveSheetSettings({ enabled, sheetUrl, webhookUrl });
  return NextResponse.json(saved);
}

// Sends a test row through the saved webhook so the admin can verify the
// connection from the dashboard without submitting the public form.
export async function POST() {
  const session = await getSession();
  if (!session || session.role !== 'webadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const settings = await getSheetSettings();
  if (!settings.webhookUrl) {
    return NextResponse.json({ error: 'No Web App URL saved yet' }, { status: 400 });
  }

  const ok = await appendToSheet({
    receivedAt: new Date().toISOString(),
    name: 'Test Row (from admin dashboard)',
    email: 'test@wide-wings.ae',
    phone: '+971 4 335 2645',
    service: 'Connection Test',
    message: 'If you can see this row, Google Sheets sync is working.',
  });

  if (!ok && !settings.enabled) {
    return NextResponse.json({ error: 'Sync is disabled — enable it and save first' }, { status: 400 });
  }
  if (!ok) {
    return NextResponse.json({ error: 'Could not reach the Web App URL. Check the deployment is set to "Anyone" access.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

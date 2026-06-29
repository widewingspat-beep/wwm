import { getPayload } from 'payload';
import config from '../payload.config';

let cached: Awaited<ReturnType<typeof getPayload>> | null = null;

export async function getPayloadInstance() {
  if (cached) return cached;
  cached = await getPayload({ config });
  return cached;
}

export async function findPageBySlug(slug: string) {
  const payload = await getPayloadInstance();
  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return res.docs[0] ?? null;
}

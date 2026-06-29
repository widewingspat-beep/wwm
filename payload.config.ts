import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  routes: {
    admin: '/cms',
    api: '/api/cms',
    graphQL: '/api/cms/graphql',
    graphQLPlayground: '/api/cms/graphql-playground',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        { name: 'alt', type: 'text' },
      ],
    },
    {
      slug: 'pages',
      admin: { useAsTitle: 'title', defaultColumns: ['title', 'slug', 'updatedAt'] },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true, admin: { description: 'URL path, e.g. about-us' } },
        {
          name: 'blocks',
          type: 'blocks',
          blocks: [
            {
              slug: 'hero',
              labels: { singular: 'Hero Section', plural: 'Hero Sections' },
              fields: [
                { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the heading (optional)' } },
                { name: 'heading', type: 'text', required: true },
                { name: 'subheading', type: 'textarea' },
                { name: 'image', type: 'upload', relationTo: 'media' },
              ],
            },
            {
              slug: 'textSection',
              labels: { singular: 'Text Section', plural: 'Text Sections' },
              fields: [
                { name: 'heading', type: 'text' },
                { name: 'body', type: 'richText' },
              ],
            },
            {
              slug: 'imageBlock',
              labels: { singular: 'Image', plural: 'Images' },
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { name: 'caption', type: 'text' },
              ],
            },
            {
              slug: 'twoColumn',
              labels: { singular: 'Two Column', plural: 'Two Column Sections' },
              fields: [
                { name: 'leftHeading', type: 'text' },
                { name: 'leftBody', type: 'richText' },
                { name: 'rightHeading', type: 'text' },
                { name: 'rightBody', type: 'richText' },
              ],
            },
            {
              slug: 'cta',
              labels: { singular: 'Call to Action', plural: 'Call to Action Blocks' },
              fields: [
                { name: 'heading', type: 'text', required: true },
                { name: 'body', type: 'textarea' },
                { name: 'buttonLabel', type: 'text', required: true },
                { name: 'buttonHref', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-only-secret-replace-in-production',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || `file:${path.resolve(dirname, 'payload.db')}`,
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  onInit: async (payload) => {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'about-us' } },
      limit: 1,
    });
    if (existing.docs.length > 0) return;

    const para = (text: string) => ({
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            direction: 'ltr',
            textFormat: 0,
            textStyle: '',
            children: [
              { type: 'text', text, format: 0, detail: 0, mode: 'normal', style: '', version: 1 },
            ],
          },
        ],
      },
    });

    await payload.create({
      collection: 'pages',
      data: {
        title: 'About Us',
        slug: 'about-us',
        blocks: [
          {
            blockType: 'hero',
            eyebrow: 'About Wide Wings Media',
            heading: 'A digital marketing partner you can trust.',
            subheading:
              'We are a Dubai-based agency driving growth through SEO, paid media, content, and branding for ambitious brands across the UAE and GCC.',
          },
          {
            blockType: 'textSection',
            heading: 'Who we are',
            body: para(
              'Wide Wings Media is a fully in-house digital marketing company in Dubai with a team of 50+ specialists. We work with brands across 15+ industries to design, build, and grow their digital presence.',
            ),
          },
          {
            blockType: 'textSection',
            heading: 'How we work',
            body: para(
              'Every engagement starts with strategy. We then deploy small, senior teams who execute end-to-end — from creative to media buying to analytics — under one roof.',
            ),
          },
          {
            blockType: 'cta',
            heading: 'Ready to grow with us?',
            body: 'Tell us where you want to take your brand. We will tell you how we will get you there.',
            buttonLabel: 'Get in touch',
            buttonHref: '/contact',
          },
        ],
      },
    });
    payload.logger.info('Seeded About Us page in Payload.');
  },
});

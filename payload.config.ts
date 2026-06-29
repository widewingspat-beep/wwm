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
      slug: 'teamMembers',
      labels: { singular: 'Team Member', plural: 'Team Members' },
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'order'],
        description: 'Members shown in the Team Grid block on About Us.',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true, admin: { description: 'Job title shown beneath the name.' } },
        { name: 'imageUrl', type: 'text', required: true, admin: { description: 'Path or URL to the photo (e.g. /Mina.webp).' } },
        { name: 'order', type: 'number', defaultValue: 0, admin: { description: 'Lower numbers appear first.' } },
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
            {
              slug: 'teamGrid',
              labels: { singular: 'Team Grid', plural: 'Team Grids' },
              fields: [
                {
                  name: 'eyebrow',
                  type: 'text',
                  defaultValue: 'FEATURING',
                  admin: { description: 'Renders every Team Member document sorted by order. To add/remove team members, edit the Team Members collection.' },
                },
                { name: 'heading', type: 'text', defaultValue: 'Expert Team Members' },
                { name: 'subheading', type: 'text', defaultValue: 'The best people to support your project' },
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
    // Seed team members from the legacy hardcoded list if the collection is empty.
    const teamSeed = [
      { name: 'Mina Banoub',              role: 'Sales Director',           imageUrl: '/Mina.webp',                  order: 10 },
      { name: 'Alaa Mokhless Ali',        role: 'Account Manager',          imageUrl: '/Alaa.webp',                  order: 20 },
      { name: 'Nouran Mamdouh',           role: 'Account Manager',          imageUrl: '/nowran.webp',                order: 30 },
      { name: 'Ebtehal Elnoras',          role: 'Account Manager',          imageUrl: '/Ebtehal.webp',               order: 40 },
      { name: 'Rawan Akram',              role: 'Account Manager',          imageUrl: '/RawanAkram.webp',            order: 50 },
      { name: 'Mohamed Shaarawi',         role: 'Full-Stack Web Developer', imageUrl: '/Shaarawi.webp',              order: 60 },
      { name: 'Lawrence Peter Watyabuko', role: 'SEO Specialist',           imageUrl: '/Lawrence.webp',              order: 70 },
      { name: 'Mohamed Ibrahim Juba',     role: 'Graphic Designer',         imageUrl: '/MohamedIbrahimJuba.webp',    order: 80 },
      { name: 'Mahmoud Ismail',           role: 'Graphic Designer',         imageUrl: '/MahmoudIsmail.webp',         order: 90 },
      { name: 'Prasanna Veeramani',       role: 'Graphic Designer',         imageUrl: '/Prasanna.webp',              order: 100 },
      { name: 'Nesma Ibrahim',            role: 'Graphic Designer',         imageUrl: '/Nesma.webp',                 order: 110 },
      { name: 'Asmaa Mostafa',            role: 'Content Creator',          imageUrl: '/Asmaa.webp',                 order: 120 },
      { name: 'Doha Ghareeb',             role: 'Content Creator',          imageUrl: '/Doha.webp',                  order: 130 },
      { name: 'Eslam Deif',               role: 'Media Buyer',              imageUrl: '/Eslam.webp',                 order: 140 },
      { name: 'Kareem Ayman Abdu',        role: 'Media Buyer',              imageUrl: '/Kareemayman.webp',           order: 150 },
      { name: 'Rana Amir Irshad',         role: 'Cash Flow In-charge',      imageUrl: '/Amir.webp',                  order: 160 },
    ];
    const teamCount = await payload.count({ collection: 'teamMembers' });
    if (teamCount.totalDocs === 0) {
      for (const m of teamSeed) {
        await payload.create({ collection: 'teamMembers', data: m });
      }
      payload.logger.info(`Seeded ${teamSeed.length} team members.`);
    }

    // Build a Lexical document from one or more plain-text paragraphs.
    const richText = (...paragraphs: string[]) => ({
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: paragraphs.map((text) => ({
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
        })),
      },
    });

    // Mirrors the visible text on /about-us (LegacyAboutUs.tsx). The unique
    // sections on the live page (founder cards, team grid) don't map to the
    // 5 generic block types in this spike — for production we'd add
    // `founderCard` and `teamGrid` block types and reuse the existing CSS.
    const aboutUsBlocks = [
      {
        blockType: 'hero',
        eyebrow: 'About Wide Wings Media',
        heading: 'A Digital Marketing Partner You Can Trust',
        subheading:
          'Empowering brands to break boundaries and soar beyond expectations.',
      },
      {
        blockType: 'textSection',
        heading: 'We believe in limitless potential.',
        body: richText(
          'At Wide Wings Media, our mission is to help brands break free from boundaries and explore new horizons. With proper research, tailored plans and creative solutions, we empower businesses to spread their wings and soar beyond expectations.',
          '01. Our approach is rooted in data-driven insights, enabling us to make informed decisions that maximize return on investment (ROI) for our clients.',
          '02. We understand that every business is unique, which is why we offer tailor-made digital marketing strategies to meet the specific needs and goals of each client.',
          '03. We build lasting partnerships by combining strategic thinking with creative execution — turning ambitious visions into measurable, real-world results.',
        ),
      },
      {
        blockType: 'textSection',
        heading: 'Reem Osman — CEO & Founder',
        body: richText(
          '"As the CEO of Wide Wings Media, I carry the responsibility of every brand that puts its trust in us."',
          "Our team's expertise and dedication are what let me make that promise with confidence. Together, we turn ambitious ideas into results our clients can measure.",
        ),
      },
      {
        blockType: 'textSection',
        heading: 'Seham Batterjee — Founder',
        body: richText(
          '"I built Wide Wings Media because I believe great marketing should never feel like guesswork."',
          "Every brand that works with us gets a partner that's as invested in their growth as they are. That's the standard we hold ourselves to, every single day.",
        ),
      },
      {
        blockType: 'teamGrid',
        eyebrow: 'FEATURING',
        heading: 'Expert Team Members',
        subheading: 'The best people to support your project',
      },
      {
        blockType: 'cta',
        heading: 'Ready to spread your wings?',
        body: 'Tell us where you want to take your brand. We will tell you how we will get you there.',
        buttonLabel: 'Free Consultation',
        buttonHref: '/contact',
      },
    ] as never;

    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'about-us' } },
      limit: 1,
    });

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'pages',
        data: { title: 'About Us', slug: 'about-us', blocks: aboutUsBlocks },
      });
      payload.logger.info('Seeded About Us page in Payload.');
      return;
    }

    // Refresh the seed when the existing document is still on an older spike
    // version (no teamGrid block yet, or the very first placeholder heading).
    // Real user edits past that point are preserved.
    const doc = existing.docs[0];
    const blocks = (doc as { blocks?: Array<{ blockType?: string; heading?: string }> }).blocks ?? [];
    const firstHero = blocks.find((b) => b.blockType === 'hero');
    const hasTeamGrid = blocks.some((b) => b.blockType === 'teamGrid');
    const isStaleSeed =
      firstHero?.heading === 'A digital marketing partner you can trust.' || !hasTeamGrid;
    if (isStaleSeed) {
      await payload.update({
        collection: 'pages',
        id: doc.id,
        data: { blocks: aboutUsBlocks },
      });
      payload.logger.info('Refreshed About Us seed to current spike content.');
    }
  },
});

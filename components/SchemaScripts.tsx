// Renders one or more JSON-LD <script> blocks. Data source: lib/schema.ts.
export default function SchemaScripts({ blocks }: { blocks: Record<string, unknown>[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

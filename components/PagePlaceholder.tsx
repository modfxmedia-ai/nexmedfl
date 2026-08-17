/**
 * Temporary placeholder for a page's body content.
 * Routing, metadata, and JSON-LD are wired up for this page already, 
 * the visual design and final copy will be implemented in a later pass.
 */
export function PagePlaceholder({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <main>
      <h1>{title}</h1>
      <p>
        TODO: page content for <code>{path}</code>, design and copy coming in
        a later pass.
      </p>
    </main>
  );
}

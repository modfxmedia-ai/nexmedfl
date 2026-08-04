/**
 * Renders a JSON-LD `<script>` tag for structured data (schema.org).
 * Pass the object returned from `buildGraph()` in `lib/schema.ts`.
 *
 * The live site's JSON-LD (RankMath/WordPress) HTML-entity-escapes
 * ampersands within the embedded JSON text (e.g. titles containing "&"
 * are emitted as "&amp;", and the gravatar avatar URL's query string
 * "?s=96&d=mm&r=g" is emitted as "?s=96&amp;d=mm&amp;r=g"). We replicate
 * that exactly here so the emitted markup matches byte-for-byte.
 */
export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/&/g, "&amp;");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

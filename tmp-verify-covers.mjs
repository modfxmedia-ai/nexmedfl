const urls = ["http://localhost:3000/blogs/", "http://localhost:3001/blogs/"];

function extractImages(html) {
  const fromNext = [...html.matchAll(/[?&]url=([^&"]+)/g)].map((m) => {
    try {
      return decodeURIComponent(m[1]);
    } catch {
      return m[1];
    }
  });
  const fromSrc = [...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1]);
  const fromAlt = [...html.matchAll(/alt="([^"]+)"/g)].map((m) => m[1]);
  const images = [...fromNext, ...fromSrc].filter(
    (src) =>
      src.includes("/images/") ||
      src.includes("blob.vercel") ||
      src.includes("_next/image"),
  );
  return { images, alts: fromAlt.slice(0, 40) };
}

for (const url of urls) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const { images, alts } = extractImages(html);
    const unique = [...new Set(images)];
    const counts = {};
    for (const img of images) counts[img] = (counts[img] || 0) + 1;
    const dupes = Object.entries(counts).filter(([, n]) => n > 1);
    const titles = [...html.matchAll(/<p class="[^"]*font-semibold[^"]*"[^>]*>([^<]+)<\/p>/g)].map(
      (m) => m[1],
    );
    console.log(
      JSON.stringify(
        {
          url,
          status: res.status,
          image_refs: images.length,
          unique_images: unique.length,
          duplicates: dupes,
          unique_list: unique,
          titles: titles.slice(0, 30),
          sample_alts: alts.slice(0, 15),
        },
        null,
        2,
      ),
    );
  } catch (err) {
    console.log(JSON.stringify({ url, error: String(err) }));
  }
}

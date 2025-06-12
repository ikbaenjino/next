// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://next-zttx.vercel.app";

  // Daftar halaman statis
  const staticPages = [
    "",
    "/lokasi",
    "/beranda",
    "/tentang",  // tambahkan jika ada
    "/kontak"    // tambahkan jika ada
  ];

  const urls = staticPages.map((path) => {
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

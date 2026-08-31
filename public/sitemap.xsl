<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
  <html lang="en">
    <head>
      <title>XML Sitemap</title>
      <meta charset="UTF-8" />
      <meta name="robots" content="noindex,follow" />
      <style type="text/css">
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background: #f4fafa; color: #012453; }
        header { background: #012453; color: #fff; padding: 24px 32px; }
        header h1 { margin: 0; font-size: 20px; font-weight: 600; }
        header p { margin: 6px 0 0; font-size: 13px; color: #a9c4dc; }
        .wrap { padding: 24px 32px; }
        .count { margin: 0 0 16px; font-size: 13px; color: #345075; }
        table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e1f0f2; border-radius: 8px; overflow: hidden; }
        thead th { text-align: left; background: #eff7f8; color: #012453; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; padding: 12px 16px; border-bottom: 1px solid #e1f0f2; }
        tbody td { padding: 12px 16px; font-size: 13px; border-bottom: 1px solid #e1f0f2; vertical-align: top; }
        tbody tr:last-child td { border-bottom: none; }
        tbody tr:hover { background: #f4fafa; }
        a { color: #178498; text-decoration: none; word-break: break-all; }
        a:hover { text-decoration: underline; }
        .muted { color: #6b7a90; }
        footer { padding: 16px 32px; font-size: 12px; color: #6b7a90; }
      </style>
    </head>
    <body>
      <header>
        <h1>XML Sitemap</h1>
        <p>This is an XML sitemap for search engines. It is generated automatically and is not meant to be read by humans, but a styled view is provided for convenience.</p>
      </header>
      <div class="wrap">
        <xsl:choose>
          <xsl:when test="sitemap:sitemapindex">
            <p class="count">
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)" /> sitemap(s) in this index.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Sitemap</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
                    </td>
                    <td class="muted"><xsl:value-of select="sitemap:lastmod" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
          <xsl:otherwise>
            <p class="count">
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)" /> URL(s) in this sitemap.
            </p>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
                    </td>
                    <td class="muted"><xsl:value-of select="sitemap:lastmod" /></td>
                    <td class="muted"><xsl:value-of select="sitemap:changefreq" /></td>
                    <td class="muted"><xsl:value-of select="sitemap:priority" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:otherwise>
        </xsl:choose>
      </div>
      <footer>Ormond Spine &amp; Nerve Center</footer>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>

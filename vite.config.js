import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { BUSINESS, SEO, localBusinessSchema } from './src/config/business.js'

/**
 * Renders the SEO <head> tags (title, description, canonical, Open Graph,
 * Twitter card, geo tags and LocalBusiness JSON-LD) from src/config/business.js
 * and injects them into index.html at build time, replacing `<!-- %SEO_HEAD% -->`.
 *
 * They are emitted as STATIC HTML on purpose: WhatsApp, Facebook, LinkedIn and
 * most crawlers do not execute JavaScript when building link previews, so tags
 * added at runtime (e.g. via react-helmet) are invisible to them.
 */
function seoHead() {
  const esc = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

  const meta = (attrs) =>
    `<meta ${Object.entries(attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')} />`

  const canonical = `${BUSINESS.siteUrl}/`

  const tags = [
    `<title>${esc(SEO.title)}</title>`,
    meta({ name: 'description', content: SEO.description }),
    `<link rel="canonical" href="${canonical}" />`,
    meta({ name: 'robots', content: 'index, follow, max-image-preview:large' }),
    meta({ name: 'geo.region', content: BUSINESS.stateIsoCode }),
    meta({ name: 'geo.placename', content: BUSINESS.cityOfficial }),
    // Open Graph (WhatsApp / Facebook / LinkedIn previews)
    meta({ property: 'og:type', content: 'website' }),
    meta({ property: 'og:locale', content: 'en_IN' }),
    meta({ property: 'og:site_name', content: BUSINESS.name }),
    meta({ property: 'og:title', content: SEO.title }),
    meta({ property: 'og:description', content: SEO.description }),
    meta({ property: 'og:url', content: canonical }),
    meta({ property: 'og:image', content: SEO.ogImage }),
    meta({ property: 'og:image:width', content: '1200' }),
    meta({ property: 'og:image:height', content: '630' }),
    meta({ property: 'og:image:alt', content: SEO.ogImageAlt }),
    // Twitter / X
    meta({ name: 'twitter:card', content: 'summary_large_image' }),
    meta({ name: 'twitter:title', content: SEO.title }),
    meta({ name: 'twitter:description', content: SEO.description }),
    meta({ name: 'twitter:image', content: SEO.ogImage }),
    // Structured data — `<` escaped so the JSON can never close the script tag
    `<script type="application/ld+json">${JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c')}</script>`,
  ]

  return {
    name: 'oursafetynets-seo-head',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace('<!-- %SEO_HEAD% -->', tags.join('\n  '))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoHead()],
})
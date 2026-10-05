import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { HtmlTagDescriptor, Plugin } from 'vite'
import { defineConfig } from 'vite'
import { heroImage } from './src/data/heroImage.ts'
import { site } from './src/data/site.ts'

/**
 * Endereço público do site, usado em canonical, Open Graph e sitemap.
 * Ordem: SITE_URL (defina na Vercel se tiver domínio próprio) → domínio de produção da Vercel
 * (variável de sistema) → vazio (as tags usam caminhos relativos).
 */
function siteOrigin() {
  const fromEnv =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  return (fromEnv || '').replace(/\/+$/, '')
}

/** Injeta SEO, preloads e CSS crítico no HTML do build; gera robots.txt e sitemap.xml. */
function headPlugin(): Plugin {
  const origin = siteOrigin()
  const abs = (path: string) => `${origin}${path}`
  return {
    name: 'maisfit-head',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const { title, description } = site.seo
        const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
          tag: 'meta',
          attrs,
          injectTo: 'head',
        })
        const tags: HtmlTagDescriptor[] = [
          meta({ name: 'description', content: description }),
          meta({ name: 'robots', content: 'index, follow, max-image-preview:large' }),
          meta({ property: 'og:type', content: 'website' }),
          meta({ property: 'og:locale', content: 'pt_BR' }),
          meta({ property: 'og:site_name', content: site.name }),
          meta({ property: 'og:title', content: title }),
          meta({ property: 'og:description', content: description }),
          meta({ property: 'og:image', content: abs('/og-image.jpg') }),
          meta({ property: 'og:image:width', content: '1200' }),
          meta({ property: 'og:image:height', content: '630' }),
          meta({
            property: 'og:image:alt',
            content:
              'Pessoas treinando juntas com elásticos, e o lema "Mais forte quando é junto."',
          }),
          meta({ name: 'twitter:card', content: 'summary_large_image' }),
          meta({ name: 'twitter:title', content: title }),
          meta({ name: 'twitter:description', content: description }),
          meta({ name: 'twitter:image', content: abs('/og-image.jpg') }),
        ]
        if (origin) {
          tags.push(
            { tag: 'link', attrs: { rel: 'canonical', href: `${origin}/` }, injectTo: 'head' },
            meta({ property: 'og:url', content: `${origin}/` }),
          )
        }

        let out = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)

        // Só no build: preload da foto do hero e das fontes, e CSS inline (sem requisição extra).
        const bundle = ctx.bundle
        if (bundle) {
          const names = Object.keys(bundle)
          const find = (re: RegExp) => names.find((n) => re.test(n))
          const url = (n: string) => `/${n}`

          const hero = heroImage.widths
            .map((w) => ({ w, file: find(new RegExp(`hero-${w}-.*\\.webp$`)) }))
            .filter((h): h is { w: number; file: string } => Boolean(h.file))
          if (hero.length) {
            tags.push({
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                type: 'image/webp',
                imagesrcset: hero.map((h) => `${url(h.file)} ${h.w}w`).join(', '),
                imagesizes: heroImage.sizes,
                fetchpriority: 'high',
              },
              injectTo: 'head-prepend',
            })
          }
          for (const re of [
            /bricolage-grotesque-latin-opsz-normal-.*\.woff2$/,
            /inter-latin-wght-normal-.*\.woff2$/,
          ]) {
            const file = find(re)
            if (file) {
              tags.push({
                tag: 'link',
                attrs: {
                  rel: 'preload',
                  as: 'font',
                  type: 'font/woff2',
                  href: url(file),
                  crossorigin: '',
                },
                injectTo: 'head-prepend',
              })
            }
          }

          const cssName = find(/\.css$/)
          const css = cssName && bundle[cssName]
          if (css && css.type === 'asset') {
            const link = new RegExp(`<link[^>]*rel="stylesheet"[^>]*href="/${cssName}"[^>]*>`)
            if (link.test(out)) {
              out = out.replace(link, `<style>${String(css.source)}</style>`)
            }
          }
        }
        return { html: out, tags }
      },
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ''}`,
      })
      if (origin) {
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${origin}/</loc></url>\n</urlset>\n`,
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), headPlugin()],
})

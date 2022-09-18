import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { attributeMarkdown } from './src/plugins/custom-markdown.mjs'

// https://astro.build/config
export default defineConfig({
    site: `http://astro.stevefenton.co.uk`,
    markdown: {
        remarkPlugins: [
            remarkDirective,
            attributeMarkdown
        ],
        extendDefaultPlugins: true,
    },
    integrations: [
        sitemap()
    ],
});

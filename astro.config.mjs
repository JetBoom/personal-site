import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import remarkDirective from 'remark-directive'
import remarkOEmbed from 'remark-oembed'
import { remarkReadingTime } from './src/utils/readTime.ts'

import postcssImport from "postcss-import"
import postcssNesting from "tailwindcss/nesting"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	site: 'https://average.website/', // Write here your website url
	markdown: {
		remarkPlugins: [
			remarkReadingTime,
			remarkDirective,
			[remarkOEmbed, { syncWidget: true }],
		],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'material-theme-palenight',
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind(),
		icon({
			iconDir: 'src/assets/icons',
		}),
	],
	vite: {
		css: {
			postcss: {
				plugins: [postcssImport, postcssNesting, tailwindcss, autoprefixer],
		  	},
		},
	},
})

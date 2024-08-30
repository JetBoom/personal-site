/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const white = '#f9f8f6'
const bg = '#110f10'

const colors = {
	white,
	fg: white,
	bg,
	primary: '#c6563a',
	accent: '#e58569',
	//secondary: '#a4939a',
	dark: bg,
}

module.exports = {
	darkMode: 'dark',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors,
			fontFamily: {
				body: ['"Inter Tight Variable"', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			fontSize: {
				
			},
			boxShadow: {
				glow: `0 0 1rem ${colors.primary}88`,
				'glow-lg': `0 0 2rem ${colors.primary}88`,
			},
		},
		letterSpacing: {
			tightest: '-.05em',
			tighter: '-.025em',
			tight: '0',
			normal: '.05em',
			wide: '.075em',
			wider: '.1em',
			widest: '.25em',
		},
	},
	plugins: [require('@tailwindcss/typography')]
}

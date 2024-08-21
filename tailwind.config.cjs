/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'dark',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#d8d1d0'
			},
			fontFamily: {
				body: ['"Inter Tight Variable"', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			fontSize: {
				xs: '14px',
				sm: '16px',
				base: '24px',
				md: '24px',
				lg: '32px',
				xl: '48px',
				'2xl': '60px',
				'3xl': '100px',
				'4xl': '150px',
			},
			boxShadow: {
				glow: '0 0 1rem #fff8',
				'glow-lg': '0 0 2rem #fff8',
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

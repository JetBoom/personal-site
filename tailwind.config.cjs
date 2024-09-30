/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const white = '#ddd'
    , black = '#110f10'

const colors = {
    fg: white,
    bg: '#171a19',
    primary: '#53a2be', //'#c6563a',
    accent: '#83b4ec', //'#e58569',
	secondary1: '#419d78',
	secondary2: '#e0a458',
    secondary3: '#d9594c',
    white,
    black,
}

module.exports = {
    darkMode: 'dark',
    content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
    theme: {
        extend: {
            colors,
            fontFamily: {
                body: ['"Inter Tight Variable"', ...defaultTheme.fontFamily.sans],
                loto: ['loto', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                list: 'repeat(auto-fill, minmax(400px, max-content))'
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

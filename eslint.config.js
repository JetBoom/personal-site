import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
    //...js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
        },
        ignores: [
            'dist',
            'node_modules',
            '.github',
            '.changeset',
            '.husky',
            '.vscode',
        ],
    },
]

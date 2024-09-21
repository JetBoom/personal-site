import eslintJS from '@eslint/js'
import eslintTS from 'typescript-eslint'
import eslintAstro from 'eslint-plugin-astro'

export default [
    eslintJS.configs.recommended,
    ...eslintTS.configs.recommended,
    ...eslintAstro.configs.recommended,

    {
        rules: {
            'semi': [2, 'never'],
            'indent': [2, 4],
            'quotes': [2, 'single'],
            'no-unused-vars': 1,
            '@typescript-eslint/no-unused-vars': 0,
            'prefer-const': 1,
            '@typescript-eslint/ban-ts-comment': 0,
            '@typescript-eslint/no-explicit-any': 1,
        },
    },
    {
        ignores: [
            'dist/*',
            '.github/*',
            '.changeset/*',
            '.husky/*',
            '.vscode/*',
            '.astro/*',
            'tina/*',
            '*.cjs',
        ],
    },
]

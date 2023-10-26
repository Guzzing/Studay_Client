module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'vite-env.d.ts'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    'react-refresh',
    'prettier',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'import'
  ],
  rules: {
    // TODO : 마지막에 불필요한 console지울 때 켜주시면 console부분만 빨간색으로 변해서 유용할 것 같습니다
    // 'no-console': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow'
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'function'
      },
      {
        format: ['PascalCase'],
        selector: 'interface'
      },
      {
        format: ['PascalCase'],
        selector: 'typeAlias'
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'always' }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown'
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@hooks/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@pages/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@components/*',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['@tanstack*'],
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    'unicorn/prevent-abbreviations': ['off']
  }
}

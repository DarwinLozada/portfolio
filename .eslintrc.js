module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'standard'
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        ecmaFeatures: {
          jsx: false
        }
      },
      extends: [
        'eslint:recommended',
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
        'standard'
      ],
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'react/react-in-jsx-scope': 0
      }
    },
    {
      files: ['*.tsx, *.ts'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'standard'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        extraFileExtensions: ['.ts', '.tsx'],
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  ]
}

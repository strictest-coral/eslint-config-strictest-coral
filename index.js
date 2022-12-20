module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['sonarjs', 'unicorn'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:sonarjs/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      "plugin:unicorn/recommended",
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      'unicorn/no-array-reduce': 'off',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      '@typescript-eslint/no-misused-promises': 'error',
      'prettier/prettier': [
        'error',
        {
          "semi": true,
          "trailingComma": "all",
          "singleQuote": true,
          "tabWidth": 2,
          "endOfLine": "auto"
        },
      ],
    },
  };
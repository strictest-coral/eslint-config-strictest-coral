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
      'max-depth': ['error', 2],
      'max-lines': ['error', 500],
      'max-lines-per-function': ['error', 30],
      'max-statements': ['error', 10],
      'complexity': ['error', 10],
      'max-nested-callbacks': ['error', 3],
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
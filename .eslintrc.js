/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
      pathGroups: [{
        pattern: '{react,react-dom/**,react-router-dom}',
        group: 'builtin',
        position: 'before'
      }, {
        pattern: '~/src/**',
        group: 'parent',
        position: 'before'
      }],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc'
      },
      'newlines-between': 'always'
    }],
    'import/no-unresolved': 'off' // REVISIT: ~/App などのパスを解析させる方法がわからなかった

  }
};
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // 'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        tabWidth: 2,
        useTabs: true,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
      },
    ],
  },
};

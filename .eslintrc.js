module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'cypress/globals': true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    React: 'readonly',
    Router: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks', 'cypress'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        printWidth: 120
      }
    ],
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'func-names': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/button-has-type': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'error',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['cypress/**/*.js', '**/*.test.js', 'jest-preprocess.js']}]
  },
  overrides: [
    {
      // ESLint ignored rules for the _common folder
      files: ['web/_common/**/*.js'],
      rules: {
        'import/no-unresolved': 'off'
      }
    }
  ]
}

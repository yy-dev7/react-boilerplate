module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .jsx extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'jsx': 'never',
    }],
    'semi' : [2, 'never'],
    'max-len': [1, 140, 2],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  globals: {
    document: true,
    window: true
  },
}

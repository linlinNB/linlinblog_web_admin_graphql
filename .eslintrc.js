module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'plugin:react/recommended',
      'standard'
    ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    "indent": [2, 2],
    "semi": [2, "always"],
    "no-delete-var": 2,
    "no-empty": 2,
    "no-alert": 2,
    "no-var": 2,
    "space-before-function-paren": [2, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
};

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser'
    //parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': ['error', { ignores: ['Destinations'] }],
    'no-multi-spaces': ['error'],
    'new-cap': 'error',
    'no-invalid-this': 'error',
    'prefer-const': 'error',
    'no-new-func': 'error',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'func-names': 'warn',
    'no-process-exit': 'warn',
    'object-shorthand': 'warn',
    'class-methods-use-this': 'error',
    'no-param-reassign': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'warn',
    'prefer-rest-params': 'warn',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    eqeqeq: 'error',
    'no-with': 'error',
    'no-plusplus': 'error',
    'jsx-a11y/label-has-for': 0
  }
}

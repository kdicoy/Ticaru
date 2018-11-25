module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-shadow': 'off',
    'prettier/prettier': ['error'],
  },
};

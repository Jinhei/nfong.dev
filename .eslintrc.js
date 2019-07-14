module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'max-len': ['error', 80],
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
  },
};

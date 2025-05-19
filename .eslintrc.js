module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
    ],
    rules: {
      'no-console': 'off', // отключить правило no-console
      'import/extensions': 'off', // отключить правило import/extensions
    },
  };
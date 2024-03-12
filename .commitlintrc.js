module.exports = {
  ...require('@lobehub/lint').commitlint,
  rules: {
    // Override rules or disable them
    'start-with-gitmoji': [0],
    'subject-empty': [0],
    'type-empty': [0],
  },
};

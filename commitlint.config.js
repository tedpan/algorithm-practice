module.exports = {
  extends: ['ali'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'perf',
        'feat',
        'fix',
        'refactor',
        'docs',
        'chore',
        'style',
        'revert',
        'test',
        'upd',
      ],
    ],
  },
};

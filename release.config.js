<<<<<<< HEAD
/** @type {import('semantic-release').Config} */
module.exports = {
  branches: ['main', { name: 'preview', prerelease: true }],
  plugins: [
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'BREAKING CHANGE', release: 'major' },
          { type: 'chore', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'minor' },
          { type: 'refactor', release: 'patch' },
        ],
      },
    ],
  ],
=======
module.exports = {
  branches: ['main'],
  plugins: [['@semantic-release/npm', { npmPublish: false }]],
>>>>>>> 387e599 (feat: add `semantic-release` automation (#15))
};

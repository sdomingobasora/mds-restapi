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
          { type: 'fix', release: 'patch' },
          { type: 'refactor', release: 'patch' },
        ],
      },
    ],
  ],
};

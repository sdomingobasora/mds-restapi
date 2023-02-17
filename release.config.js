module.exports = {
  branches: ['main', 'test-main'],
  plugins: [
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
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
    [
      '@semantic-release/release-notes-generator',
      { preset: 'conventionalcommits' },
    ],
  ],
};

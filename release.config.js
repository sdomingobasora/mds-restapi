module.exports = {
  // TODO: Remove test-main once we are sure this works and also cleanup everything
  branches: ['main', 'test-main'],
  plugins: [
    [
      // TODO: Test later
      // '@codedependant/semantic-release-docker',
      // {
      //   dockerTags: [
      //     'latest',
      //     '{{version}}',
      //     '{{major}}-latest',
      //     '{{major}}.{{minor}}',
      //   ],
      //   dockerImage: 'my-image',
      //   dockerFile: 'Dockerfile',
      //   dockerRegistry: 'quay.io',
      //   dockerProject: 'codedependant',
      //   dockerArgs: {
      //     API_TOKEN: true,
      //     RELEASE_DATE: new Date().toISOString(),
      //     RELEASE_VERSION: '{{next.version}}',
      //   },
      // },
    ],
  ],
};

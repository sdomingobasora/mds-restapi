module.exports = {
  // TODO: Remove test-main once we are sure this works and also cleanup everything
  branches: ['main', 'test-main'],
  plugins: [
    [
      // We have to set up
      // - DOCKER_REGISTRY_USER
      // - DOCKER_REGISTRY_PASSWORD
      '@codedependant/semantic-release-docker',
      {
        dockerTags: [
          'latest',
          '{{version}}',
          '{{major}}-latest',
          '{{major}}.{{minor}}',
        ],
        dockerImage: 'mds-restapi',
        dockerFile: 'Dockerfile',
        dockerRegistry: 'hub.docker.com',
        dockerProject: 'mdas',
        dockerArgs: {
          API_TOKEN: true,
          RELEASE_DATE: new Date().toISOString(),
          RELEASE_VERSION: '{{next.version}}',
        },
      },
    ],
  ],
};

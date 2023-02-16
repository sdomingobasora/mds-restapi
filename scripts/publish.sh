#!/bin/bash

TAG=$(git describe --tags --exact-match)
if [ -z "$TAG" ]; then
  echo "No tag provided"
  exit 1
fi

# Log into docker hu
docker login --username $1 --password $2

# Push to docker hub 
IMAGE="githubstats/mds-restapi:$TAG"
echo $IMAGE
docker image push $IMAGE

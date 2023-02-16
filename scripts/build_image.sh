#!/bin/bash

TAG=$(git describe --tags --exact-match)
if [ -z "$TAG" ]; then
  echo "No tag provided"
  exit 1
fi

docker build -t \
  mds-restapi:$TAG \
  --build-arg GIT_TAG=$TAG \
  .

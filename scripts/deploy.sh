#!/bin/bash

TAG=$(git describe --tags --exact-match)
COLON_TAG=:${TAG}

chmod +x ./bin/oc

# Install yq and parse YAML
YQ_VERSION="v4.18.1"
YQ_BINARY="yq_linux_amd64"
sudo wget https://github.com/mikefarah/yq/releases/download/$YQ_VERSION/$YQ_BINARY -O /usr/bin/yq
sudo chmod +x /usr/bin/yq

yq -i '.spec.template.spec.containers[0].image += strenv(COLON_TAG)' ./iac/deployment.yaml

# Login & deploy
./bin/oc login --token=$1 --server=$2
./bin/oc apply -f ./iac/deployment.yaml
./bin/oc apply -f ./iac/service.yaml
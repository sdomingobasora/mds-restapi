#!/bin/bash

chmod +x ./bin/oc
chmod +x ./bin/yq

# Parse tag into YAML file using yq
TAG=$(git describe --tags --exact-match)
./bin/yq -i '.spec.template.spec.containers[0].image = $TAG' ./iac/deployment.yaml

# Login & deploy
# ./bin/oc login --token=$1 --server=$2
# ./bin/oc apply -f ./iac/deployment.yaml
# ./bin/oc apply -f ./iac/service.yaml
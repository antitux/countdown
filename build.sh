#!/usr/bin/env bash

# docker build and upload script
#

export TAG=$(date +%Y%m%d%H%M%S)
echo "TAG NAME: $TAG"
export BUILD_DATE=$TAG
export VERSION=$TAG
export SVR=r.antx.dev
export PROJ=countdown

docker --debug build --no-cache -t $SVR/$PROJ:$TAG .
docker tag $SVR/$PROJ:$TAG $SVR/$PROJ:latest
docker push $SVR/$PROJ:$TAG
docker push $SVR/$PROJ:latest
docker volume prune -f
docker image prune -a -f

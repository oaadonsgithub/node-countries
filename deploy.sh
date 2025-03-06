#!/bin/bash

# login to the ecr to get pushed docker image
aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin 537124950459.dkr.ecr.us-west-1.amazonaws.com


# deploy docker stack with 3 containers from docker-compose.yml
docker stack deploy --with-registry-auth -c ./docker-compose.yaml node-countries

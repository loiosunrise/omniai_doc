TAG=${1:-latest}

docker build --platform linux/amd64 -t omniai-doc:$TAG  -f ./docker/Dockerfile .

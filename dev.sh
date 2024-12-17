TAG=${1:-latest}
PORT=5000

echo "请访问 http://localhost:$PORT"

docker run --rm -it \
    -p $PORT:8080 \
    -p 443:443 \
     omniai-doc:$TAG

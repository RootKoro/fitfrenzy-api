# Build and run the application with compose
## For Mac(Only ARM architecture)
```sh
docker-compose build --build-arg ARCH=arm64
docker-compose up
```
## For the rest
```sh
docker-compose build --build-arg ARCH=amd64
docker-compose up
```

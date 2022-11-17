# Install flutter
FROM cirrusci/flutter:3.3.8 AS build-env

# Run flutter doctor and enable web
RUN flutter doctor
RUN flutter config --enable-web

# Copy files to container and build
USER root
RUN mkdir /app/
COPY ./front /app/
WORKDIR /app/
RUN flutter clean
RUN flutter build web

# Record the exposed port
EXPOSE 5000

# make server startup script executable and start the web server
RUN ["chmod", "+x", "/app/server.sh"]

ENTRYPOINT [ "/app/server.sh"]
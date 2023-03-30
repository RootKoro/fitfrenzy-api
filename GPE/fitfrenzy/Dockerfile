FROM ubuntu:22.04 AS development

# Arguments and environment variables
ARG BUILD_TOOLS_VERSION=29.0.2
ARG PLATFORM_VERSION=29
ARG COMMAND_LINE_VERSION=latest

# Installing necessary dependencies
RUN apt update
RUN apt install -y curl git unzip openjdk-8-jdk python3 wget

# Configuring the working directory and user to use
ARG USER=root
USER $USER
WORKDIR /home/$USER


# Download Flutter SDK
RUN git clone https://github.com/flutter/flutter.git


# Setup PATH environment variable
ENV PATH $PATH:/home/$USER/flutter/bin

# Remove cache from flutter/bin
RUN rm -rf /home/$USER/flutter/bin/cache/

RUN flutter channel stable && \
 flutter upgrade

# Verify the status licenses
RUN flutter doctor

# Enable flutter web
RUN flutter config --enable-web

# Copy files to container and build
USER root
RUN mkdir app
COPY . /app/
WORKDIR /app/
RUN flutter build web

# Record the exposed port
EXPOSE 5006

# make server startup script executable and start the web server
RUN ["chmod", "+x", "server.sh"]

ENTRYPOINT [ "./server.sh"]


FROM ubuntu:22.04 AS development

# Arguments and environment variables
ARG BUILD_TOOLS_VERSION=29.0.2
ARG PLATFORM_VERSION=29
ARG COMMAND_LINE_VERSION=latest

# Installing necessary dependencies
RUN apt update && apt install -y curl git unzip openjdk-8-jdk python3 wget

# Configuring the working directory and user to use
ARG USER=root
USER $USER
WORKDIR /home/$USER

# Download Flutter SDK
RUN git clone --depth 1 -b stable https://github.com/flutter/flutter.git

# Setup PATH environment variable
ENV PATH $PATH:/home/$USER/flutter/bin

# Remove cache from flutter/bin
RUN rm -rf /home/$USER/flutter/bin/cache/

RUN flutter channel stable 
RUN flutter upgrade

# Verify the status licenses
RUN flutter doctor

# Enable flutter web
RUN flutter config --enable-web

# Install Flutter SDK separately
RUN flutter precache

# Set up project files
USER root
RUN mkdir app
WORKDIR /app/

# Copy pubspec file first to cache dependencies
COPY pubspec.* /app/
RUN flutter pub get

# Copy remaining files
COPY . /app/

# Build the project
RUN flutter build web

# Record the exposed port
EXPOSE 5006

# Make server startup script executable and start the web server
RUN ["chmod", "+x", "server.sh"]
ENTRYPOINT [ "./server.sh"]
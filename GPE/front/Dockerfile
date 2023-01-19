# Install flutter
FROM cirrusci/flutter:stable

#Removing frontend interaction from debian
ARG DEBIAN_FRONTEND=noninteractive

# Prerequisites
RUN apt-get update && apt-get install -y clang cmake ninja-build pkg-config libgtk-3-dev

#Set up new user
RUN useradd -ms /bin/bash flutter
USER flutter

#Inserting flutter project
WORKDIR /app
COPY . /app 

#Basic check to download Dart SDK
RUN flutter doctor
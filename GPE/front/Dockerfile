# Install flutter
FROM cirrusci/flutter:latest AS development

# Prerequisites
RUN apt-get update && apt-get install -y clang cmake ninja-build pkg-config libgtk-3-dev

#Inserting flutter project
WORKDIR /usr/src/app
COPY . . 

#Basic check to download Dart SDK
RUN flutter doctor
RUN flutter pub get
# Install flutter
FROM ubuntu:22.04

#Removing frontend interaction from debian
ARG DEBIAN_FRONTEND=noninteractive

# Prerequisites
RUN apt update && apt install -y curl git unzip xz-utils zip libglu1-mesa openjdk-8-jdk wget

#Set up new user
RUN useradd -ms /bin/bash flutter
USER flutter

#Inserting flutter project
WORKDIR /home/flutter
COPY workspace /home/flutter/workspace

#Setting up flutter
RUN mkdir -p Android/sdk
ENV ANDROID_SDK_ROOT /home/flutter/Android/sdk
RUN mkdir -p .android && touch .android/repositories.cfg

#Set up Android SDK
RUN wget -O sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
RUN unzip sdk-tools.zip && rm sdk-tools.zip
RUN mv tools Android/sdk/tools
RUN cd Android/sdk/tools/bin && yes | ./sdkmanager --licenses
RUN cd Android/sdk/tools/bin && ./sdkmanager "build-tools;29.0.2" "patcher;v4" "platform-tools" "platforms;android-29" "sources;android-29"
ENV PATH $PATH:/home/flutter/Android/sdk/platform-tools

#Download Flutter SDK
RUN git clone https://github.com/flutter/flutter.git
ENV PATH $PATH:/home/flutter/flutter/bin

#Basic check to download Dart SDK
RUN flutter doctor
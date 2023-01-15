# Install flutter
FROM ubuntu:22.04

#Removing frontend interaction from debian
ARG DEBIAN_FRONTEND=noninteractive

# Prerequisites
RUN apt update && apt install -y curl git unzip xz-utils zip libglu1-mesa openjdk-8-jdk wget

#Setting up flutter
RUN curl -L https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.3.10-stable.tar.xz | tar -C . -xJ
RUN git config --global --add safe.directory /flutter
ENV PATH $PATH:/flutter/bin

WORKDIR /app
COPY . /app/


#Creating new user
RUN useradd -ms /bin/bash flutter

#Prepare Android directories and system variables
RUN mkdir -p Android/sdk
ENV ANDROID_SDK_ROOT /app/Android/sdk
RUN mkdir -p .android && touch .android/repositories.cfg

#Set up Android SDK
RUN wget -O sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
RUN unzip sdk-tools.zip && rm sdk-tools.zip
RUN mv tools Android/sdk/tools
RUN cd Android/sdk/tools/bin && yes | ./sdkmanager --licenses
RUN cd Android/sdk/tools/bin && ./sdkmanager "build-tools;29.0.2" "patcher;v4" "platform-tools" "platforms;android-29" "sources;android-29"
ENV PATH $PATH:/app/Android/sdk/platform-tools

#Basic flutter check
RUN flutter doctor 
RUN flutter upgrade

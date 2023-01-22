#Launch current project using cirrusci/flutter image
FROM cirrusci/flutter:latest AS development

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the current directory contents into the container current working directory
COPY . .

# Install any needed packages specified in requirements.txt
RUN flutter pub get

#Basic flutter check
RUN flutter doctor

#enable flutter for web
RUN flutter config --enable-web
RUN flutter packages pub global activate webdev







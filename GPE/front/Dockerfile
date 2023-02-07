ARG ARCH
FROM sadoudi/flutter:${ARCH} AS development

#Basic flutter check
RUN flutter doctor

# Enable flutter web
RUN flutter config --enable-web

# Copy files to container and build
USER root
RUN mkdir /app/
COPY . /app/
WORKDIR /app/
RUN flutter build web

# Record the exposed port
EXPOSE 5006

# make server startup script executable and start the web server
RUN ["chmod", "+x", "server.sh"]

ENTRYPOINT [ "./server.sh"]


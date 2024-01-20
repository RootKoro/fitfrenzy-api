FROM node:16-alpine


WORKDIR /app
COPY ./ ./
RUN yarn install

RUN npm install --global expo-cli

ENTRYPOINT [ "npm", "run"]
CMD [ "web" ]
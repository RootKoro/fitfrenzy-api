FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY ./sports/package*.json ./

RUN npm install glob rimraf

RUN npm install --only=

RUN npm install -f class-validator
RUN npm install -f class-transformer
RUN npm install --save @types/bcrypt mongoose bcrypt --force

COPY ./sports .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./sports/package*.json ./

RUN npm install --only=production

COPY ./sports .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
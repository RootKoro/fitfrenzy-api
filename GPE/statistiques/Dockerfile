# FROM node:18 AS development
FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY ./statistiques/package*.json ./

RUN npm install

COPY ./statistiques .

RUN npm install @nestjs/swagger swagger-ui-express
RUN npm run build

# FROM node:18 as production
FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./statistiques/package*.json ./

RUN npm install --only=production

COPY ./statistiques .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]

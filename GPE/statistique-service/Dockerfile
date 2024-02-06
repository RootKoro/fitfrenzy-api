# FROM node:18 AS development
FROM node:18-alpine AS development

WORKDIR /app

COPY ./statistique-service/package*.json ./

RUN npm install

COPY ./statistique-service .

# RUN npm run build

# FROM node:18 as production
FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./statistique-service/package*.json ./

RUN npm install --only=production

COPY ./statistique-service .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]

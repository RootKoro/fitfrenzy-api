# FROM node:18 AS development
FROM node:18-alpine AS development

WORKDIR /app

COPY ./questionary-service/package*.json ./

RUN npm install

COPY ./questionary-service .

# RUN npm run build

# FROM node:18 as production
FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./questionary-service/package*.json ./

RUN npm install --only=production

COPY ./questionary-service .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]

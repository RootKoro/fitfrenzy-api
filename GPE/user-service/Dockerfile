# FROM node:18 AS development
FROM node:18-alpine AS development

WORKDIR /app

COPY ./user-service/package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install

COPY ./user-service .

# RUN npm run build

FROM node:18 as production
# FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./user-service/package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install --only=production

COPY ./user-service .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]

FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY ./questionary/package*.json ./

RUN npm install --only=development

COPY ./questionary .

RUN npm run build

FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./questionary/package*.json ./

RUN npm install --only=production

COPY ./questionary .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
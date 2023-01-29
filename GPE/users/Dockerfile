FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY ./users/package*.json ./


RUN npm install --only=development

RUN npm install -f class-validator
RUN npm install -f class-transformer
RUN npm install --save @types/bcrypt mongoose bcrypt --force

COPY ./users .

RUN npm run build

FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./users/package*.json ./

RUN npm install --only=production

COPY ./users .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
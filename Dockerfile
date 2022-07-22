
FROM node:14-alpine as base
WORKDIR /src
COPY package*.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN apk add git; npm ci; npm i @nestjs/cli -g;
COPY --chown=node:node . ./
USER node
CMD [" npm run build","npm", "start"]
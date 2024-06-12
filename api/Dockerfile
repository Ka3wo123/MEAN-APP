FROM node:18-alpine

WORKDIR /usr/src/app/api

COPY ./package.json ./

RUN npm install

COPY lib/ ./lib
COPY tsconfig.json ./

CMD [ "npm", "run", "dev" ]
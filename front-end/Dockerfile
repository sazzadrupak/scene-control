FROM node:alpine

ENV NODE_ENV=development

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]
# Common build stage
FROM node:18.14.0

COPY . ./app

WORKDIR /app

RUN yarn --modules-folder ./node_modules --frozen-lockfile

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]

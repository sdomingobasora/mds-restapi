# Common build stage
FROM node:18.14.0

# Create node user
RUN adduser node root

COPY . ./app

WORKDIR /app

RUN yarn --frozen-lockfile

# Give owner rights to the current user
RUN chmod -R 775 /app
RUN chown -R node:root /app

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]

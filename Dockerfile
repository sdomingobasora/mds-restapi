# Common build stage
FROM node:18.14.0

COPY . ./app

# Give owner rights to the current user
RUN echo $user
RUN chown -Rh $user:$user /app
USER $user

WORKDIR /app

RUN yarn --modules-folder ./node_modules --frozen-lockfile

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]

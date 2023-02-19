# Common build stage
FROM node:18.14.0

COPY . ./app

# Give owner rights to the current user
RUN echo $USER
RUN chown -Rh $USER:$USER /app
USER $USER

WORKDIR /app

RUN yarn --modules-folder ./node_modules --frozen-lockfile

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]

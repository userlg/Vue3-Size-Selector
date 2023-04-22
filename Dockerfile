#-------------------------------------#
# build stage
FROM node:19-alpine3.16 as build-stage

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn add tsc vue-tsc

RUN yarn build

# production stage
FROM nginx:latest as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

#----------END OF THE FILE----------#


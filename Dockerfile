FROM node:19-alpine3.16

RUN npm install -g http-server

WORKDIR /var/www/html/app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE  8080

CMD [ "http-server", "dist" ]


FROM node:alpine AS build

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
FROM oven:bun AS build

ADD . /app
WORKDIR /app

RUN bun install
RUN bun run build

FROM nginx:stable
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
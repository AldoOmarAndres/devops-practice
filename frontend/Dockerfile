# Buildear la app web
FROM node:22-alpine AS builder

WORKDIR /app

COPY src ./src
COPY public ./public
COPY index.html ./
COPY vite.config.js ./
COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm run build

# Levantar el servidor web
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80

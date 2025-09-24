FROM node:22-alpine

WORKDIR /usr/src/app

COPY src ./src
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]

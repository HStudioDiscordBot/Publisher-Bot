FROM node:22-alpine

WORKDIR /discord/bot

COPY . .
RUN npm install
RUN npm run build

CMD ["node", "dist/index.js"]
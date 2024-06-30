FROM node:22-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM node:22-alpine

WORKDIR /discord/bot

COPY --from=builder /app/dist .

CMD ["node", "dist/index.js"]
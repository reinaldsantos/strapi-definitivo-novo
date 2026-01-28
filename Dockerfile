FROM node:18-alpine
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps

COPY . .

EXPOSE 1337

CMD ["npm", "start"]

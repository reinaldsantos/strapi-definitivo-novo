FROM node:18-alpine
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps

# Força instalação do AJV correto
RUN npm install ajv@8.12.0 ajv-keywords@5.1.0 ajv-formats@2.1.1 --no-save

COPY . .

EXPOSE 1337

CMD ["npm", "start"]

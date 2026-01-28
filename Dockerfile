FROM node:14-alpine

# Instala dependências do sharp
RUN apk add --no-cache python3 make g++ vips-dev

WORKDIR /app

COPY package*.json ./
RUN npm install --production --legacy-peer-deps

# Força instalação do sharp
RUN npm install sharp@0.30.7 --ignore-scripts --no-save

COPY . .

EXPOSE 1337

CMD ["npm", "start"]
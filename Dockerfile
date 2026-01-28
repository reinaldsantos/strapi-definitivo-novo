FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production --legacy-peer-deps --ignore-scripts
COPY . .
EXPOSE 1337
CMD ["npm", "start"]

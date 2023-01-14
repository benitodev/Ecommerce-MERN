FROM node:18-alpine

WORKDIR /usr/src/ecommerce-backend

COPY package*.json ./

# RUN curl -v https://registry.npmjs.com/
RUN npm install

RUN npm i -g nodemon@latest

COPY . .

EXPOSE 3002

CMD ["npm", "run", "dev"]
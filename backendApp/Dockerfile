FROM node:8

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install bcrypt

COPY . /app

CMD npm start

EXPOSE 2323
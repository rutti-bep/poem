FROM node:latest

COPY poemApp /src/poemApp
WORKDIR /src/poemApp

RUN npm install

CMD npm start

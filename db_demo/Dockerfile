FROM ubuntu:14.04
RUN apt-get update -qq

RUN apt-get install -y build-essential

RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install -y nodejs npm
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

RUN npm install express --save
RUN npm instal pg --save
RUN npm install redis --save

EXPOSE 3000

WORKDIR /my_app
CMD node server.js

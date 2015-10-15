FROM ubuntu:latest
RUN apt-get update -qq

RUN apt-get install -y build-essential

RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install -y nodejs npm
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
RUN npm install -g migrate --save

WORKDIR /vins-api

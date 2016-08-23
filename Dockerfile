FROM node:latest

ARG proxy
ARG noproxy

ENV no_proxy=${noproxy}
ENV http_proxy=${proxy}
ENV https_proxy=${proxy}

ADD .babelrc /usr/src/.babelrc
ADD package.json /usr/src/package.json
WORKDIR /usr/src
RUN npm i

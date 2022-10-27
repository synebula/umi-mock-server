FROM node:10-alpine 
#作者
MAINTAINER alex <reizero@live.com>

#工作目录
WORKDIR /app

COPY package-pro.json ./package.json
COPY lib ./lib

RUN npm config set registry https://registry.npm.taobao.org && npm install

#暴露3000端口
EXPOSE 3000

ENTRYPOINT ["npm", "run", "serve"]
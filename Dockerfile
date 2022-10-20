FROM node:10-alpine 
#作者
MAINTAINER alex <reizero@live.com>

#工作目录
WORKDIR /app

COPY package.json ./
COPY lib ./lib
COPY node_modules ./node_modules

#暴露3000端口
EXPOSE 3000

ENTRYPOINT ["npm","serve"]
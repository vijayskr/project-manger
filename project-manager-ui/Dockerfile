FROM node:11.6.0-alpine AS builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node
	
COPY package.json /home/node/app/package.json

RUN npm install

RUN npm install -g @angular/cli

# add app
COPY . /home/node/app

COPY --chown=node:node . .

EXPOSE 4301

CMD [ "ng", "serve" ]

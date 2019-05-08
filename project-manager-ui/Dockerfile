### STAGE 1: Build ###
FROM node:10

# Preparing working environment.
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

# Installing dependencies.
COPY package.json /home/node/app/package.json

RUN npm install --cache /tmp/empty-cache
RUN npm install
RUN npm install -g @angular/cli

# Add app
COPY . /home/node/app

EXPOSE 4200

CMD ["ng","serve","--host","0.0.0.0","--port","4200"]


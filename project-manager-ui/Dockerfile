### STAGE 1: Build ###
FROM node:8.11.1-alpine as builder

# Preparing working environment.
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

# Installing dependencies.
COPY package*.json /home/node/app/package.json
RUN npm install

# Add app
COPY . /home/node/app

# Building app.
RUN npm run-script build

### STAGE 2: Setup ###
FROM nginx:1.13.12-alpine

# Removing nginx default page.
RUN rm -rf /usr/share/nginx/html/*

# Copying nginx configuration.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copying openhome-panel source into web server root.
COPY --from=builder /home/node/app/public /usr/share/nginx/html

# Exposing ports.
EXPOSE 4222

# Starting server.
CMD [“nginx”, “-g”, “daemon off;”]

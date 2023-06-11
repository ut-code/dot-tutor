FROM node
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --ignore-scripts
RUN npm run prepare

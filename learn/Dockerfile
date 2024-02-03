FROM node:18
WORKDIR /app
COPY packages/braille/package*.json packages/braille/
COPY learn/package*.json learn/
RUN cd packages/braille && npm ci
RUN cd learn && npm ci

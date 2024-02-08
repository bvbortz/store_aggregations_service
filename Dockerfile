FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install \
    && npm install typescript -g
COPY . .
RUN npm run build
# FROM node:20-alpine AS production
# WORKDIR /app
# COPY package*.json ./
# RUN npm i --omit=dev
# COPY --from=build /app/dist dist/
# EXPOSE 5000
CMD ["node", "./dist/index.js"]
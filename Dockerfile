FROM node:18-alpine3.19 AS build

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

# docker run -d -p 8080:80 diego-marrs
FROM node:12.16.1-alpine As builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g ionic

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /app/www/ /usr/share/nginx/html
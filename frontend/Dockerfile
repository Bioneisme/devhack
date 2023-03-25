FROM node:16.17-alpine

WORKDIR /opt/web
ENV PATH="/opt/web/node_modules/.bin:$PATH"

RUN apk update

EXPOSE 3000

COPY . .

RUN npm install

CMD ["vite"]
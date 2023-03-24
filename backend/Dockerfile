FROM node:16.17-alpine

WORKDIR /opt/app
ENV PATH="/opt/app/node_modules/.bin:$PATH"
RUN apk update

COPY . .

RUN npm install
ENTRYPOINT ["ts-node"]

CMD ["./index.ts"]
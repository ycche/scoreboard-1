FROM node:16 AS ui-build

WORKDIR /app

COPY client/ ./client/
WORKDIR client
RUN npm install
RUN npm run build

FROM node:16 AS server-build
WORKDIR /root/
COPY --from=ui-build /app/client/build ./client/build
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "node", "server.js"]

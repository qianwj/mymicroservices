FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production --silent --registry=https://registry.npm.taobao.org
RUN rm package.json package-lock.json
COPY ./dist/ .
EXPOSE 3000
CMD ["node", "main.js"]
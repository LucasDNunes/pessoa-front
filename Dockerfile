FROM node:13.8.0-slim as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
# ARG env=prod
RUN npm run build
# EXPOSE 4200

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=node /app/dist/pessoa /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
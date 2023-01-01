FROM node
WORKDIR /akki
COPY package.json /akki
RUN npm install
COPY . /akki
CMD node server.js
EXPOSE 5000
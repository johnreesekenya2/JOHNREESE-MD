FROM node:lts-buster
RUN git clone https://github.com/Johnwayne209/John-Reese/root/Johnwayne209
WORKDIR /root/Johnwayne209
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]

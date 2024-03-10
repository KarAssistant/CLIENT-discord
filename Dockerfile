FROM node:18.13.0

COPY ./package*.json /home/node/karAssistant-discordClient/
WORKDIR /home/node/karAssistant-discordClient/
RUN npm install --omit=dev
RUN npm install @tensorflow/tfjs-node
COPY . .
CMD ["npm", "run", "startSever"]
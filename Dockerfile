FROM node:16.10.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
EXPOSE 5005
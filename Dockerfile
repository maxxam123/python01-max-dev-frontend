FROM node:16-alpine
 
ADD . /frontend
WORKDIR /frontend
RUN npm install --silent
RUN npm install axios
RUN npm install react-router-dom

CMD ["npm", "start"]
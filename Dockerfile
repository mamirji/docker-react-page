# base image
FROM node:alpine
# working dir inside container
WORKDIR '/app'

# copying package.json
COPY package*.json ./

RUN npm install
COPY . .

# start npm process inside container
CMD ["npm" , "start"]

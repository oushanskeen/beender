# Use a lighter version of Node as a parent image
# FROM alpine-node:8.11.4
FROM node:12.2.0-alpine

# Set the working directory to /client
# WORKDIR /client
WORKDIR /app/frontend

ENV PATH /app/frontend/node_modules/.bin:$PATH

# copy package.json into the container at /client
# COPY package*.json /client/
COPY package*.json /app/frontend/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /client
COPY . /app/frontend/

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]









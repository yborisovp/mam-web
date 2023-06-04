# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:18.16.0

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
RUN addgroup app && adduser --system --group app
RUN mkdir /app && chown app:app /app
USER app

# Copies package.json and package-lock.json to Docker environment
WORKDIR /app
COPY package.json .

# Installs all node packages
RUN yarn

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 8080

# Finally runs the application
CMD [ "yarn", "start" ]

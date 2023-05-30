## Available Scripts

In the project directory, you can run:

### `yarn start`

This will run webpack server locally

## DOCKER
Run the following commands
`docker build -t mam-web .`
`docker run -d -p 4680:8080 -v /app/node_modules -v $(pwd):/app --name mam-web-dev mam-web`

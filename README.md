# PassCodebase

## Preparation to start

Run `docker-compose up -d` to create local mongoDB, need doceker to be installed, see [www.docker.com](https://www.docker.com/get-started/)

Run `npm i` to install all necessary dependencies, need Node.js to be installed, see [nodejs.org](https://nodejs.org/en/download/current) 

## Start the application

Run `npx nx serve frontend` to start the development server/frontend

Run `npx nx serve backend` to start the development server/backend

Run `npx nx run-many --parallel -t serve serve -p frontend backend` to start the development server/backend and development server/frontend parallel

## Build for production

Run `npx nx build frontend` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.


# TotalWarhammerPlanner

Most of the actual development is done, just need to style the front end a bit better, add some form of limiter to the rest api, and set up all of the character skills and data (loooong part). Should also set up unit/integration tests for the rest api. I was mostly working on this because the server warhammercalc.com gets its character data from is always down, but it seems with TW3 coming out they are working on that site again so putting this project on hold.

Project is split into two main parts.

## Frontend

Built using Vite, React, Typescript, and Tailwind.

## Backend

Built using NodeJS, Express, Typescript


## Commands

npm run dev - Runs both frontend and backend in dev mode, reloading on any saved changes.

npm run start - Installs and builds the frontend into the backend ./public/ folder, then installs and builds the backend from typescript and runs the server.

## Known Issues
- Reinforcement Range icon is unknown, subbed with subterranean icon.
- Yellow background strider icon is unknown, subbed with normal strider icon.
- Hero action cost / Building cost icon is unkown, subbed with military spending icon.

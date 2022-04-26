# TotalWarhammerPlanner

Complete rebuild using extracted data.

## Frontend

Built using Vite, React, Typescript, and Tailwind.

## Backend

Built using NodeJS, Express, Typescript

## Commands

npm run dev - Runs both frontend and backend in dev mode, reloading on any saved changes.

npm run start - Installs and builds the frontend into the backend ./public/ folder, then installs and builds the backend from typescript and runs the server.

## Known Issues
- Build links broke somewhere? (Fixed?)
- Character quest items need to be separated into a different component
- Figure out what to do with background/hidden skills
- Work on overall page style

## Adding A Mod
- Copy over json data to backend ./src/data
- Copy over auto extracted and manually extracted images to respective frontend ./src/imgs or ./public/imgs, using respective vanilla game images as a base to overwrite.
- Make sure to set up characterImgs export in ./src/imgs/characters/<mod>
- Create appropriate mod character list in frontend ./src/data, may have to look around rpfm for actual character names
- Find/create an icon for the mod, put into ./src/imgs/games and link with gameImage.ts
- Create appropriate entry in frontend ./src/data/gameData

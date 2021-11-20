# Frontend

## Folder Structure
../backend/public/ - (Gitignored) Where the frontend builds itself to be served by the backend.

./src/ - All the React/Typescript project source.

## What is the Frontend Doing?
The main flow of the frontend is to allow a user to select a character from a faction. That will send a get request to the REST api for that characters skill tree. Then we display that skill tree and allow the user to create various skill builds and save/share them. There are A LOT of skills in the game, so I set up a lot of data structures to make some development easier.

## Assets
Within the ./src/assets/img/ folder all of the images are exported using Vite so that it handles relative file paths no matter where we use the images, as well as allowing us to sanely name a lot of the images. The skills subfolder also has enums set up in ./src/types/enums, that are also used on the backend to help ensure names across both front and back are consistent.

## Adding a New Skill Icon
Add the icon (ideally in an optimized .webp format) to the appropriate subfolder in ./src/assets/img/skills/ Then add it to that subfolders index.ts to export it properly. Go into the ./src/types/enums and add it to the appropriate enum, copying that change to the backend as well.

## Adding a New Character
Add the character icon (ideally in an optimized .webp format) to the appropriate factions subfolder in ./src/assets/img/portraits/ and add them to that factions portrait.ts export. In the appropriate factions .ts file in ./src/data/factions/ add the character to either lords or heroes, giving them the user facing name string, and importing the portrait you set up.

## Adding a New Faction
Create a subfolder in ./src/assets/img/flags/ and add the faction flag icons(s) (ideally in an optimized .webp format) to it. As well as setting it up in the flags folder factionFlags.ts file. In ./src/data/factions/ create a new file for that factions flag you just set up, its user facing name via the FactionNames enum in the types folder, and any new lords/heroes as above. Be sure to add this file to the factions.ts

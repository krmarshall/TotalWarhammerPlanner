# Backend

## Folder Structure
./dist/ - (Gitignored) When backend is started typescript builds the standard js to be run by node here. 

./public/ - (Gitignored) Where the frontend builds itself to be served by the backend.

./src/ - All the typescript project source

## What is the Backend Doing?
The backend server has 2 main responsibilities, we are serving the static frontend, as well as acting as a REST api for character skill tree JSON.

## Data Structures

### Character Data / Skill Trees
Within the ./src/data/*Faction*/characters/ folder each factions lords and heroes skill trees are stored. The interface for these skill trees is described in ./src/types/interfaces/

TODO: CREATE THE CHARACTER INTERFACE

### Skill Lines
Each character skill tree is made out of multiple skill lines, many of these are reused among the faction, such as their blue and red skill lines. So we save these lines to be reused here. The interface for these skill lines is described in ./src/types/interfaces/

TODO: CREATE THE SKILL LINE INTERFACE

### Skills
Each skill line is made out of individual skills, which are again, frequently reused. Their interface has some added complexity because skills have multiple levels, and many potential effects. We also have to give the frontend a bunch of information about when skills are selectable, what other skills they block, ect. The interface for these skill lines is described in ./src/types/interfaces/

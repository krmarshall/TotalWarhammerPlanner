import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import { writeFileSync, statSync, rmSync } from 'fs';

import apiListener from './api';
import setCustomCacheControl from './setCustomCacheControl';
import { initializeData, bulkData } from './initializeData';

const app = express();

const origin =
  process.env.NODE_ENV === 'production'
    ? ['https://totalwarhammerplanner.com', 'https://totalwarhammerplanner.com/', 'totalwarhammerplanner.com']
    : ['http://localhost:5000', 'http://localhost:5173'];

initializeData();
writeFileSync('./bulkDataDebug.json', JSON.stringify(bulkData, null, 0));
const { size } = statSync('./bulkDataDebug.json');
console.log(`${Math.floor(size / (1024 * 1024))}mb of skill trees loaded`);
rmSync('./bulkDataDebug.json');

// Opening page from google result causes fetches to error on cors even tho origins match z.z disable till find fix
// app.use(
//   cors({
//     origin: origin,
//   })
// );
app.use(cors());
app.use(helmet());
app.use(compression());

// Serve rest api
app.get('/api/:gameKey.:factionKey.:characterKey', apiListener);

// Serve static front end HTML/JS/Images
app.use(
  express.static('public', {
    maxAge: '1y',
    setHeaders: setCustomCacheControl,
  })
);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

export default app;

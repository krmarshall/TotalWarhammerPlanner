import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';

import apiListener from './api';
import imageTestListener from './imageTest';

import setCustomCacheControl from './setCustomCacheControl';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(compression());

app.get('/api/imagetest/', imageTestListener);

// Serve rest api
app.get('/api/:factionKey.:characterKey', apiListener);

// Serve static front end HTML/JS/Images
app.use(
  express.static('public', {
    maxAge: '1m',
    setHeaders: setCustomCacheControl,
  })
);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});

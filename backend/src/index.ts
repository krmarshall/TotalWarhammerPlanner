import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';

import apiListener from './api';
import imageTestListener from './imageTest';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

app.get('/api/imagetest/', imageTestListener);

// Serve rest api
app.get('/api/:characterKey', apiListener);

// Serve static front end HTML/JS/Images
app.use(compression());

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});

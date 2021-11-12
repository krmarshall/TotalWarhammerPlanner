import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import apiListener from './api';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

// Serve rest api
app.get('/api/:characterKey', apiListener);

// Serve static front end HTML/JS/Images
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});

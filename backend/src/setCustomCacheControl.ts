import express, { Response } from 'express';

const setCustomCacheControl = (res: Response, path: string) => {
  if (express.static.mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
};

export default setCustomCacheControl;

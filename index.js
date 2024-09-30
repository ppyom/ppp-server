import express from 'express';
import cors from 'cors';
import config from './config.js';

const app = express();

const corsOptions = {
  origin: config.host.client,
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res, next) => {
  return res.send({ github: 'https://github.com/ppp-server' });
});

app.listen(config.host.port, () => {
  console.log('listen!');
});

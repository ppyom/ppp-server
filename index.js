import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  return res.send({ github: 'https://github.com/ppp-server' });
});

app.listen(8080, () => {
  console.log('listen!');
});

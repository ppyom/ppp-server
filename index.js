import express from 'express';
import cors from 'cors';
import config from './config.js';
import holidayRouter from './route/holiday.js';
import saraminRouter from './route/saramin.js';
import blogRouter from './route/blog.js';

const app = express();

const corsOptions = {
  origin: config.host.client,
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res, next) => {
  return res.send({ github: 'https://github.com/ppp-server' });
});

app.use('/holiday', holidayRouter);
app.use('/saramin', saraminRouter);
app.use('/blog', blogRouter);

app.use((req, res) => {
  return res.status(404).send({ message: '찾을 수 없는 페이지입니다.' });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  return res.status(500).send({
    message: '서버에서 오류가 발생했습니다.',
    error: {
      message: error.message,
    },
  });
});

app.listen(config.host.port, () => {
  console.log('listen!');
});

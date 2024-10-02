import axios from 'axios';

const client = axios.create({
  baseURL: 'https://dev.to/api',
  params: {
    per_page: 10,
  },
});

export const getArticles = async (req, res) => {
  const data = await client.get('articles', {
    params: {
      top: 7,
    },
  });
  return res.send({ data: data.data });
};

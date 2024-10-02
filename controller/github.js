import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/search',
  params: {
    per_page: 10,
  },
  headers: {
    accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  },
});

export const getRepositories = async (req, res) => {
  const { date } = req.query;
  const data = await client.get('repositories', {
    params: {
      q: `language:js,ts,react stars:>100 created:>${date}`,
      sort: 'stars',
      order: 'desc',
    },
  });
  return res.send({ data: data.data.items });
};

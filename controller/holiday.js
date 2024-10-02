import axios from 'axios';
import config from '../config.js';

const client = axios.create({
  baseURL: 'https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService',
  params: {
    ServiceKey: config.apis.holiday.key,
    _type: 'json',
    numOfRows: 200,
  },
});

export const getHolidays = async (req, res) => {
  const { year } = req.query;
  if (!year) {
    return res.statusCode(400).send({});
  }
  const data = await client.get('getHoliDeInfo', {
    params: { solYear: year },
  });
  if (data.status !== 200) {
    return res.statusCode(400).send({});
  }
  return res.send({ ...data.data.response.body });
};

export const getRestDays = async (req, res) => {
  const { year } = req.query;
  const data = (
    await client.get('getRestDeInfo', {
      params: { solYear: year },
    })
  ).data;
  return res.send({ ...data.response.body });
};

export const getAnniversary = async (req, res) => {
  const { year } = req.query;
  const data = (
    await client.get('getAnniversaryInfo', {
      params: { solYear: year },
    })
  ).data;
  return res.send({ ...data.response.body });
};

export const get24Divisions = async (req, res) => {
  const { year } = req.query;
  const data = (
    await client.get('get24DivisionsInfo', {
      params: { solYear: year },
    })
  ).data;
  return res.send({ ...data.response.body });
};

export const getSundryDays = async (req, res) => {
  const { year } = req.query;
  const data = (
    await client.get('getSundryDayInfo', {
      params: { solYear: year },
    })
  ).data;
  return res.send({ ...data.response.body });
};

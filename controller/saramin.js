import config from '../config.js';

const baseurl = 'https://oapi.saramin.co.kr';

export const getJobSearch = async (req, res) => {
  const searchParams = new URLSearchParams({
    'access-key': config.apis.saramin.key,
    job_mid_cd: '2',
    count: 10,
  });
  const response = await fetch(
    `${baseurl}/job-search?${searchParams.toString()}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  const data = await response.json();
  return res.send({ job: data.jobs.job });
};

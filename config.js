import 'dotenv/config';

const getEnv = (key, defaultValue = undefined) => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`해당 Key(${key})에 대한 value가 없습니다.`);
  }
  return value;
};

const config = {
  host: {
    client: getEnv('CLIENT_URL'),
    port: parseInt(getEnv('PORT', 3001)),
  },
  apis: {
    holiday: {
      key: getEnv('HOLIDAY_API_KEY'),
    },
    saramin: {
      key: getEnv('SARAMIN_API_KEY'),
    },
  },
};

export default config;

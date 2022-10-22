import dotenvConfig from './dotenvConfig';

dotenvConfig();

export default {
  PORT: process.env.PORT || 3003,
};

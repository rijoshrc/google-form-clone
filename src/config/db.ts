/**
 * Configuration for db connection
 */
const dbConfig = {
  mongo: {
    connectionString: process.env.DB_STRING,
  },
  mysql: {},
};

export default dbConfig;

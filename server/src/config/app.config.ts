export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: +process.env.PORT || 3007,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: process.env.JWT_EXPIRY,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDb: process.env.POSTGRES_DB,
  postgresPort: +process.env.POSTGRES_PORT,
  postgresHost: process.env.DB_HOST,
});

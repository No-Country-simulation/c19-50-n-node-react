import * as Joi from 'joi';

export const JoiSchemaValidation = Joi.object({
  POSTGRES_USER: Joi.string().required().messages({
    'any.required': 'Please provide environment variable {#key}',
  }),
  POSTGRES_PASSWORD: Joi.string().required().messages({
    'any.required': 'Please provide environment variable {#key}',
  }),
  POSTGRES_DB: Joi.string().required().messages({
    'any.required': 'Please provide environment variable {#key}',
  }),
  POSTGRES_PORT: Joi.number().required().messages({
    'any.required': 'Please provide environment variable {#key}',
  }),
  // JWT_SECRET: Joi.string().required().messages({
  //   'any.required': 'Please provide environment variable {#key}',
  // }),
  // JWT_EXPIRY: Joi.string().required().messages({
  //   'any.required': 'Please provide environment variable {#key}',
  // }),
  PORT: Joi.number().default(3007),
  DB_HOST: Joi.string().default('localhost'),
  NODE_ENV: Joi.string().default('dev'),
});

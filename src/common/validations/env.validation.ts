import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  FT_PORT: Joi.number().required(),
  FT_DB_HOST: Joi.string().required(),
  FT_DB_PORT: Joi.number().required(),
  FT_DB_DBNAME: Joi.string().required(),
  FT_DB_USERNAME: Joi.string().required(),
  FT_DB_PASSWORD: Joi.string().required(),
});

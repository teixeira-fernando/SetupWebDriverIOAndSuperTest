const Joi = require('joi');

const schema = Joi.object({
    data: Joi.object({
        id: Joi.number().required(),
        email: Joi.string().required(),
        first_name: Joi.string()
            .alphanum()
            .required(),
        last_name: Joi.string()
            .alphanum()
            .required(),
        avatar: Joi.string().required(),
    }),
    ad: Joi.object({
        company: Joi.string().required(),
        url: Joi.string().required(),
        text: Joi.string().required(),
    }),
});

module.exports = schema;

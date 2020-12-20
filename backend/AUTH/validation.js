//VALIDATION
const joi = require('@hapi/joi');



//Register validation
const registrationValidation = data => {
    const schema = {
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(data, schema);

};
const loginValidation = data => {
    const schema = {
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(data, schema);

};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;

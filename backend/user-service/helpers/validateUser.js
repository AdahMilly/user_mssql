  
const Joi = require('joi')

exports.validateUsers = (user)=>{
    const schema = Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    })
    
    return schema.validate(user)
}
const express = require('express')
const joi = require('joi')
const { createValidator } = require('express-joi-validation')
const validator = createValidator({ passError : true })
const app = express();

const userSchema =  joi.object({
    name : joi.string().allow('').label('name'),
    email : joi.string().required().label('email')
    
})


app.post('/login', validator.body(userSchema, {
    joi: { convert: true, allowUnknown: false }
}), login)

module.exports = app 
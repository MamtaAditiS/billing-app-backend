const express = require('express')
const joi = require('joi')
const { createValidator } = require('express-joi-validation')
const app = express();


app.post('/login', (req, res, next) => {
    console.log(req.body, "body")
})
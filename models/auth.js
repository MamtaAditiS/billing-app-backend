const { string } = require('joi')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name : {
            type : string, 
            default: ""
        }, 
        email: {
            type: string, 
            required: true
        }, 
        token: {
            type : string
        }, 
        role : {
            type: string
        }
    }, { timestamps : true }
);

module.exports = UserSchema
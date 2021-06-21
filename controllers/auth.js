import { response } from 'express'

const { onLogin } = require('../services/auth')


export const login = async (req, res, next) => {
    const payload = req.body

    try {
        const data = await onLogin(payload)
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({ 'message' : 'Login Attempt Failed' })
    }
}
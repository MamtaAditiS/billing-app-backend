const User = require('../models/auth')


export const onLogin = async payload => {
    const UserData = await User.findOneByCondition({
        email : payload.email
    })

    let loginToken = generateToken({
        when: new Date(), 
        user_id: UserData._id
    }) 

    const data = await User.onLoginDone(UserData._id, loginToken, payload)

    return {
        ...data, 
        token: data.loginToken
    }
}
const users = require('../registration/resgistration.model')

   const findUsers = async () => {
        allUser = await users.find()
        return allUser
    }


module.exports = {findUsers}

const user = require('../registration/resgistration.model');
const jwt = require('jsonwebtoken');

class loginUsers {
  userLoginService = (email) => user.findOne({ email: email }).select("+password");

  findUseById = async (userId) => {
    return await user.findOne({ _id: userId }).select('+password');
  };
  generaToken = (idUser) => {
    return jwt.sign({ _id: idUser }, process.env.SECRET, { expiresIn: 86245 });
  };

   findUsers = async () => {
    const allUser = await user.find();
    return allUser;
  }
}

const login = new loginUsers();
module.exports = { login };

const user = require('../registration/resgistration.model');
const jwt = require('jsonwebtoken');

class loginUsers {
  userLoginService(email) {
    user.findOne({ email: email }).select('+passoword');
  }
  findUseById = async (userId) => {
    return await user.findOne({ _id: userId }).select('+password');
  };
  generaToken = (idUser) => {
    jwt.sign({ id: idUser }, process.env.SECRET, { expiresIn: 86245 });
  };

  async findUsers() {
    const allUser = await user.find();
    return this.allUser;
  }
}

const login = new loginUsers();
module.exports = { login };

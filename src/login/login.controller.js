const loginService = require('./login.service');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class loginController {
  async userLogin(req, res) {
    const { email, password } = req.body;
    const user = await loginService.login.userLoginService(email);

    if (!user) {
      return res.status(400).send({
        message: 'User not found',
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send({ message: 'Invalid password' });
    }

    const token = loginService.login.generaToken(user.id);

    res.send({ token });

  }

  async findAllUsers(req, res) {
    const user = await loginService.login.findUsers();
    if (user.length === 0) {
      return res.status(404).send({ Message: 'NO to registered users' });
    }
    res.send(user);
  }
}

const login = new loginController();

module.exports = { login };

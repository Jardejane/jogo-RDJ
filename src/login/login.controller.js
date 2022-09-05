const loginService = require('./login.service');

const findAllUsers = async (req, res) => {
  const user = await loginService.findUsers();
  if (user.length == 0) {
    return res.status(404).send({ Message: 'NO to registered users' });
  }

  res.send(user);
};

module.exports = {findAllUsers};

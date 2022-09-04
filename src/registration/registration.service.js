const user = require("./resgistration.model");
class registrationService {
  getEmail(email) {
    user.findOne({ email: email });
  }
  CreateUser = async (body) => {
    return await user.create(body);
  };
}

const registrationCreate = new registrationService();

module.exports = {registrationCreate};

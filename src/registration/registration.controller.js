const serviceRegistration = require("./registration.service");

const controllerCreateRegistration = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).send({
        message: "Need to all fields",
      });
    }
    const emailUser = await serviceRegistration.registrationCreate.getEmail(
      email
    );
    const userNew = await serviceRegistration.registrationCreate
      .CreateUser(req.body)
      .catch((err) => console.log(err));

    if (!userNew) {
      return res.status(400).send({
        message: "Error creating a user",
      });
    }

    res.status(201).send({
      user: {
        id: userNew._id,
        name,
        username,
        email,
      },
    });
  } catch (error) {
    console.log("erro ao tentar cadastrar " + error);
  }
};

module.exports = {controllerCreateRegistration};

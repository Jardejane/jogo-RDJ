const mongoose = require("mongoose");

const connectDataBase = () => {
  console.log("banco conectado");

  mongoose
    .connect(process.env.URL_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Banco conectado"))
    .catch((err) => console.log(`Erro so conectar com o banco ${err}`));
};

module.exports = connectDataBase;

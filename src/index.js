require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swagger = require('./swagger/swagger.route');

const connectDataBase = require('./database/database.js');
const routeRegistration = require('./registration/registration.route');

const routeLogin = require('./login/login.route');

const PORT = process.env.PORT || 3000;
const app = express();

connectDataBase();

app.use(cors());
app.use(express.json());

app.use('/inicial', routeRegistration);
app.use('/login', routeLogin);
app.use('/api-docs', swagger);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

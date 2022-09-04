require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDataBase = require('./database/database.js')
const routeRegistration = require('./registration/registration.route')

const PORT = process.env.PORT || 3000
const app = express();

connectDataBase()

app.use(cors());
app.use(express.json());

app.use("/inicial", routeRegistration)

app.listen(PORT,() =>{
  console.log(`Servidor rodando na porta ${PORT}`)
})
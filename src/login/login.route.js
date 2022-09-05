const route = require('express').Router()
const loginController  = require('./login.controller');

route.get("/users", loginController.findAllUsers)

module.exports = route

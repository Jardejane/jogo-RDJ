const route = require('express').Router()
const loginController  = require('./login.controller');
const middleware = require('./middleware')

route.get("/users", middleware, loginController.login.findAllUsers)
route.post('/entrar', loginController.login.userLogin)
module.exports = route

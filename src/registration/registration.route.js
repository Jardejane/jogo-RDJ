const route = require('express').Router()
const controllerRegistration = require('./registration.controller')

route.post("/registration",  controllerRegistration.controllerCreateRegistration)

module.exports = route

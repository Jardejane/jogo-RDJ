const route = require('express').Router()
const controllerRegistration = require('./registration.controller')

route.post("/registrartion",  controllerRegistration.controllerCreateRegistration)

module.exports = route
const { register, login } = require('../Controller/userController')
const route = require('express').Router();



route.post('/',register);
route.post('/login',login)

module.exports = route;
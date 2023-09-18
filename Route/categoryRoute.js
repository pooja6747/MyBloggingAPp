const { postcategory,getcategory} = require('../Controller/categoryController')
const route = require('express').Router();
const auth = require('../Middleware/auth')



route.get('/',getcategory);
route.post('/',auth,postcategory)

module.exports = route;
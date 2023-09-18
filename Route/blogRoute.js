const { postblog,getblog} = require('../Controller/blogController')
const route = require('express').Router();
const auth = require('../Middleware/auth')


route.post('/',getblog);
route.post('/',auth,postblog)

module.exports = route;
const express = require('express');
const router = express.Router();


require('dotenv').config();   
const createUser = require('../services/auth-service').createUser;
const loginUser = require('../services/auth-service').loginUser;

router.post('/register', async (req, res) => {
    return createUser(req, res);
})

router.post('/login', async (res, req) => {
    return loginUser(req, res);
})
module.exports = router;
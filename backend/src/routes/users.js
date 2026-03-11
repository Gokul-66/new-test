const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { getUser } = require('../services/user-service');

router.get('/me/:email', async (req, res) => {
    return getUser
});

router.put('/me/:email', async (req, res) => {
    return updateUser(req, res); 
});
module.exports = router;
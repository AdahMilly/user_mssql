const express = require('express');
const router = express.Router();

const { loginUser, registerUser } = require('../controllers/authentication');

router.post('/registerUser',registerUser);
router.post('/loginUser', loginUser);

module.exports = router;

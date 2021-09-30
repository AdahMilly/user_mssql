const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { loginUser, registerUser } = require('../controllers/authentication');

router.post('/registerUser', auth, registerUser);
router.post('/loginUser', loginUser);

module.exports = router;

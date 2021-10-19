const express = require('express');
const router = express.Router();

const { loginUser, registerUser, forgotPassword, resetPassword } = require('../controllers/authentication');

router.post('/registerUser',registerUser);
router.post('/loginUser', loginUser);

router.get('/forgotPassword', forgotPassword)
router.post('forgotPassword', forgotPassword)

router.get('/resetPassword', resetPassword)
router.post('resetPassword', resetPassword)
module.exports = router;

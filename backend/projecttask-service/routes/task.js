const express = require('express');
const router = express.Router();
const {getOne,getAll,createOne,updateOne,markTaskAsComplete,} = require('../controllers/task');

router.get('/all', getAll);

router.get('/one/:id', getOne);

router.post('/create', createOne);

router.post('/complete/:id', markTaskAsComplete);

module.exports = router;

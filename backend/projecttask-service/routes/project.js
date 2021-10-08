const express = require('express');
const router = express.Router();
const { getOne, getAll, createOne, updateOne, deleteOne } = require('../controllers/project');

router.get('/all', getAll);

router.get('/one/:id', getOne);

router.post("/create", createOne);

router.post("/update", updateOne);

router.delete("/delete/:id", deleteOne)

module.exports = router;

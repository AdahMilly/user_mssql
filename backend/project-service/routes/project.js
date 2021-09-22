const express = require('express');
const router = express.Router();
const { getOne, getAll, createOne, updateOne, deleteOne } = require('../controllers/project');

router.get('/all', getAll);

router.get('/one/:id', getOne);

router.put("/create", createOne);

router.post("/update", updateOne);

router.delete("/delete", deleteOne)

module.exports = router;

'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/config');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send({ status: 'Ok', message: 'Welcome to task runner service' });
});

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on localhost ${PORT}`));

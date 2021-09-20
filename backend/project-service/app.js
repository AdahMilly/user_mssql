require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config');
const db = require('./db/db');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/connect', async (req, res) => {
  let users = await db.exec('usersGet');
  console.log(users);
  res.send({ status: 'Ok', message: 'Welcome to API' });
});

const PORT = config.PORT;
app.listen(PORT, () => console.log(`App running on localhost ${PORT}`));

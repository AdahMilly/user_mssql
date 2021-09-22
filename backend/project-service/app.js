require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config');

const projectRoute = require('./routes/project');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/project', projectRoute);

const PORT = config.port;
app.listen(PORT, () => console.log(`App running on localhost ${PORT}`));

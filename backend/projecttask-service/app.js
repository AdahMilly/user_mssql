require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config/config');

const projectRoute = require('./routes/project');
const taskRoute = require('./routes/task');
const jwtAuth = require('./middleware/jwtAuth');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/project', projectRoute);
app.use('/task', taskRoute)

const PORT = config.port;
app.listen(PORT, () => console.log(`App running on localhost ${PORT}`));

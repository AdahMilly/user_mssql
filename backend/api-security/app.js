"use strict";
require('dotenv').config()
const express = require("express")
const app = express();
const cors = require("cors");
const config = require("./config");
const db = require('./db/db');

// Routes
const usersRoute = require("./routes/user")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use("/users", usersRoute)

app.get('/', (req, res) => {
    res.send({ status: "Ok", message: "Welcome to API" });
})

app.get('/connect', async (req, res) => {
    let users = await db.exec("usersGet");
    console.log(users);
    res.send({ status: "Ok", message: "Welcome to API" });
})

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on localhost ${PORT}`))
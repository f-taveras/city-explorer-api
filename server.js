'use strict'

require("dotenv").config();

const express = require("express")

const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    let data = {message: "hello world"};
    response.json(data)
})

app.listen(
    PORT,
    () => console.log(`listeing on port ${PORT}`)
    
)
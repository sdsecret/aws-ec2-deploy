require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Successfully deploy to aws EC2',
        status: 200
    })
})

const server = http.createServer(app);

server.listen(process.env.PORT,()=> {
    console.log(`Server started at port ${process.env.PORT}`);
})
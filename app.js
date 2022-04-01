const express = require('express');
const axios = require('axios');
require('dotenv').config()

const app = express();

const port = 3000;

app.use(express.json());

app.post('/pay', async (req,res) => {
    try{
    const response = await axios.post(`${process.env.serviceURL}/paymentCheck`, req.body );
    res.send(response.data);
    }catch (e) {
        res.status(500)
        res.send(e);
    }
})

app.listen(port, () => {
    console.log(port)
})

const express = require('express');

const app = express();

const port = 5000;

app.use(express.json());

app.post('/paymentCheck', (req,res) => {
    const {email, totalAmount, country} = req.body;
    const match = email.match(/(yahoo)|(gmail)/);
    if(totalAmount > 1000 || country !== 'UAE'|| match) {
       return  res.send('payment not safe');
    }
    res.send('payment is safe')
})


app.listen(port, () => {
    console.log(port)
})
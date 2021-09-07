const express = require('express');
require('dotenv').config();
const app = express();

//connect to DB
require('./db');

const Quotes = require('./model/quotes_model');

app.use(express.json());

app.get('/', async (req, res) => {
    const quotesData = await Quotes.find();
    if (!quotesData) {
        return res.status(401).json({ success: false, data: "error" });
    } else if (quotesData == '') {
        return res.status(200).json({ success: true, data: "empty" });
    }
    return res.status(200).json({ success: true, data: quotesData });
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
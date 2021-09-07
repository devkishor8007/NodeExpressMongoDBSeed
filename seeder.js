const fs = require('fs');
const dotenv = require('dotenv');

// load env vars
dotenv.config();

//load model
const Quotes = require('./model/quotes_model');

//connect to DB
require('./db');

// read json files
const quotes = JSON.parse(fs.readFileSync(`${__dirname}/_datum/quotes.json`, 'utf-8'))

// import into DB
const importData = async () => {
    try {
        await Quotes.create(quotes);
        console.log('Data Imported...');
        process.exit();
    } catch (e) {
        console.log(e);
    }
}

// delete data
const deleteData = async () => {
    try {
        await Quotes.deleteMany();
        console.log('Data Destroyed...');
        process.exit();
    } catch (e) {
        console.log(e);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}

// node seeder -i
const mongoose = require('mongoose');

const quotesData = mongoose.Schema({
    sid: {
        unique: true,
        type: Number
    },
    authorname: {
        type: String,
        required: [true, 'Please add a author name'],
        maxlength: [500, 'Name can not more than 500 Characters']
    },
    msg: {
        type: String,
        required: [true, 'Please add a msg'],
        maxlength: [500, 'Name can not more than 500 Characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Quotes', quotesData);
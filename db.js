const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB is connected");
}).catch((e) => {
    console.log("MongoDB is not connected");
});
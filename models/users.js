const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testapp1');

const userSchema = mongoose.Schema({
    image: "string",
    name: "string",
    email: "string"
})

module.export = mongoose.model('user', userSchema) ;
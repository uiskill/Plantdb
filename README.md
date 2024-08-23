const mongoose = require('mongoose');

const mongodb= "you Db Here";

const connectToMongo = () =>{
    mongoose.connect(mongodb);
    console.log("connected");
}

module.exports = connectToMongo;
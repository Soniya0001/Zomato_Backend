const mongoose = require("mongoose");
const Schema = mongoose.Schema
const LocationSchema = new Schema({
    name:{
        type:String,
        require:true
    }
})

    module.exports = mongoose.model('locationData', LocationSchema, 'SampleCollection');
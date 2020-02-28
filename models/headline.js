var mongoose = require("mongoose");


//creating schema below

var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }

});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
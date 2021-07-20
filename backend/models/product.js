  
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {type: String, required: true, unique: true},
    type: {type: String, required: true},
});

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product', productSchema);
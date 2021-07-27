  const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const meetingSchema = new Schema({
    date: {type: String, required: true},
    time: {type: String, required: true},
    reason: {type: String, required: true},
    status: {type: String}
});

meetingSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Meeting', meetingSchema);
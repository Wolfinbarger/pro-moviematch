const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    // id: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    movie_id: Number,
    group_id: [Number],
    streaming_service: [Number],
    likes: [Number]

})

module.exports = mongoose.model('User', userSchema)
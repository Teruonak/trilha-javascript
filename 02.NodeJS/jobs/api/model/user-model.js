'use strict';

//this file will only export mehtods like 'get'. if exports all the object, then will publish too much code

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})

// mongoose will understand that the User will be related with Users collections
const User = mongoose.model('User', schema);

module.exports.get = (query) => {
    return User.find(query);
}

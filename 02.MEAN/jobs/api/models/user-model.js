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
        default: true
    }
})

// mongoose will understand that the User will be related with Users collections
const User = mongoose.model('User', schema);

module.exports.get = (query) => {
    query.active = true;
    return User.find(query);
}

module.exports.getById = (_id) => {
    let _query = {
        _id,
        active: true
    };
    let _fields = {
        password: false
    };
    return User.findOne(_query, _fields);
};

module.exports.save = (user) => {
    return new Promise((resolve, reject) => {
        new User(user).save((err, data) => {
            if (err) { // the function will execute when it contains error
                return reject(err);
            }

            resolve({ // the funciton was execute successfully
                _id: data._id
            });
        });
    });
}

module.exports.update = (_id, user) => {
    let _query = {
        _id
    }; // same as let _query = { _id: _id };

    return User.update(_query, user);
};

module.exports.remove = (_id) => {
    let _query = {
        _id
    };
    let _fields = {
        active: false
    };
    return User.update(_query, _fields);
};

module.exports.authUser = (user) => {
    return User.findOne({
        name: user.name,
        password: user.password,
        active: true
    });
};

module.exports.authorization = (credentials) => {
  return User.findOne({
    name: credentials.name,
    password: credentials.password,
    active: true
  });
};

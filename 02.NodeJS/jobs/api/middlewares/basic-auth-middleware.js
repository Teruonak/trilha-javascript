'use strict';

const AUTHORIZATINO_METHOD = 'Basic';

module.exports = (req, res, next) => {
    const User = require('../model/user-model');
    let _basicHeader = req.headers.authorization || ' ';
    let _basicHeaderData = _basicHeader.split(' ');

    if (_basicHeaderData && _basicHeaderData[0] !== AUTHORIZATINO_METHOD) {
        return res.status(403).send();
    }

    let _basicAuthCredentialData = (new Buffer(_basicHeaderData[1], 'base64'))
        .toString('utf8')
        .split(':');

    let _credentials = {
        name: _basicAuthCredentialData[0],
        password: _basicAuthCredentialData[1]
    }

    User.authorization(_credentials)
        .then((data) => {
            if (data && data != null) {
                req.user = data;
                return next();
            }

            return res.status(401).send();
        })
        .catch((err) => {
            return res.status(401).send();
        });
};

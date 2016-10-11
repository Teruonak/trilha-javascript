'use strict';

const AUTHORIZATINO_METHOD = 'Basic';

module.exports = (req,res,next) => {
  let _basicHeader = req.headers.authorization || ' ';
  let _basicHeaderData = _basicHeader.split(' ');

  if (_basicHeaderData && _basicHeaderData[0] !== AUTHORIZATINO_METHOD) {
    return res.status(403).send();
  }

  return next();
};

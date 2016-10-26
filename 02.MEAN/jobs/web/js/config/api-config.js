(function(angular) {
  'use strict';

  const _baseApiPath = 'http://localhost:4000';;
  const _api = {
    users: _baseApiPath + '/users',
    user: _baseApiPath + '/user',
    profile: _baseApiPath + '/user/profile'
  };

  var app = angular.module('config').constant('api', _api);

})(window.angular);

(function(angular) {
  'use strict';

  const _baseApi = 'http://localhost:4000';;
  const _api = {
    users: _baseApi + '/users',
    user: _baseApi + '/user'
  };

  var app = angular.module('jobs').constant('api', _api);

})(window.angular);

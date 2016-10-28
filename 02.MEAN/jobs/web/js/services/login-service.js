(function(angular, btoa) {
  'use strict';

  // 'service' return a singleton and 'factory' return a new instance
  angular.module('login').factory('LoginService', service);

  service.$inject = ['$http','api','$cookies','$q'];

  function service($http, api, $cookies, $q) {
    const svc = {};
    const CREDENTIAL = 'credential';

    svc.authenticate = (user) => {
      const _base64 = btoa(`${user.name}:${user.password}`);
      const _config = {
        headers: {
          authorization: `Basic ${_base64}`
        }
      }
      return $q((resolve, reject) => {
        $http.get(api.profile, _config)
          .then((resp) => {
            $cookies.put(CREDENTIAL, config.headers.authorization);
            return resolve(resp);
          })
          .catch((err) => {
            return reject(err);
          })
      })
    }

    return svc;
  }
})(window.angular, window.btoa);

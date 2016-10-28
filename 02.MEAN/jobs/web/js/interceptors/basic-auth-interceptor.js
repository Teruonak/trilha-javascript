(function(angular, btoa) {
  'use strict';

  // 'service' return a singleton and 'factory' return a new instance
  angular.module('login').factory('BasicAuthInterceptor', service);

  service.$inject = ['$q', '$window', '$cookies'];

  function service($q, $window, $cookies) {
    const itc = {};
    const CREDENTIAL = 'credential';

    itc.request = (config) => {
      const credential = $cookies.getObject(CREDENTIAL);
      if (!credential) {
        goToLogin();
      }
      config.headers.Authorization = credential;
      return config;
    }
    //
    // itc.requestError = (rejection) => {
    //   console.log('RequestError');
    //   return  $q.reject(rejection)
    // }
    //
    // itc.response = (response) => {
    //   console.log('Response');
    //   return response;
    // }
    //
    itc.responseError = (rejection) => {
      if (rejection.status === 401 || rejection.status === 403) {
        goToLogin();
      }
      return $q.reject(rejection);
    }
    return itc;
  }

  function goToLogin() {
    $window.location.href = '/login.html';
  }
})(window.angular, window.btoa);

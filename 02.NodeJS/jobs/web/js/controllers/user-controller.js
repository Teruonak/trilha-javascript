(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.initUsers = () => {
      $http.get('http://localhost:4000/users')
        .then((res) => {
          vm.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    vm.save = (user) => {
      vm.users.push(user);
      vm.user = {};
    };

    vm.deleteSelected = (users) => {
      vm.users = users.filter((user) => {
        return !user.selected
      });
    };
  }

})(window.angular);

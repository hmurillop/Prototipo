(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$q','$location','AuthService','SessionService'];

    function loginController($q,$location, AuthService, SessionService){
      var vm = this;
      vm.user = {};

      vm.login = function(credentials){
        var resp = AuthService.logIn(credentials);


        if (resp === true){
          $location.path('/admin');
        }

      }
    }

})();

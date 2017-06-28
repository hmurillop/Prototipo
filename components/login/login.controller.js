(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', 'AuthenticationService', 'flashService', 'loginService', 'userService'];
    function loginController($location, AuthenticationService, FlashService, loginService, userService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // Reseteo de login
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            userService.Create(vm.user)
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/admin');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();

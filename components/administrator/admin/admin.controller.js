(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('adminController', adminController);

    adminController.$inject = ['$scope','$location','adminService', 'userService'];
    function adminController($scope, $location, adminService, userService){

      var vm = this;
      $scope.selectedIndex = 0;
          $scope.$watch('selectedIndex', function(current, old) {
              switch (current) {
                  case 0:
                      $location.url("/administrator");
                      break;
                  case 1:
                      $location.url("/eve");
                      break;
                  case 2:
                      $location.url("/rutina");
                      break;
              }
          });


    }
})();

(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('adminController', adminController);

    adminController.$inject = ['$scope','$location','adminService', 'userService'];
    function adminController($scope, $location, adminService, userService){


      var vm = this;

      function init(){

      }init();

       $scope.selectedIndex = 0;
       /*Funcion para el tabs*/
       $scope.$watch('selectedIndex', function(current, old) {
           switch (current) {
               case 0:
                   $location.url("/");
                   break;
               case 1:
                   $location.url("/");
                   break;
               case 2:
                   $location.url("/");
                   break;
               case 3:
                   $location.url("/");
                   break;
               case 4:
                   $location.url("/");
                   break;
               case 5:
                   $location.url("/");
                   break;
           }
       });

    }
})();
